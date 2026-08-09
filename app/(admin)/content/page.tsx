'use client';

import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Divider from '@mui/material/Divider';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Button from '@/components/ui/Button';
import { services, selectedWork } from '@/content/site-copy';

type SectionKey = 'services' | 'selectedWork';

export default function ContentPage() {
  const [activeTab, setActiveTab] = useState<SectionKey>('services');
  const [servicesJson, setServicesJson] = useState(JSON.stringify(services, null, 2));
  const [workJson, setWorkJson] = useState(JSON.stringify(selectedWork, null, 2));
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');
  const [parseError, setParseError] = useState('');

  const currentJson = activeTab === 'services' ? servicesJson : workJson;
  const setCurrentJson = activeTab === 'services' ? setServicesJson : setWorkJson;

  const handleSave = async () => {
    setParseError('');
    let parsed: unknown;
    try {
      parsed = JSON.parse(currentJson);
    } catch {
      setParseError('Invalid JSON — fix the syntax error before saving.');
      return;
    }

    setSaveStatus('saving');
    try {
      const res = await fetch('/api/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ section: activeTab, data: parsed }),
      });
      setSaveStatus(res.ok ? 'success' : 'error');
    } catch {
      setSaveStatus('error');
    }
    setTimeout(() => setSaveStatus('idle'), 3000);
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 0.5 }}>
        Content Editor
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Edit site content sections. Changes are saved to the database.
      </Typography>

      <Tabs
        value={activeTab}
        onChange={(_, v: SectionKey) => setActiveTab(v)}
        sx={{ mb: 3, borderBottom: '1px solid', borderColor: 'divider' }}
      >
        <Tab value="services" label="Services" id="content-tab-services" />
        <Tab value="selectedWork" label="Selected Work" id="content-tab-work" />
      </Tabs>

      {parseError && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {parseError}
        </Alert>
      )}
      {saveStatus === 'success' && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Saved successfully.
        </Alert>
      )}
      {saveStatus === 'error' && (
        <Alert severity="error" sx={{ mb: 2 }}>
          Save failed. Please try again.
        </Alert>
      )}

      <TextField
        value={currentJson}
        onChange={(e) => {
          setCurrentJson(e.target.value);
          setParseError('');
          setSaveStatus('idle');
        }}
        multiline
        fullWidth
        rows={24}
        spellCheck={false}
        slotProps={{
          htmlInput: {
            style: {
              fontFamily: 'monospace',
              fontSize: '0.82rem',
              lineHeight: 1.6,
            },
          },
        }}
        sx={{ mb: 2 }}
        aria-label={`Edit ${activeTab} JSON`}
      />

      <Button
        variant="primary"
        onClick={handleSave}
        id="content-save-btn"
        disabled={saveStatus === 'saving'}
      >
        {saveStatus === 'saving' ? 'Saving…' : 'Save Changes'}
      </Button>
    </Box>
  );
}
