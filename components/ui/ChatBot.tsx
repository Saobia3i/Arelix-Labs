'use client';

import React, { useState, useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  BotMessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  RefreshCw,
  Cpu,
  Code2,
  Brain,
} from 'lucide-react';
import Badge from '@/components/ui/Badge';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}

const AVAILABLE_MODELS = [
  { id: 'deepseek/deepseek-chat', name: 'DeepSeek V3 (Default)' },
  { id: 'anthropic/claude-3.5-sonnet', name: 'Claude 3.5 Sonnet' },
  { id: 'openai/gpt-4o-mini', name: 'GPT-4o Mini' },
  { id: 'meta-llama/llama-3.3-70b-instruct', name: 'Llama 3.3 70B' },
];

const SUGGESTED_PROMPTS = [
  'What engineering services does Arelix Labs provide?',
  'How do you handle PCB design & hardware firmware?',
  'Can you help us integrate AI into our product?',
  'How can I schedule a consultation with the CEO?',
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: 'Hello! I am the Arelix Technical Assistant. How can I assist you today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');
  const [selectedModel, setSelectedModel] = useState('deepseek/deepseek-chat');
  const [isLoading, setIsLoading] = useState(false);
  const [keyboardInset, setKeyboardInset] = useState(0);
  const [isPillVisible, setIsPillVisible] = useState(true);
  const [isPillHovered, setIsPillHovered] = useState(false);
  const [isPillDismissed, setIsPillDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPillVisible(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const showPill = !isOpen && !isPillDismissed && (isPillVisible || isPillHovered);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Mobile browsers do not consistently shrink fixed elements when the virtual
  // keyboard opens. Track the visual viewport so the composer stays visible.
  useEffect(() => {
    const visualViewport = window.visualViewport;
    if (!visualViewport) return;

    const updateKeyboardInset = () => {
      const inset = Math.max(
        0,
        window.innerHeight - visualViewport.height - visualViewport.offsetTop,
      );
      setKeyboardInset(inset);
    };

    visualViewport.addEventListener('resize', updateKeyboardInset);
    visualViewport.addEventListener('scroll', updateKeyboardInset);
    updateKeyboardInset();

    return () => {
      visualViewport.removeEventListener('resize', updateKeyboardInset);
      visualViewport.removeEventListener('scroll', updateKeyboardInset);
    };
  }, []);

  const handleSend = async (textToSend?: string) => {
    const text = textToSend || input.trim();
    if (!text || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput('');
    setIsLoading(true);

    try {
      const apiMessages = [...messages, userMessage].map((msg) => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: apiMessages,
          model: selectedModel,
        }),
      });

      const data = await res.json();

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: data.content || data.error || 'Sorry, I encountered an issue processing your inquiry. Please try again.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error('Chat error:', err);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: 'Network error. Please check your connection or reach out to our team at contact@arelixlabs.com.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      onMouseEnter={() => setIsPillHovered(true)}
      onMouseLeave={() => setIsPillHovered(false)}
      sx={{ position: 'fixed', bottom: 24, right: 24, zIndex: 1200 }}
    >
      {/* Floating Launcher Button */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
      >
        <AnimatePresence>
          {showPill && (
            <Box
              component={motion.div}
              initial={{ opacity: 0, scale: 0.9, x: 8 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: 8 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(true)}
              sx={{
                position: 'absolute',
                right: 'calc(100% + 14px)',
                top: '50%',
                transform: 'translateY(-50%)',
                bgcolor: (theme) => (theme.palette.mode === 'light' ? '#FFFFFF' : '#0B1320'),
                color: 'primary.main',
                pl: 2,
                pr: 1.25,
                py: 0.85,
                borderRadius: '100px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.22)',
                border: '1.5px solid',
                borderColor: 'primary.main',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                gap: 1.25,
                cursor: 'pointer',
                zIndex: 1201,
                fontFamily: 'var(--font-roboto), Roboto, sans-serif',
                // Rightward pointing speech triangle tail
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: '50%',
                  left: '100%',
                  transform: 'translateY(-50%)',
                  borderWidth: '6px',
                  borderStyle: 'solid',
                  borderColor: (theme) =>
                    theme.palette.mode === 'light'
                      ? 'transparent transparent transparent #B84A47'
                      : 'transparent transparent transparent #C25752',
                },
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: 'primary.main',
                  boxShadow: '0 0 8px currentColor',
                  flexShrink: 0,
                }}
              />
              <Typography
                variant="caption"
                sx={{
                  fontFamily: 'var(--font-roboto), Roboto, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  color: 'text.primary',
                  letterSpacing: '0.01em',
                  lineHeight: 1,
                }}
              >
                Ask AI Assistant
              </Typography>
              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsPillDismissed(true);
                }}
                aria-label="Close AI tail notification"
                sx={{
                  width: 20,
                  height: 20,
                  p: 0,
                  ml: 0.5,
                  color: 'text.secondary',
                  transition: 'all 150ms ease',
                  '&:hover': {
                    color: 'primary.main',
                    bgcolor: (theme) => (theme.palette.mode === 'light' ? 'rgba(184, 74, 71, 0.15)' : 'rgba(194, 87, 82, 0.2)'),
                  },
                }}
              >
                <X size={13} />
              </IconButton>
            </Box>
          )}
        </AnimatePresence>

        <IconButton
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open AI Technical Advisor Chat"
          sx={{
            width: 52,
            height: 52,
            borderRadius: '50%',
            bgcolor: 'primary.main',
            color: '#FFFFFF',
            boxShadow: '0 8px 30px rgba(184, 74, 71, 0.24)',
            border: '2px solid #FFFFFF',
            '&:hover': {
              bgcolor: 'primary.dark',
              boxShadow: '0 12px 36px rgba(184, 74, 71, 0.32)',
            },
            '@media (max-width: 600px)': {
              width: 44,
              height: 44,
            },
          }}
        >
          {isOpen ? <X size={24} /> : <BotMessageSquare size={24} />}
        </IconButton>
      </motion.div>

      {/* Slide-Up Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{
              position: 'fixed',
              bottom: 96 + keyboardInset,
              right: 12,
              width: 'calc(100vw - 24px)',
              maxWidth: 400,
              height: `min(560px, calc(100dvh - ${112 + keyboardInset}px))`,
              maxHeight: `calc(100dvh - ${112 + keyboardInset}px)`,
              display: 'flex',
              flexDirection: 'column',
              zIndex: 1201,
            }}
          >
            <Box
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '24px 0px 24px 24px', // Cat's Eye sharp top-right corner
                bgcolor: (theme) => (theme.palette.mode === 'light' ? '#FFFFFF' : '#000000'),
                border: (theme) => (theme.palette.mode === 'light' ? '1.5px solid #000000' : '1.5px solid #FFFFFF'),
                boxShadow: (theme) =>
                  theme.palette.mode === 'light'
                    ? '0 12px 40px rgba(0, 0, 0, 0.25)'
                    : '0 12px 40px rgba(0, 0, 0, 0.85)',
                overflow: 'hidden',
              }}
            >
              {/* Header */}
              <Box
                sx={{
                  px: 2.5,
                  py: 2,
                  bgcolor: (theme) => (theme.palette.mode === 'light' ? '#F4F5F7' : '#000000'),
                  borderBottom: '1px solid',
                  borderColor: (theme) => (theme.palette.mode === 'light' ? '#E2E8F0' : '#262626'),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Bot size={20} />
                  </Box>
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: '0.92rem' }}>
                        Arelix AI Assistant
                      </Typography>
                      <Badge label="AVAILABLE 24/7" color="primary" />
                    </Box>
                    <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.72rem' }}>
                      Ask us anything about Arelix Labs.
                    </Typography>
                  </Box>
                </Box>
                <IconButton onClick={() => setIsOpen(false)} size="small">
                  <X size={18} />
                </IconButton>
              </Box>

              {/* Model Selector Bar */}
              <Box
                sx={{
                  px: 2,
                  py: 1,
                  bgcolor: (theme) => (theme.palette.mode === 'light' ? '#FFFFFF' : '#000000'),
                  borderBottom: '1px solid',
                  borderColor: (theme) => (theme.palette.mode === 'light' ? '#E2E8F0' : '#1F1F1F'),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary', fontSize: '0.72rem' }}>
                  MODEL:
                </Typography>
                <Select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  size="small"
                  variant="outlined"
                  sx={{
                    height: 28,
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: 'transparent' },
                    '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'primary.main' },
                  }}
                >
                  {AVAILABLE_MODELS.map((m) => (
                    <MenuItem key={m.id} value={m.id} sx={{ fontSize: '0.78rem' }}>
                      {m.name}
                    </MenuItem>
                  ))}
                </Select>
              </Box>

              {/* Message Feed */}
              <Box
                sx={{
                  flexGrow: 1,
                  minHeight: 0,
                  p: 2,
                  overflowY: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1.5,
                }}
              >
                {messages.map((msg) => (
                  <Box
                    key={msg.id}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                    }}
                  >
                    <Box
                      sx={{
                        maxWidth: '85%',
                        p: 1.5,
                        borderRadius:
                          msg.sender === 'user' ? '16px 16px 2px 16px' : '16px 16px 16px 2px',
                        bgcolor: (theme) =>
                          msg.sender === 'user'
                            ? 'primary.main'
                            : theme.palette.mode === 'light'
                            ? '#F4F5F7'
                            : '#000000',
                        color: (theme) =>
                          msg.sender === 'user'
                            ? '#FFFFFF'
                            : theme.palette.mode === 'light'
                            ? '#0F172A'
                            : '#FFFFFF',
                        border: (theme) =>
                          msg.sender === 'bot'
                            ? theme.palette.mode === 'light'
                              ? '1px solid #E2E8F0'
                              : '1px solid #333333'
                            : 'none',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                      }}
                    >
                      <Typography variant="body2" sx={{ fontSize: '0.825rem', lineHeight: 1.55, whitespace: 'pre-line' }}>
                        {msg.text}
                      </Typography>
                    </Box>
                    <Typography variant="caption" sx={{ fontSize: '0.65rem', color: 'text.secondary', mt: 0.4, px: 0.5 }}>
                      {msg.timestamp}
                    </Typography>
                  </Box>
                ))}

                {isLoading && (
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary', p: 1 }}>
                    <RefreshCw size={14} className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
                    <Typography variant="caption" sx={{ fontSize: '0.75rem' }}>
                      Searching Arelix knowledge...
                    </Typography>
                  </Box>
                )}

                <div ref={messagesEndRef} />
              </Box>

              {/* Quick Suggested Prompts (when feed is short) */}
              {messages.length <= 2 && (
                <Box sx={{ px: 2, pb: 1, display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                  <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary', fontSize: '0.7rem' }}>
                    SUGGESTED INQUIRIES:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {SUGGESTED_PROMPTS.map((prompt) => (
                      <Box
                        key={prompt}
                        onClick={() => handleSend(prompt)}
                        sx={{
                          fontSize: '0.72rem',
                          px: 1.25,
                          py: 0.5,
                          borderRadius: 6,
                          bgcolor: (theme) => (theme.palette.mode === 'light' ? '#F4F5F7' : '#000000'),
                          border: '1px solid',
                          borderColor: (theme) => (theme.palette.mode === 'light' ? '#E2E8F0' : '#333333'),
                          color: 'text.primary',
                          cursor: 'pointer',
                          '&:hover': {
                            borderColor: 'primary.main',
                            color: 'primary.main',
                          },
                        }}
                      >
                        {prompt}
                      </Box>
                    ))}
                  </Box>
                </Box>
              )}

              {/* Input Footer */}
              <Box
                component="form"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                sx={{
                  p: 1.5,
                  bgcolor: (theme) => (theme.palette.mode === 'light' ? '#FFFFFF' : '#000000'),
                  borderTop: '1px solid',
                  borderColor: (theme) => (theme.palette.mode === 'light' ? '#E2E8F0' : '#1F1F1F'),
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Ask about software, PCB, AI..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onFocus={() => requestAnimationFrame(scrollToBottom)}
                  disabled={isLoading}
                  helperText={`${input.length}/700 · Max 700 chars`}
                  slotProps={{
                    htmlInput: {
                      maxLength: 700,
                      style: { fontSize: '0.825rem' },
                    },
                    formHelperText: {
                      sx: { mx: 0.5, mt: 0.4, fontSize: '0.65rem', lineHeight: 1.2 },
                    },
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      bgcolor: (theme) => (theme.palette.mode === 'light' ? '#F4F5F7' : '#000000'),
                    },
                  }}
                />
                <IconButton
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  sx={{
                    bgcolor: 'primary.main',
                    color: '#FFFFFF',
                    width: 36,
                    height: 36,
                    borderRadius: 2,
                    '&:hover': { bgcolor: 'primary.dark' },
                    '&.Mui-disabled': { opacity: 0.5, color: '#FFFFFF' },
                  }}
                >
                  <Send size={16} />
                </IconButton>
              </Box>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}
