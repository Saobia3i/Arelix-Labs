import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Section from '@/components/ui/Section';
import FoundersGrid from '@/components/sections/FoundersGrid';
import CTASection from '@/components/sections/CTASection';
import { about, vision, mission } from '@/content/site-copy';

export const metadata: Metadata = {
  title: 'About — Arelix Labs',
  description:
    'Arelix Labs is an engineering company founded on a simple principle: the best technical work comes from people who understand the full stack.',
};

export default function AboutPage() {
  return (
    <>
      {/* About header */}
      <Section spacing="lg" id="about-header">
        <Box sx={{ maxWidth: 720 }}>
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', display: 'block', mb: 1 }}
          >
            About Arelix Labs
          </Typography>
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: '2.4rem', md: '3rem' }, mb: 3 }}
          >
            Built by engineers, for hard problems.
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 2, lineHeight: 1.75, fontSize: '1.1rem' }}
          >
            {about.short}
          </Typography>
        </Box>
      </Section>

      {/* Full about copy */}
      <Section spacing="md" background="paper" id="about-full">
        <Box sx={{ maxWidth: 720 }}>
          {about.full.map((paragraph, index) => (
            <Typography
              key={index}
              variant="body1"
              color="text.secondary"
              sx={{ mb: index < about.full.length - 1 ? 2.5 : 0, lineHeight: 1.8 }}
            >
              {paragraph}
            </Typography>
          ))}
        </Box>
      </Section>

      {/* Vision & Mission */}
      <Section spacing="lg" id="vision-mission">
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                borderLeft: '2px solid',
                borderColor: 'primary.main',
                pl: 3,
              }}
            >
              <Typography variant="h3" sx={{ mb: 2, fontSize: '1.5rem' }}>
                {vision.title}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                {vision.body}
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                borderLeft: '2px solid',
                borderColor: 'primary.main',
                pl: 3,
              }}
            >
              <Typography variant="h3" sx={{ mb: 2, fontSize: '1.5rem' }}>
                {mission.title}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                {mission.body}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Section>

      <FoundersGrid />
      <CTASection />
    </>
  );
}
