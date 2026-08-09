'use client';

import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import CircularProgress from '@mui/material/CircularProgress';
import { DataGrid, type GridColDef, type GridRenderCellParams } from '@mui/x-data-grid';

interface UserRow {
  id: string;
  name: string;
  email: string;
  role: 'USER' | 'ADMIN';
  createdAt: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<UserRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/users')
      .then((r) => r.json())
      .then((data: UserRow[]) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load users.');
        setLoading(false);
      });
  }, []);

  const handleRoleChange = async (userId: string, newRole: 'USER' | 'ADMIN') => {
    setUsers((prev) =>
      prev.map((u) => (u.id === userId ? { ...u, role: newRole } : u))
    );
    await fetch('/api/users', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, newRole }),
    });
  };

  const columns: GridColDef<UserRow>[] = [
    { field: 'name', headerName: 'Name', width: 180 },
    { field: 'email', headerName: 'Email', flex: 1, minWidth: 200 },
    {
      field: 'role',
      headerName: 'Role',
      width: 140,
      renderCell: (params: GridRenderCellParams<UserRow, 'USER' | 'ADMIN'>) => (
        <Select
          value={params.value}
          size="small"
          onChange={(e) =>
            handleRoleChange(params.row.id, e.target.value as 'USER' | 'ADMIN')
          }
          sx={{
            fontSize: '0.8rem',
            '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
          }}
        >
          <MenuItem value="USER">User</MenuItem>
          <MenuItem value="ADMIN">Admin</MenuItem>
        </Select>
      ),
    },
    {
      field: 'createdAt',
      headerName: 'Joined',
      width: 140,
      valueFormatter: (value) =>
        value ? new Date(value as string).toLocaleDateString('en-GB') : '—',
    },
  ];

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 0.5 }}>
        Users
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Manage user accounts and admin roles.
      </Typography>

      {error && <Typography color="error" sx={{ mb: 2 }}>{error}</Typography>}

      <Box sx={{ height: 520, width: '100%' }}>
        <DataGrid
          rows={users}
          columns={columns}
          loading={loading}
          pageSizeOptions={[10, 25]}
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
            '& .MuiDataGrid-cell': { borderColor: 'divider' },
          }}
        />
      </Box>
    </Box>
  );
}
