import nodemailer from 'nodemailer';

export interface LeadEmailData {
  name: string;
  email: string;
  message: string;
  source?: string | null;
}

export async function sendLeadNotificationEmail(data: LeadEmailData) {
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL || 'arelixlabs@gmail.com';
  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
  const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);
  const smtpSecure = process.env.SMTP_SECURE !== 'false';
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpUser || !smtpPass) {
    console.warn(
      `[Mailer Warning] SMTP_USER or SMTP_PASS is not configured in environment variables. ` +
        `Skipping automated email notification to ${recipient} for message from "${data.name}" (${data.email}).`
    );
    return { success: false, reason: 'unconfigured_smtp' };
  }

  const fromAddress = process.env.SMTP_FROM || `"Arelix Labs Web" <${smtpUser}>`;

  const isGmail = smtpHost.includes('gmail');
  const transporter = nodemailer.createTransport(
    isGmail
      ? {
          service: 'gmail',
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        }
      : {
          host: smtpHost,
          port: smtpPort,
          secure: smtpSecure,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        }
  );

  const submissionDate = new Date().toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'short',
  });

  const subject = `[New Contact Form Inquiry] ${data.name} via Arelix Labs`;

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0b0f19; color: #e2e8f0; margin: 0; padding: 20px; }
          .container { max-width: 600px; margin: 0 auto; background: #131b2e; border-radius: 10px; border: 1px solid #1e293b; padding: 30px; }
          .header { border-bottom: 2px solid #ef4444; padding-bottom: 15px; margin-bottom: 25px; }
          .header h2 { color: #ffffff; margin: 0; font-size: 22px; }
          .header span { color: #ef4444; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
          .field { margin-bottom: 20px; }
          .label { font-size: 12px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; }
          .value { font-size: 16px; color: #f8fafc; background: #0f172a; padding: 12px; border-radius: 6px; border: 1px solid #334155; word-break: break-word; }
          .message-box { font-size: 15px; color: #f8fafc; background: #0f172a; padding: 16px; border-radius: 6px; border-left: 4px solid #ef4444; white-space: pre-wrap; line-height: 1.6; }
          .footer { margin-top: 30px; font-size: 12px; color: #64748b; text-align: center; border-top: 1px solid #1e293b; padding-top: 15px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <span>Arelix Labs Contact Alert</span>
            <h2>New Inquiry Received</h2>
          </div>
          
          <div class="field">
            <div class="label">Sender Name</div>
            <div class="value">${escapeHtml(data.name)}</div>
          </div>

          <div class="field">
            <div class="label">Sender Email</div>
            <div class="value"><a href="mailto:${escapeHtml(data.email)}" style="color: #60a5fa; text-decoration: none;">${escapeHtml(data.email)}</a></div>
          </div>

          <div class="field">
            <div class="label">Source Form</div>
            <div class="value">${escapeHtml(data.source || 'contact-form')}</div>
          </div>

          <div class="field">
            <div class="label">Submission Date &amp; Time</div>
            <div class="value">${submissionDate}</div>
          </div>

          <div class="field">
            <div class="label">Message Details</div>
            <div class="message-box">${escapeHtml(data.message)}</div>
          </div>

          <div class="footer">
            Sent automatically by Arelix Labs Web Contact System.
          </div>
        </div>
      </body>
    </html>
  `;

  const text = `
New Contact Inquiry - Arelix Labs

Name: ${data.name}
Email: ${data.email}
Source: ${data.source || 'contact-form'}
Date: ${submissionDate}

Message:
${data.message}
  `.trim();

  try {
    const info = await transporter.sendMail({
      from: fromAddress,
      to: recipient,
      replyTo: data.email,
      subject,
      text,
      html,
    });
    console.log(`[Mailer Success] Email sent to ${recipient} (Message ID: ${info.messageId})`);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('[Mailer Error] Failed to send contact notification email:', error);
    return { success: false, error };
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
