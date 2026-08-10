import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Terms of Use — Arelix Labs',
  description: 'Terms of Use and service agreements of Arelix Labs.',
};

export default function TermsPage() {
  return (
    <Section spacing="lg" id="terms-of-use">
      <Box sx={{ maxWidth: 840, mx: 'auto' }}>
        <Typography
          variant="caption"
          sx={{
            display: 'block',
            color: 'primary.main',
            fontWeight: 700,
            letterSpacing: '0.08em',
            fontSize: '0.82rem',
            mb: 1.25,
          }}
        >
          LEGAL & GOVERNANCE
        </Typography>

        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.2rem', md: '3.2rem' },
            fontWeight: 800,
            mb: 1.5,
            letterSpacing: '-0.025em',
          }}
        >
          Terms of Use
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
          Last updated: August 10, 2026
        </Typography>

        <Card sx={{ p: { xs: 3.5, md: 5 }, borderRadius: '20px 0px 20px 20px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3.5 }}>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.25, fontSize: '1.25rem' }}>
                1. Acceptance of Terms
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                By accessing or using the Arelix Labs website and services, you agree to comply with and be bound by these Terms of Use. If you do not agree to these terms, please do not use our site or services.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.25, fontSize: '1.25rem' }}>
                2. Engineering & Development Services
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                Arelix Labs provides custom software development, PCB & electronics design, embedded systems firmware, and AI/IoT solutions. Scope, timelines, milestones, and deliverables are governed by individual master service agreements and statements of work executed between Arelix Labs and the client.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.25, fontSize: '1.25rem' }}>
                3. Ownership & Guarantee
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                Unless otherwise specified in a formal written agreement, Arelix Labs guarantees 100% IP transfer to clients upon final payment completion for contracted work. Clients retain full ownership of their custom source code, hardware schematics, and design assets.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.25, fontSize: '1.25rem' }}>
                4. Limitation of Liability
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                Arelix Labs will not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services, beyond the scope specified in formal service contracts.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.25, fontSize: '1.25rem' }}>
                5. Contact & Governance
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                For legal inquiries regarding these terms, please contact us at{' '}
                <Typography component="a" href="mailto:arelixlabs@gmail.com" sx={{ color: 'primary.main', fontWeight: 600 }}>
                  arelixlabs@gmail.com
                </Typography>.
              </Typography>
            </Box>
          </Box>
        </Card>
      </Box>
    </Section>
  );
}
