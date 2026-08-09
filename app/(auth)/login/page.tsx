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

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await signIn('credentials', {
      email: form.email,
      password: form.password,
      redirect: false,
    });

    if (result?.error) {
      setError('Invalid email or password.');
      setLoading(false);
    } else {
      router.push('/');
    }
  };

  return (
    <Section spacing="lg" id="login">
      <Box
        sx={{
          maxWidth: 420,
          mx: 'auto',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '1.8rem', md: '2.2rem' },
            mb: 0.75,
            textAlign: 'center',
          }}
        >
          Sign in
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: 'center', mb: 4 }}
        >
          Don't have an account?{' '}
          <MuiLink
            component={Link}
            href="/signup"
            sx={{
              color: 'primary.main',
              fontWeight: 500,
              '&:hover': { color: 'primary.dark' },
            }}
          >
            Sign up
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
              label="Email"
              id="login-email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              fullWidth
              autoComplete="email"
              autoFocus
            />
            <TextField
              label="Password"
              id="login-password"
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
              fullWidth
              autoComplete="current-password"
            />
            <Button
              variant="primary"
              type="submit"
              id="login-submit-btn"
              disabled={loading}
              fullWidth
            >
              {loading ? 'Signing in…' : 'Sign in'}
            </Button>
          </Box>
        </Card>
      </Box>
    </Section>
  );
}
