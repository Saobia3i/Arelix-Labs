'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { contact } from '@/content/site-copy';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'contact-form' }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <Section spacing="lg" id="contact">
      <Box sx={{ maxWidth: 600 }}>
        <Typography
          variant="overline"
          sx={{ color: 'primary.main', display: 'block', mb: 1 }}
        >
          Get in Touch
        </Typography>
        <Typography variant="h1" sx={{ fontSize: { xs: '2.4rem', md: '3rem' }, mb: 2 }}>
          {contact.headline}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 5, lineHeight: 1.7 }}>
          {contact.body}
        </Typography>

        {status === 'success' && (
          <Alert
            severity="success"
            sx={{ mb: 3, borderRadius: 1.5 }}
          >
            Message sent! We'll get back to you within one business day.
          </Alert>
        )}
        {status === 'error' && (
          <Alert
            severity="error"
            sx={{ mb: 3, borderRadius: 1.5 }}
          >
            Something went wrong. Please try again or email us directly.
          </Alert>
        )}

        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}
        >
          <TextField
            label={contact.formLabels.name}
            id="contact-name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            fullWidth
            autoComplete="name"
          />
          <TextField
            label={contact.formLabels.email}
            id="contact-email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            fullWidth
            autoComplete="email"
          />
          <TextField
            label={contact.formLabels.message}
            id="contact-message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            fullWidth
            multiline
            rows={5}
          />
          <Box>
            <Button
              variant="primary"
              type="submit"
              id="contact-submit-btn"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending…' : contact.formLabels.submit}
            </Button>
          </Box>
        </Box>
      </Box>
    </Section>
  );
}
