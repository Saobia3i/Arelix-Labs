'use client';

import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';

interface Lead {
  id: string;
  name: string;
  email: string;
  message: string;
  source: string | null;
  createdAt: string;
}

const columns: GridColDef<Lead>[] = [
  { field: 'name', headerName: 'Name', width: 160 },
  { field: 'email', headerName: 'Email', width: 220 },
  {
    field: 'message',
    headerName: 'Message',
    flex: 1,
    minWidth: 200,
    renderCell: (params) => (
      <Typography variant="body2" sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {params.value}
      </Typography>
    ),
  },
  { field: 'source', headerName: 'Source', width: 140, valueFormatter: (value) => value ?? '—' },
  {
    field: 'createdAt',
    headerName: 'Date',
    width: 160,
    valueFormatter: (value) =>
      value ? new Date(value as string).toLocaleDateString('en-GB') : '—',
  },
];

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/leads')
      .then((r) => r.json())
      .then((data: Lead[]) => {
        setLeads(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load leads.');
        setLoading(false);
      });
  }, []);

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 0.5 }}>
        Leads
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Contact form submissions and assistant captures.
      </Typography>

      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}

      <Box sx={{ height: 520, width: '100%' }}>
        <DataGrid
          rows={leads}
          columns={columns}
          loading={loading}
          pageSizeOptions={[10, 25, 50]}
          initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
          disableRowSelectionOnClick
          sx={{
            borderColor: 'divider',
            borderRadius: 2,
            '& .MuiDataGrid-columnHeaders': {
              bgcolor: 'background.paper',
              borderBottom: '1px solid',
              borderColor: 'divider',
            },
            '& .MuiDataGrid-cell': {
              borderColor: 'divider',
            },
          }}
        />
      </Box>
    </Box>
  );
}
