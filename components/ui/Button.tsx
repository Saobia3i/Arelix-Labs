'use client';

import React, { type ReactNode } from 'react';
import MuiButton, { type ButtonProps as MuiButtonProps } from '@mui/material/Button';

type Variant = 'primary' | 'secondary';

interface ButtonProps extends Omit<MuiButtonProps, 'variant' | 'color'> {
  variant?: Variant;
  children: ReactNode;
  href?: string;
}

export default function Button({
  variant = 'primary',
  children,
  href,
  ...props
}: ButtonProps) {
  if (variant === 'primary') {
    return (
      <MuiButton
        variant="contained"
        color="primary"
        href={href}
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
      href={href}
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
