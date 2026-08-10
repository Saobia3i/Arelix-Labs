'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { contact } from '@/content/site-copy';
import { Mail } from 'lucide-react';
import { FacebookIcon, LinkedinIcon } from '@/components/ui/SocialIcons';

const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/ArelixLabs', icon: FacebookIcon },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/arelixlabs', icon: LinkedinIcon },
  { name: 'Email', href: 'mailto:contact@arelixlabs.com', icon: Mail },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          source: 'contact-form',
        }),
      });

      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
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
            Message sent! We&apos;ll get back to you within one business day.
          </Alert>
        )}
        {status === 'error' && (
          <Alert
            severity="error"
            sx={{ mb: 3, borderRadius: 1.5 }}
          >
            {errorMessage || 'Something went wrong. Please try again or email us directly at contact@arelixlabs.com.'}
          </Alert>
        )}

        <Box
          component="form"
          onSubmit={handleSubmit}
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

        {/* Social Media Links */}
        <Box sx={{ mt: 5, pt: 3.5, borderTop: '1px solid', borderColor: 'divider' }}>
          <Typography variant="caption" sx={{ display: 'block', color: 'text.secondary', fontWeight: 700, letterSpacing: '0.08em', mb: 2 }}>
            CONNECT WITH US
          </Typography>
          <Box sx={{ display: 'flex', gap: 1.75 }}>
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Box
                  key={social.name}
                  component="a"
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.name}
                  sx={{
                    width: 42,
                    height: 42,
                    borderRadius: '50%',
                    display: 'grid',
                    placeItems: 'center',
                    color: 'text.primary',
                    bgcolor: (theme) => (theme.palette.mode === 'light' ? 'rgba(184, 74, 71, 0.06)' : 'rgba(194, 87, 82, 0.12)'),
                    border: '1px solid',
                    borderColor: (theme) => (theme.palette.mode === 'light' ? 'rgba(184, 74, 71, 0.2)' : 'rgba(194, 87, 82, 0.3)'),
                    transition: 'all 200ms ease-in-out',
                    '&:hover': {
                      color: '#FFFFFF',
                      bgcolor: 'primary.main',
                      borderColor: 'primary.main',
                      transform: 'translateY(-3px)',
                      boxShadow: (theme) =>
                        theme.palette.mode === 'light'
                          ? '0 6px 16px rgba(184, 74, 71, 0.35)'
                          : '0 6px 16px rgba(194, 87, 82, 0.45)',
                    },
                  }}
                >
                  <Icon size={20} />
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Section>
  );
}
