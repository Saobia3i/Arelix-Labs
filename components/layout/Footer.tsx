'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const companyLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const capabilityLinks = [
  { label: 'Full-Stack Web Engineering', href: '/services' },
  { label: 'Mobile Applications', href: '/services' },
  { label: 'UI/UX Design', href: '/services' },
  { label: 'PCB & Hardware Design', href: '/services' },
  { label: 'Embedded & IoT Systems', href: '/services' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Use', href: '/terms' },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#B84A47',
        color: '#FFFFFF',
        pt: { xs: 6, md: 8 },
        pb: { xs: 4, md: 5 },
        borderTop: 'none',
      }}
    >
      <Container>
        {/* Main 4-column footer grid */}
        <Grid container spacing={{ xs: 4, md: 5 }} sx={{ mb: 6 }}>
          {/* Column 1: Brand Info */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Box sx={{ pr: { md: 2 } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, mb: 1.75 }}>
                <Box
                  component="img"
                  src="/images/arelix-logo-transparent.png"
                  alt="Arelix Labs Logo"
                  sx={{ width: 36, height: 36, objectFit: 'contain', flexShrink: 0 }}
                />
                <Typography
                  sx={{
                    fontFamily: 'var(--font-oswald), Oswald, sans-serif',
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    color: '#FFFFFF',
                  }}
                >
                  Arelix<Typography component="span" sx={{ color: 'rgba(255, 255, 255, 0.85)' }}>Labs</Typography>
                </Typography>
              </Box>

              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.7, mb: 2, maxWidth: 300 }}>
                Engineering custom software, PCB electronics, AI models, and IoT systems into unified, production-ready solutions.
              </Typography>
            </Box>
          </Grid>

          {/* Column 2: Navigation */}
          <Grid size={{ xs: 6, sm: 6, md: 2.5 }}>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 700,
                fontSize: '0.82rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                mb: 2,
              }}
            >
              Company
            </Typography>

            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, display: 'flex', flexDirection: 'column', gap: 1.25 }}>
              {companyLinks.map((link) => (
                <Box component="li" key={link.label}>
                  <Typography
                    component={Link}
                    href={link.href}
                    variant="body2"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.85)',
                      textDecoration: 'none',
                      fontSize: '0.88rem',
                      transition: 'all 120ms ease',
                      '&:hover': { color: '#FFFFFF', pl: 0.5 },
                    }}
                  >
                    {link.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Column 3: Capabilities */}
          <Grid size={{ xs: 6, sm: 6, md: 2.5 }}>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 700,
                fontSize: '0.82rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                mb: 2,
              }}
            >
              Capabilities
            </Typography>

            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, display: 'flex', flexDirection: 'column', gap: 1.25 }}>
              {capabilityLinks.map((link) => (
                <Box component="li" key={link.label}>
                  <Typography
                    component={Link}
                    href={link.href}
                    variant="body2"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.85)',
                      textDecoration: 'none',
                      fontSize: '0.88rem',
                      transition: 'all 120ms ease',
                      '&:hover': { color: '#FFFFFF', pl: 0.5 },
                    }}
                  >
                    {link.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Column 4: Contact Info */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 700,
                fontSize: '0.82rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                mb: 2,
              }}
            >
              Contact Us
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
                <Mail size={16} style={{ color: 'rgba(255, 255, 255, 0.85)', flexShrink: 0 }} />
                <Typography
                  component="a"
                  href="mailto:arelixlabs@gmail.com"
                  variant="body2"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: '0.86rem',
                    '&:hover': { color: '#FFFFFF', textDecoration: 'underline' },
                  }}
                >
                  arelixlabs@gmail.com
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
                <Phone size={16} style={{ color: 'rgba(255, 255, 255, 0.85)', flexShrink: 0 }} />
                <Typography
                  component="a"
                  href="tel:+8801984961641"
                  variant="body2"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: '0.86rem',
                    '&:hover': { color: '#FFFFFF', textDecoration: 'underline' },
                  }}
                >
                  +880 1984-961641
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}>
                <MapPin size={16} style={{ color: 'rgba(255, 255, 255, 0.85)', flexShrink: 0, marginTop: 2 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.86rem', lineHeight: 1.5 }}>
                  Dhaka, Bangladesh
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)', mb: 3 }} />

        {/* Bottom row */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', md: 'center' },
            gap: 2,
            pr: { md: 18 },
          }}
        >
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.82rem', textAlign: { xs: 'center', md: 'left' } }}>
            © {new Date().getFullYear()} Arelix Labs. All rights reserved.
          </Typography>

          <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center' }}>
            {legalLinks.map((link) => (
              <Typography
                key={link.href}
                component={Link}
                href={link.href}
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  textDecoration: 'none',
                  fontSize: '0.84rem',
                  fontWeight: 500,
                  '&:hover': { color: '#FFFFFF', textDecoration: 'underline' },
                  transition: 'color 80ms ease',
                }}
              >
                {link.label}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
