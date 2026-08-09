'use client';

import React, { type ReactNode } from 'react';
import MuiButton, { type ButtonProps as MuiButtonProps } from '@mui/material/Button';
import Link from 'next/link';

type Variant = 'primary' | 'secondary';

interface ButtonProps extends Omit<MuiButtonProps, 'variant' | 'color'> {
  variant?: Variant;
  children: ReactNode;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  variant = 'primary',
  children,
  href,
  type,
  ...props
}: ButtonProps) {
  const linkProps = href ? { component: Link, href } : { type: type || 'button' };

  if (variant === 'primary') {
    return (
      <MuiButton
        variant="contained"
        color="primary"
        {...linkProps}
        {...props}
      >
        {children}
      </MuiButton>
    );
  }

  return (
    <MuiButton
      variant="outlined"
      color="inherit"
      {...linkProps}
      sx={{
        borderColor: 'divider',
        color: 'text.primary',
        '&:hover': {
          borderColor: 'primary.main',
          backgroundColor: 'transparent',
        },
        ...props.sx,
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
}
