'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface AssistantMessageProps {
  role: 'user' | 'assistant';
  content: string;
}

export default function AssistantMessage({ role, content }: AssistantMessageProps) {
  const isUser = role === 'user';

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: isUser ? 'flex-end' : 'flex-start',
        mb: 1.5,
      }}
    >
      <Box
        sx={{
          maxWidth: '80%',
          px: 2,
          py: 1.25,
          borderRadius: isUser ? '12px 12px 2px 12px' : '12px 12px 12px 2px',
          bgcolor: isUser ? 'primary.main' : 'background.paper',
          color: isUser ? 'primary.contrastText' : 'text.primary',
          border: isUser ? 'none' : '1px solid',
          borderColor: isUser ? 'transparent' : 'divider',
        }}
      >
        <Typography
          variant="body2"
          sx={{
            lineHeight: 1.6,
            fontSize: '0.875rem',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
          }}
        >
          {content}
        </Typography>
      </Box>
    </Box>
  );
}
