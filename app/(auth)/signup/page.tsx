'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import MuiLink from '@mui/material/Link';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const { error: msg } = await res.json() as { error: string };
        setError(msg ?? 'Registration failed. Please try again.');
        setLoading(false);
        return;
      }

      // Auto sign-in after registration
      const signInResult = await signIn('credentials', {
        email: form.email,
        password: form.password,
        redirect: false,
      });

      if (signInResult?.error) {
        setError('Account created but sign-in failed. Please log in manually.');
        setLoading(false);
      } else {
        router.push('/');
      }
    } catch {
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <Section spacing="lg" id="signup">
      <Box sx={{ maxWidth: 420, mx: 'auto' }}>
        <Typography
          variant="h1"
          sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' }, mb: 0.75, textAlign: 'center' }}
        >
          Create an account
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: 'center', mb: 4 }}
        >
          Already have an account?{' '}
          <MuiLink
            component={Link}
            href="/login"
            sx={{ color: 'primary.main', fontWeight: 500, '&:hover': { color: 'primary.dark' } }}
          >
            Sign in
          </MuiLink>
        </Typography>

        <Card>
          {error && (
            <Alert severity="error" sx={{ mb: 2.5, borderRadius: 1.5 }}>
              {error}
            </Alert>
          )}
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}
          >
            <TextField
              label="Full name"
              id="signup-name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              fullWidth
              autoComplete="name"
              autoFocus
            />
            <TextField
              label="Email"
              id="signup-email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              fullWidth
              autoComplete="email"
            />
            <TextField
              label="Password"
              id="signup-password"
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
              fullWidth
              autoComplete="new-password"
              slotProps={{ htmlInput: { minLength: 8 } }}
              helperText="Minimum 8 characters"
            />
            <Button
              variant="primary"
              type="submit"
              id="signup-submit-btn"
              disabled={loading}
              fullWidth
            >
              {loading ? 'Creating account…' : 'Create account'}
            </Button>
          </Box>
        </Card>
      </Box>
    </Section>
  );
}
