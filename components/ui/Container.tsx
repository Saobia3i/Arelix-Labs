'use client';

import React, { type ReactNode } from 'react';
import MuiContainer from '@mui/material/Container';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <MuiContainer
      maxWidth={false}
      className={className}
      sx={{
        maxWidth: 1280,
        px: { xs: 2.5, sm: 4, md: 6 },
        mx: 'auto',
        width: '100%',
      }}
    >
      {children}
    </MuiContainer>
  );
}
