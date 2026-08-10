import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Privacy Policy — Arelix Labs',
  description: 'Privacy Policy and data protection commitments of Arelix Labs.',
};

export default function PrivacyPage() {
  return (
    <Section spacing="lg" id="privacy-policy">
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
          Privacy Policy
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
          Last updated: August 10, 2026
        </Typography>

        <Card sx={{ p: { xs: 3.5, md: 5 }, borderRadius: '20px 0px 20px 20px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3.5 }}>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.25, fontSize: '1.25rem' }}>
                1. Overview & Commitment
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                At Arelix Labs, we respect your privacy and are committed to protecting the personal data and proprietary project details shared with us. This Privacy Policy outlines how we handle data collected through our website, contact channels, and client engagement workflows.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.25, fontSize: '1.25rem' }}>
                2. Information We Collect
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 1 }}>
                We collect information directly provided by you during inquiries or project consultations, including:
              </Typography>
              <Typography component="div" variant="body2" color="text.secondary" sx={{ pl: 2, lineHeight: 1.8 }}>
                • Contact information (Name, Email Address, Phone Number)<br />
                • Project specifications, technical requirements, and consultation notes<br />
                • Technical telemetry (IP address, browser type) for site optimization
              </Typography>
            </Box>

            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.25, fontSize: '1.25rem' }}>
                3. How We Use Your Data
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                Your information is used strictly to communicate regarding project inquiries, deliver custom software and hardware engineering solutions, fulfill contractual agreements, and improve our services. We never sell, rent, or trade client data to third parties.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.25, fontSize: '1.25rem' }}>
                4. Intellectual Property & Confidentiality
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                All client project codebases, schematics, PCB designs, and AI training parameters shared or developed under contract remain 100% confidential. Upon project completion and agreement terms, full IP rights are transferred to the client as guaranteed.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.25, fontSize: '1.25rem' }}>
                5. Contact Us
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                If you have questions regarding this Privacy Policy or data security practices, please reach out to us at{' '}
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
