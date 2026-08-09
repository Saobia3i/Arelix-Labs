'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import type { Theme } from '@mui/material/styles';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';
import { services } from '@/content/site-copy';
import {
  Check,
  ChevronDown,
  ChevronUp,
  Code,
  Cpu,
  Brain,
  Wifi,
  Layers,
  Compass,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

const iconMap: Record<string, React.ReactNode> = {
  'Software Engineering': <Code size={22} />,
  'Hardware & Embedded Systems': <Cpu size={22} />,
  'Artificial Intelligence & ML': <Brain size={22} />,
  'IoT & Connected Systems': <Wifi size={22} />,
  'Systems Integration': <Layers size={22} />,
  'Technical Consulting & Architecture': <Compass size={22} />,
};

interface ServiceCardProps {
  category: string;
  description: string;
  items: string[];
  index: number;
}

function ServiceCard({ category, description, items, index }: ServiceCardProps) {
  const [expanded, setExpanded] = useState(false);
  const icon = iconMap[category] || <Code size={22} />;
  const visibleItems = expanded ? items : items.slice(0, 4);
  const hasMore = items.length > 4;

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '20px 0px 20px 20px', // Cat's Eye sharp top-right corner
        border: (theme: Theme) => (theme.palette.mode === 'light' ? '1.5px solid #000000' : '1.5px solid #FFFFFF'),
        bgcolor: (theme: Theme) => (theme.palette.mode === 'light' ? '#FFFFFF' : '#000000'),
        boxShadow: (theme: Theme) =>
          theme.palette.mode === 'light'
            ? '0 4px 20px rgba(0,0,0,0.08)'
            : '0 4px 20px rgba(0,0,0,0.7)',
        p: { xs: 3, sm: 3.5 },
        transition: 'all 150ms ease',
        '&:hover': {
          borderColor: (theme: Theme) => (theme.palette.mode === 'light' ? '#B84A47' : '#C25752'),
          boxShadow: (theme: Theme) =>
            theme.palette.mode === 'light'
              ? '0 12px 32px rgba(0,0,0,0.18)'
              : '0 12px 36px rgba(194,87,82,0.16)',
        },
      }}
    >
      <Box>
        {/* Card Top Header */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 2,
          }}
        >
          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: '12px 0px 12px 12px',
              bgcolor: (theme) =>
                theme.palette.mode === 'light' ? 'rgba(192, 0, 0, 0.08)' : 'rgba(229, 35, 27, 0.15)',
              color: 'primary.main',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {icon}
          </Box>
          <Badge label={`0${index + 1}`} color="primary" />
        </Box>

        {/* Category Title */}
        <Typography
          variant="h5"
          sx={{
            mb: 1.25,
            fontSize: '1.2rem',
            fontWeight: 700,
            color: 'text.primary',
          }}
        >
          {category}
        </Typography>

        {/* Description */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2.5, lineHeight: 1.65, minHeight: 48 }}
        >
          {description}
        </Typography>

        {/* Items List */}
        <Box
          component="ul"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1.25,
            p: 0,
            m: 0,
            listStyle: 'none',
          }}
        >
          {visibleItems.map((item) => (
            <Box
              key={item}
              component="li"
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 1.25,
              }}
            >
              <Box
                sx={{
                  color: 'primary.main',
                  mt: '2px',
                  flexShrink: 0,
                  width: 18,
                  height: 18,
                  borderRadius: '50%',
                  bgcolor: (theme) =>
                    theme.palette.mode === 'light' ? 'rgba(192, 0, 0, 0.1)' : 'rgba(229, 35, 27, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Check size={12} strokeWidth={2.5} />
              </Box>
              <Typography
                variant="body2"
                sx={{ fontSize: '0.875rem', color: 'text.primary', fontWeight: 450 }}
              >
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Footer Action */}
      <Box
        sx={{
          mt: 3,
          pt: 2,
          borderTop: '1px solid',
          borderColor: 'divider',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {hasMore ? (
          <Button
            variant="secondary"
            size="small"
            onClick={() => setExpanded(!expanded)}
            sx={{
              fontSize: '0.78rem',
              py: 0.5,
              px: 1.5,
              borderColor: 'divider',
            }}
          >
            {expanded ? 'Show Less' : `+${items.length - 4} More`}
            {expanded ? <ChevronUp size={14} style={{ marginLeft: 4 }} /> : <ChevronDown size={14} style={{ marginLeft: 4 }} />}
          </Button>
        ) : (
          <Box />
        )}

        <Button
          component={Link}
          href="/contact"
          variant="secondary"
          size="small"
          sx={{
            fontSize: '0.78rem',
            py: 0.5,
            px: 1.5,
            color: 'primary.main',
            borderColor: 'transparent',
            '&:hover': {
              borderColor: 'primary.main',
              bgcolor: 'transparent',
            },
          }}
        >
          Inquire <ArrowRight size={14} style={{ marginLeft: 4 }} />
        </Button>
      </Box>
    </Card>
  );
}

export default function ServicesCardGrid() {
  const [selectedTab, setSelectedTab] = useState('ALL');

  const categories = ['ALL', 'Software', 'Hardware', 'AI/ML', 'IoT', 'Integration', 'Consulting'];

  const filteredServices = services.filter((service) => {
    if (selectedTab === 'ALL') return true;
    if (selectedTab === 'Software') return service.category.includes('Software');
    if (selectedTab === 'Hardware') return service.category.includes('Hardware');
    if (selectedTab === 'AI/ML') return service.category.includes('Intelligence');
    if (selectedTab === 'IoT') return service.category.includes('IoT');
    if (selectedTab === 'Integration') return service.category.includes('Integration');
    if (selectedTab === 'Consulting') return service.category.includes('Consulting');
    return true;
  });

  return (
    <Section spacing="lg" id="services">
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'flex-start', md: 'flex-end' },
          justifyContent: 'space-between',
          mb: 4,
          gap: 2,
        }}
      >
        <Box>
          <Typography variant="overline" sx={{ color: 'primary.main', display: 'block', mb: 0.5, fontWeight: 700 }}>
            WHAT WE BUILD
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 700 }}>
            Our Engineering Services
          </Typography>
        </Box>

        {/* Interactive Filter Tabs */}
        <Box
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            maxWidth: '100%',
            overflowX: 'auto',
          }}
        >
          <Tabs
            value={selectedTab}
            onChange={(_, val) => setSelectedTab(val)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              minHeight: 40,
              '& .MuiTab-root': {
                minHeight: 40,
                fontSize: '0.85rem',
                fontWeight: 600,
                textTransform: 'none',
                px: 2,
                color: 'text.secondary',
                '&.Mui-selected': {
                  color: 'primary.main',
                },
              },
              '& .MuiTabs-indicator': {
                backgroundColor: 'primary.main',
                height: 2.5,
              },
            }}
          >
            {categories.map((cat) => (
              <Tab key={cat} label={cat} value={cat} />
            ))}
          </Tabs>
        </Box>
      </Box>

      {/* Services Grid with MUI Cards */}
      <Grid container spacing={3}>
        {filteredServices.map((service, index) => (
          <Grid key={service.category} size={{ xs: 12, sm: 6, md: 4 }}>
            <ServiceCard {...service} index={index} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
