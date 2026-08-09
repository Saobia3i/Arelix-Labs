'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import MuiButton from '@mui/material/Button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';
import {
  LayoutDashboard,
  Inbox,
  FileText,
  Users,
  LogOut,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';

const navItems = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Leads', href: '/leads', icon: Inbox },
  { label: 'Content', href: '/content', icon: FileText },
  { label: 'Users', href: '/users', icon: Users },
];

const SIDEBAR_WIDTH = 220;
const SIDEBAR_COLLAPSED = 64;

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        bgcolor: 'background.default',
      }}
    >
      {/* Sidebar */}
      <Box
        component="aside"
        sx={{
          width: collapsed ? SIDEBAR_COLLAPSED : SIDEBAR_WIDTH,
          flexShrink: 0,
          bgcolor: 'background.paper',
          borderRight: '1px solid',
          borderColor: 'divider',
          display: 'flex',
          flexDirection: 'column',
          transition: 'width 100ms ease',
          overflow: 'hidden',
          position: 'sticky',
          top: 0,
          height: '100vh',
        }}
      >
        {/* Logo + collapse toggle */}
        <Box
          sx={{
            height: 60,
            display: 'flex',
            alignItems: 'center',
            justifyContent: collapsed ? 'center' : 'space-between',
            px: collapsed ? 1 : 2,
            borderBottom: '1px solid',
            borderColor: 'divider',
            flexShrink: 0,
          }}
        >
          {!collapsed && (
            <Typography
              sx={{
                fontFamily: 'var(--font-oswald)',
                fontWeight: 700,
                fontSize: '0.95rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: 'text.primary',
              }}
            >
              Arelix<Typography component="span" sx={{ color: 'primary.main' }}>Admin</Typography>
            </Typography>
          )}
          <Tooltip title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}>
            <IconButton
              size="small"
              onClick={() => setCollapsed((c) => !c)}
              sx={{ color: 'text.secondary' }}
              aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            </IconButton>
          </Tooltip>
        </Box>

        {/* Nav */}
        <List sx={{ flex: 1, py: 1, px: collapsed ? 0.5 : 1 }}>
          {navItems.map(({ label, href, icon: Icon }) => {
            const active = pathname === href || pathname.startsWith(href + '/');
            return (
              <ListItem key={href} disablePadding sx={{ mb: 0.25 }}>
                <Tooltip title={collapsed ? label : ''} placement="right">
                  <ListItemButton
                    component={Link}
                    href={href}
                    selected={active}
                    sx={{
                      borderRadius: 1.5,
                      minHeight: 44,
                      px: collapsed ? 1.25 : 1.75,
                      justifyContent: collapsed ? 'center' : 'flex-start',
                      color: active ? 'primary.main' : 'text.secondary',
                      bgcolor: active ? 'action.selected' : 'transparent',
                      '&:hover': {
                        bgcolor: 'action.hover',
                        color: 'text.primary',
                      },
                      '&.Mui-selected': {
                        bgcolor: (theme) =>
                          theme.palette.mode === 'dark'
                            ? 'rgba(229,35,27,0.12)'
                            : 'rgba(192,0,0,0.08)',
                        color: 'primary.main',
                        '&:hover': {
                          bgcolor: (theme) =>
                            theme.palette.mode === 'dark'
                              ? 'rgba(229,35,27,0.18)'
                              : 'rgba(192,0,0,0.12)',
                        },
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: collapsed ? 0 : 32,
                        color: 'inherit',
                        '& svg': { strokeWidth: 1.5 },
                      }}
                    >
                      <Icon size={18} />
                    </ListItemIcon>
                    {!collapsed && (
                      <ListItemText
                        primary={label}
                        slotProps={{ primary: { sx: { fontSize: '0.875rem', fontWeight: 500 } } }}
                      />
                    )}
                  </ListItemButton>
                </Tooltip>
              </ListItem>
            );
          })}
        </List>

        <Divider />

        {/* Bottom actions */}
        <Box sx={{ p: collapsed ? 0.5 : 1.5, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          <Tooltip title="View site" placement={collapsed ? 'right' : 'top'}>
            <ListItemButton
              component={Link}
              href="/"
              target="_blank"
              sx={{
                borderRadius: 1.5,
                px: collapsed ? 1.25 : 1.75,
                py: 1,
                color: 'text.secondary',
                justifyContent: collapsed ? 'center' : 'flex-start',
                '&:hover': { color: 'text.primary' },
              }}
            >
              <ListItemIcon sx={{ minWidth: collapsed ? 0 : 32, color: 'inherit' }}>
                <ExternalLink size={16} strokeWidth={1.5} />
              </ListItemIcon>
              {!collapsed && (
                <ListItemText
                  primary="View Site"
                  slotProps={{ primary: { sx: { fontSize: '0.8rem' } } }}
                />
              )}
            </ListItemButton>
          </Tooltip>
          <Tooltip title="Sign out" placement={collapsed ? 'right' : 'top'}>
            <ListItemButton
              onClick={() => signOut({ callbackUrl: '/login' })}
              sx={{
                borderRadius: 1.5,
                px: collapsed ? 1.25 : 1.75,
                py: 1,
                color: 'text.secondary',
                justifyContent: collapsed ? 'center' : 'flex-start',
                '&:hover': { color: 'primary.main' },
              }}
            >
              <ListItemIcon sx={{ minWidth: collapsed ? 0 : 32, color: 'inherit' }}>
                <LogOut size={16} strokeWidth={1.5} />
              </ListItemIcon>
              {!collapsed && (
                <ListItemText
                  primary="Sign Out"
                  slotProps={{ primary: { sx: { fontSize: '0.8rem' } } }}
                />
              )}
            </ListItemButton>
          </Tooltip>
        </Box>
      </Box>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flex: 1,
          overflow: 'auto',
          p: { xs: 3, md: 4 },
          minWidth: 0,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
