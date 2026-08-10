import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import FoundersGrid from '@/components/sections/FoundersGrid';
import CTASection from '@/components/sections/CTASection';
import { about, vision, mission } from '@/content/site-copy';
import { Target, Eye } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About — Arelix Labs',
  description:
    'Arelix Labs is a technology and engineering company building practical solutions for modern businesses.',
};

export default function AboutPage() {
  return (
    <>
      {/* About Header */}
      <Section spacing="lg" id="about-header">
        <Box sx={{ maxWidth: 820 }}>
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
            {about.headline}
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.4rem', sm: '3.2rem', md: '3.8rem' },
              fontWeight: 800,
              mb: 2.5,
              letterSpacing: '-0.025em',
              lineHeight: 1.15,
            }}
          >
            {about.tagline}
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 2, lineHeight: 1.8, fontSize: { xs: '1.05rem', md: '1.18rem' } }}
          >
            {about.short}
          </Typography>
        </Box>
      </Section>

      {/* Full About Copy */}
      <Section spacing="md" background="paper" id="about-full">
        <Card sx={{ maxWidth: 840, p: { xs: 3, sm: 4, md: 5 }, borderRadius: '20px 0px 20px 20px' }}>
          {about.full.map((paragraph, index) => (
            <Typography
              key={index}
              variant="body1"
              sx={{
                mb: index < about.full.length - 1 ? 2.5 : 0,
                lineHeight: 1.8,
                fontSize: index === about.full.length - 1 ? '1.1rem' : '1rem',
                fontWeight: index === about.full.length - 1 ? 700 : 400,
                color: index === about.full.length - 1 ? 'primary.main' : 'text.primary',
              }}
            >
              {paragraph}
            </Typography>
          ))}
        </Card>
      </Section>

      {/* Vision & Mission */}
      <Section spacing="lg" id="vision-mission">
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {/* Vision */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                height: '100%',
                p: { xs: 3.5, md: 4.5 },
                borderRadius: '20px 0px 20px 20px',
                border: '1.5px solid',
                borderColor: 'divider',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2.5 }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: '10px 0px 10px 10px',
                      bgcolor: 'rgba(184, 74, 71, 0.1)',
                      border: '1px solid rgba(184, 74, 71, 0.25)',
                      color: 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Eye size={22} />
                  </Box>
                </Box>

                <Typography variant="h3" sx={{ mb: 1.5, fontSize: '1.5rem', fontWeight: 700 }}>
                  {vision.headline}
                </Typography>

                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 600, mb: 2, color: 'primary.main', lineHeight: 1.6 }}
                >
                  &quot;{vision.statement}&quot;
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                  {vision.body}
                </Typography>
              </Box>
            </Card>
          </Grid>

          {/* Mission */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                height: '100%',
                p: { xs: 3.5, md: 4.5 },
                borderRadius: '20px 0px 20px 20px',
                border: '1.5px solid',
                borderColor: 'divider',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2.5 }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: '10px 0px 10px 10px',
                      bgcolor: 'rgba(184, 74, 71, 0.1)',
                      border: '1px solid rgba(184, 74, 71, 0.25)',
                      color: 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Target size={22} />
                  </Box>
                </Box>

                <Typography variant="h3" sx={{ mb: 1.5, fontSize: '1.5rem', fontWeight: 700 }}>
                  {mission.headline}
                </Typography>

                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 600, mb: 2, color: 'primary.main', lineHeight: 1.6 }}
                >
                  &quot;{mission.statement}&quot;
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                  {mission.body}
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Section>

      <FoundersGrid />
      <CTASection />
    </>
  );
}
