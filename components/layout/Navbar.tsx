'use client';

import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MuiButton from '@mui/material/Button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '@/components/ui/ThemeToggle';
import Container from '@/components/ui/Container';
import ArelixTextLogo from '@/components/ui/ArelixTextLogo';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

function ArelixLogo() {
  return (
    <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
      <Box
        sx={{
          width: 36,
          height: 36,
          borderRadius: '50%',
          overflow: 'hidden',
          bgcolor: 'transparent',
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
      <ArelixTextLogo variant="navbar" height={28} />
    </Link>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <AppBar position="sticky" component="header" sx={{ bgcolor: 'background.default' }}>
        <Container>
          <Toolbar
            disableGutters
            sx={{
              justifyContent: 'space-between',
              minHeight: { xs: 60, md: 68 },
              gap: 2,
            }}
          >
            {/* Logo */}
            <ArelixLogo />

            {/* Desktop nav */}
            <Box
              component="nav"
              aria-label="Main navigation"
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: 0.5,
                flex: 1,
                justifyContent: 'center',
              }}
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <MuiButton
                    key={link.href}
                    component={Link}
                    href={link.href}
                    disableRipple
                    sx={{
                      color: isActive ? 'primary.main' : 'text.secondary',
                      fontWeight: isActive ? 700 : 500,
                      fontSize: '0.9rem',
                      px: 1.75,
                      py: 0.75,
                      position: 'relative',
                      '&:hover': {
                        color: 'primary.main',
                        backgroundColor: 'transparent',
                      },
                      '&::after': isActive
                        ? {
                            content: '""',
                            position: 'absolute',
                            bottom: 4,
                            left: '20%',
                            right: '20%',
                            height: '2px',
                            borderRadius: '2px',
                            bgcolor: 'primary.main',
                          }
                        : {},
                      transition: 'all 120ms ease',
                    }}
                  >
                    {link.label}
                  </MuiButton>
                );
              })}
            </Box>

            {/* Right actions */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <ThemeToggle />
              <MuiButton
                component={Link}
                href="/contact"
                variant="contained"
                color="primary"
                size="small"
                id="navbar-cta-btn"
                disableElevation
                sx={{
                  display: { xs: 'none', md: 'inline-flex' },
                  fontSize: '0.85rem',
                  px: 2,
                  py: 0.875,
                }}
              >
                Contact Us
              </MuiButton>
              {/* Mobile hamburger */}
              <IconButton
                aria-label="Open navigation menu"
                id="mobile-nav-toggle"
                onClick={() => setMobileOpen(true)}
                sx={{ display: { md: 'none' }, color: 'text.primary' }}
              >
                <Menu size={22} strokeWidth={1.5} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: 280,
              bgcolor: 'background.paper',
              borderLeft: '1px solid',
              borderColor: 'divider',
            },
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <ArelixLogo />
          <IconButton
            aria-label="Close navigation menu"
            onClick={() => setMobileOpen(false)}
            sx={{ color: 'text.primary' }}
          >
            <X size={20} strokeWidth={1.5} />
          </IconButton>
        </Box>
        <Divider />
        <List>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <ListItem key={link.href} disablePadding>
                <ListItemButton
                  component={Link}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  sx={{
                    px: 3,
                    py: 1.5,
                    color: isActive ? 'primary.main' : 'text.primary',
                    '&:hover': { color: 'primary.main' },
                    transition: 'color 80ms ease',
                  }}
                >
                  <ListItemText
                    primary={link.label}
                    slotProps={{ primary: { sx: { fontWeight: isActive ? 700 : 500 } } }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        <Box sx={{ p: 3, mt: 'auto' }}>
          <MuiButton
            component={Link}
            href="/contact"
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </MuiButton>
        </Box>
      </Drawer>
    </>
  );
}
