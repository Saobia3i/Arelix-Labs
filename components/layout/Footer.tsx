'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import MuiButton from '@mui/material/Button';
import Link from 'next/link';
import Container from '@/components/ui/Container';

const footerLinks = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
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
        py: { xs: 5, md: 6 },
        borderTop: 'none',
      }}
    >
      <Container>
        {/* Top row */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'center' },
            gap: 4,
            mb: 4,
          }}
        >
          {/* Brand */}
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  bgcolor: '#FFFFFF',
                  p: '2px',
                  flexShrink: 0,
                }}
              >
                <Box
                  component="img"
                  src="/images/arelix-logo-transparent.png"
                  alt="Arelix Labs logo"
                  sx={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.08)' }}
                />
              </Box>
              <Typography
                sx={{
                  fontFamily: 'var(--font-oswald), Oswald, sans-serif',
                  fontWeight: 700,
                  fontSize: '1rem',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                }}
              >
                Arelix<Typography component="span" sx={{ color: 'rgba(255, 255, 255, 0.85)' }}>Labs</Typography>
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.85)', maxWidth: 280 }}>
              Engineering at the intersection of software, hardware, AI, and IoT.
            </Typography>
            <Typography
              component="a"
              href="mailto:arelixlabs@gmail.com"
              variant="body2"
              sx={{
                display: 'inline-block',
                mt: 1,
                color: '#FFFFFF',
                textDecoration: 'none',
                fontWeight: 600,
                '&:hover': { color: 'rgba(255, 255, 255, 0.8)' },
              }}
            >
              arelixlabs@gmail.com
            </Typography>
          </Box>

          {/* Nav links */}
          <Box
            component="nav"
            aria-label="Footer navigation"
            sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}
          >
            {footerLinks.map((link) => (
              <MuiButton
                key={link.href}
                component={Link}
                href={link.href}
                disableRipple
                sx={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: 500,
                  fontSize: '0.875rem',
                  '&:hover': { color: '#FFFFFF', backgroundColor: 'rgba(255, 255, 255, 0.12)' },
                  transition: 'all 120ms ease',
                  minWidth: 0,
                  px: 1.5,
                  borderRadius: '6px',
                }}
              >
                {link.label}
              </MuiButton>
            ))}
          </Box>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)' }} />

        {/* Bottom row */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: 2,
            mt: 3,
          }}
        >
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            © {new Date().getFullYear()} Arelix Labs. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {legalLinks.map((link) => (
              <Typography
                key={link.href}
                component={Link}
                href={link.href}
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
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
