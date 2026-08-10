'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

interface ArelixBrandTextProps {
  variant?: 'navbar' | 'footer';
  sx?: object;
}

export function StylizedX({
  size = '1em',
  color = 'currentColor',
  redColor = '#B84A47',
}: {
  size?: string;
  color?: string;
  redColor?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      style={{
        height: size,
        width: 'auto',
        display: 'inline-block',
        verticalAlign: '-0.1em',
        marginRight: '1px',
      }}
      fill="none"
    >
      {/* Top-Left to Bottom-Right stroke */}
      <path d="M4 4 L20 20" stroke={color} strokeWidth="4.2" strokeLinecap="round" />
      {/* Bottom-Left to Center stroke */}
      <path d="M4 20 L12 12" stroke={color} strokeWidth="4.2" strokeLinecap="round" />
      {/* Center to Top-Right stroke in RED */}
      <path d="M12 12 L20 4" stroke={redColor} strokeWidth="4.2" strokeLinecap="round" />
    </svg>
  );
}

export default function ArelixBrandText({ variant = 'navbar', sx = {} }: ArelixBrandTextProps) {
  const theme = useTheme();

  const isFooter = variant === 'footer';
  const mainColor = isFooter ? '#FFFFFF' : theme.palette.text.primary;
  const redColor = isFooter ? '#FFFFFF' : theme.palette.primary.main;
  const labsColor = isFooter ? '#FFFFFF' : theme.palette.primary.main;

  return (
    <Box
      component="span"
      sx={{
        display: 'inline-flex',
        alignItems: 'baseline',
        fontFamily: 'var(--font-roboto), Roboto, sans-serif',
        userSelect: 'none',
        lineHeight: 1,
        ...sx,
      }}
    >
      {/* "Areli" */}
      <Typography
        component="span"
        sx={{
          fontFamily: 'var(--font-roboto), Roboto, sans-serif',
          fontWeight: 800,
          fontSize: isFooter ? '1.45rem' : '1.35rem',
          letterSpacing: '-0.03em',
          color: mainColor,
          lineHeight: 1,
        }}
      >
        Areli
      </Typography>

      {/* "X" with Red Top-Right Accent */}
      <StylizedX
        size={isFooter ? '1.25rem' : '1.18rem'}
        color={mainColor}
        redColor={isFooter ? '#FFFFFF' : (theme.palette.mode === 'light' ? '#B84A47' : '#D66B66')}
      />

      {/* "Labs" */}
      <Typography
        component="span"
        sx={{
          fontFamily: 'var(--font-roboto), Roboto, sans-serif',
          fontWeight: 700,
          fontSize: isFooter ? '1.05rem' : '0.98rem',
          letterSpacing: '-0.02em',
          color: labsColor,
          ml: '1px',
          lineHeight: 1,
        }}
      >
        Labs
      </Typography>
    </Box>
  );
}
