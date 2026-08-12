import { type NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/db';
import { sendLeadNotificationEmail } from '@/lib/mailer';
import { validateEmail, validatePhoneNumber } from '@/lib/validators';

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json().catch(() => ({}))) as {
      name?: string;
      email?: string;
      phone?: string;
      message?: string;
      source?: string;
    };

    const name = body.name?.trim() || '';
    const emailInput = body.email?.trim() || '';
    const phoneInput = body.phone?.trim() || '';
    const message = body.message?.trim() || '';
    const source = body.source || 'contact-form';

    if (!name || !emailInput || !phoneInput || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const emailCheck = validateEmail(emailInput);
    if (!emailCheck.isValid) {
      return NextResponse.json({ error: emailCheck.error }, { status: 400 });
    }

    const phoneCheck = validatePhoneNumber(phoneInput);
    if (!phoneCheck.isValid) {
      return NextResponse.json({ error: phoneCheck.error }, { status: 400 });
    }

    const email = emailCheck.normalized || emailInput;
    const phone = phoneCheck.normalized || phoneInput;

    let leadId = `lead_${Date.now()}`;

    // 1. Try saving lead to Prisma DB (Safe catch so DB connection failures won't return 500)
    try {
      const lead = await prisma.lead.create({
        data: {
          name,
          email,
          phone,
          message,
          source,
        },
      });
      leadId = lead.id;
    } catch (dbErr) {
      console.error('[POST /api/leads] DB Error (Lead save skipped, proceeding with email):', dbErr);
    }

    // 2. Send Email Notification
    try {
      await sendLeadNotificationEmail({
        name,
        email,
        phone,
        message,
        source,
      });
    } catch (mailErr) {
      console.error('[POST /api/leads] Mailer notification error:', mailErr);
    }

    // Return 201 Success
    return NextResponse.json({ id: leadId, success: true }, { status: 201 });
  } catch (err) {
    console.error('[POST /api/leads] Unexpected Error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  const session = await auth();
  const role = (session?.user as { role?: string } | undefined)?.role;

  if (!session || role !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(leads);
  } catch (err) {
    console.error('[GET /api/leads]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
