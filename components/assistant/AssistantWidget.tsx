'use client';

import React, { useState, useRef, useEffect } from 'react';
import Fab from '@mui/material/Fab';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';
import Tooltip from '@mui/material/Tooltip';
import { MessageCircle, X, Send } from 'lucide-react';
import { usePathname } from 'next/navigation';
import AssistantMessage from './AssistantMessage';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const WELCOME: Message = {
  role: 'assistant',
  content:
    "Hi! I'm the Arelix Labs assistant. Ask me about our services, process, or how to start a project.",
};

const ADMIN_ROUTES = ['/dashboard', '/leads', '/content', '/users'];

function ChatPanel() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState('');
  const [streaming, setStreaming] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'instant' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || streaming) return;

    const userMessage: Message = { role: 'user', content: input.trim() };
    const nextMessages = [...messages, userMessage];
    setMessages([...nextMessages, { role: 'assistant', content: '' }]);
    setInput('');
    setStreaming(true);

    try {
      const res = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: nextMessages.map(({ role, content }) => ({ role, content })),
        }),
      });

      if (!res.ok || !res.body) throw new Error('Stream error');

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        accumulated += decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: 'assistant', content: accumulated };
          return updated;
        });
      }
    } catch {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: 'assistant',
          content: 'Sorry, I ran into an issue. Please try again or email us at hello@arelixlabs.com.',
        };
        return updated;
      });
    } finally {
      setStreaming(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      void sendMessage();
    }
  };

  return (
    <>
      {/* FAB trigger */}
      <Tooltip title="Chat with Arelix" placement="left">
        <Fab
          color="primary"
          aria-label="Open Arelix assistant"
          id="assistant-fab"
          onClick={() => setOpen(true)}
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            zIndex: 1200,
            display: open ? 'none' : 'flex',
            boxShadow: '0 4px 16px rgba(192,0,0,0.35)',
            '&:hover': {
              boxShadow: '0 6px 20px rgba(192,0,0,0.45)',
            },
          }}
        >
          <MessageCircle size={22} strokeWidth={1.5} />
        </Fab>
      </Tooltip>

      {/* Chat drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: { xs: '100vw', sm: 380 },
              bgcolor: 'background.default',
              display: 'flex',
              flexDirection: 'column',
            },
          },
        }}
      >
        {/* Header */}
        <Box
          sx={{
            p: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid',
            borderColor: 'divider',
            bgcolor: 'background.paper',
            flexShrink: 0,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box
              sx={{
                width: 32,
                height: 32,
                bgcolor: 'primary.main',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <MessageCircle size={16} strokeWidth={1.5} color="#fff" />
            </Box>
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, lineHeight: 1.2 }}>
                Arelix Assistant
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Ask about our services &amp; process
              </Typography>
            </Box>
          </Box>
          <IconButton
            onClick={() => setOpen(false)}
            size="small"
            aria-label="Close assistant"
            sx={{ color: 'text.secondary' }}
          >
            <X size={18} strokeWidth={1.5} />
          </IconButton>
        </Box>

        {/* Messages */}
        <Box
          sx={{
            flex: 1,
            overflowY: 'auto',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {messages.map((msg, i) => (
            <AssistantMessage key={i} role={msg.role} content={msg.content} />
          ))}
          {streaming && messages[messages.length - 1]?.content === '' && (
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 1.5 }}>
              <CircularProgress size={16} color="primary" />
            </Box>
          )}
          <div ref={messagesEndRef} />
        </Box>

        {/* Input */}
        <Box
          sx={{
            p: 2,
            borderTop: '1px solid',
            borderColor: 'divider',
            bgcolor: 'background.paper',
            flexShrink: 0,
            display: 'flex',
            gap: 1,
            alignItems: 'flex-end',
          }}
        >
          <TextField
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask a question…"
            id="assistant-input"
            multiline
            maxRows={4}
            fullWidth
            size="small"
            disabled={streaming}
            autoComplete="off"
          />
          <IconButton
            onClick={() => void sendMessage()}
            disabled={!input.trim() || streaming}
            color="primary"
            aria-label="Send message"
            id="assistant-send-btn"
            sx={{
              mb: 0.25,
              bgcolor: 'primary.main',
              color: '#fff',
              '&:hover': { bgcolor: 'primary.dark' },
              '&:disabled': { bgcolor: 'divider', color: 'text.secondary' },
            }}
          >
            <Send size={16} strokeWidth={1.5} />
          </IconButton>
        </Box>
      </Drawer>
    </>
  );
}

export default function AssistantWidget() {
  const pathname = usePathname();

  // Hide on admin routes — check must be after all hooks
  const isAdminRoute = ADMIN_ROUTES.some((r) => pathname.startsWith(r));
  if (isAdminRoute) return null;

  return <ChatPanel />;
}
