'use client';

import React, { type ReactNode } from 'react';
import Box from '@mui/material/Box';
import Container from './Container';

type Spacing = 'sm' | 'md' | 'lg';
type Background = 'default' | 'paper';

interface SectionProps {
  children: ReactNode;
  spacing?: Spacing;
  background?: Background;
  id?: string;
  noContainer?: boolean;
}

const paddingMap: Record<Spacing, { xs: number; md: number }> = {
  sm: { xs: 4, md: 5 },
  md: { xs: 6, md: 8 },
  lg: { xs: 8, md: 12 },
};

export default function Section({
  children,
  spacing = 'md',
  background = 'default',
  id,
  noContainer = false,
}: SectionProps) {
  const py = paddingMap[spacing];

  return (
    <Box
      component="section"
      id={id}
      sx={{
        py,
        bgcolor: background === 'paper' ? 'background.paper' : 'background.default',
        width: '100%',
      }}
    >
      {noContainer ? children : <Container>{children}</Container>}
    </Box>
  );
}
