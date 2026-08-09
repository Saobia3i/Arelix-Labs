'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { founders } from '@/content/site-copy';
import { UserCheck, ShieldCheck, Cpu } from 'lucide-react';

const icons = [<UserCheck key="1" size={20} />, <ShieldCheck key="2" size={20} />, <Cpu key="3" size={20} />];

export default function FoundersGrid() {
  return (
    <Section spacing="lg" id="founders">
      <Box sx={{ mb: 5 }}>
        <Typography variant="overline" sx={{ color: 'primary.main', display: 'block', mb: 0.5, fontWeight: 700 }}>
          {founders.title}
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 700, mb: 1 }}>
          {founders.headline}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.05rem' }}>
          {founders.tagline}
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {founders.items.map((founder, idx) => (
          <Grid key={founder.role} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderLeft: '4px solid',
                borderColor: 'primary.main',
              }}
            >
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                  <Box
                    sx={{
                      width: 38,
                      height: 38,
                      borderRadius: 1.5,
                      bgcolor: (theme) =>
                        theme.palette.mode === 'light' ? 'rgba(192,0,0,0.08)' : 'rgba(229,35,27,0.15)',
                      color: 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {icons[idx] ?? <UserCheck size={20} />}
                  </Box>
                  <Badge label="CO-FOUNDER" color="primary" />
                </Box>

                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: 'var(--font-oswald)',
                    fontWeight: 700,
                    fontSize: '1.3rem',
                    mb: 0.5,
                  }}
                >
                  {founder.name}
                </Typography>

                <Typography
                  variant="overline"
                  sx={{
                    color: 'primary.main',
                    display: 'block',
                    mb: 1.5,
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                  }}
                >
                  {founder.role}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  {founder.bio}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Footer Note */}
      <Box
        sx={{
          mt: 4,
          pt: 3,
          borderTop: '1px solid',
          borderColor: 'divider',
          textAlign: 'center',
        }}
      >
        <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', fontWeight: 500 }}>
          "{founders.footerNote}"
        </Typography>
      </Box>
    </Section>
  );
}
