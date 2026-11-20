'use client';

import React, { type ReactNode } from 'react';
import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
  sx?: object;
}

export default function Card({ children, className, noPadding = false, sx, ...rest }: CardProps) {
  return (
    <MuiCard className={className} elevation={3} sx={sx} {...rest}>
      {noPadding ? children : <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>{children}</CardContent>}
    </MuiCard>
  );
}
