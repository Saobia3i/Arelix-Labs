'use client';

import React, { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import MuiLink from '@mui/material/Link';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  ArrowUpRight,
  Layers,
  Sparkles,
  X,
  CheckCircle2,
} from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { selectedWork } from '@/content/site-copy';

export default function SelectedWork() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const [activeModalProject, setActiveModalProject] = useState<typeof selectedWork[0] | null>(null);

  const total = selectedWork.length;

  // Auto-advance carousel
  useEffect(() => {
    if (!isPlaying || viewMode !== 'carousel') return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPlaying, total, viewMode]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const currentProject = selectedWork[currentIndex];

  return (
    <Section spacing="lg" background="paper" id="selected-work">
      {/* Header with Carousel Controls */}
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
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', display: 'block', mb: 0.5, fontWeight: 700 }}
          >
            PORTFOLIO SHOWCASE
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 700 }}>
            Selected Engineering Work
          </Typography>
        </Box>

        {/* Interactive View Toggle & Controls */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              bgcolor: (theme) => (theme.palette.mode === 'light' ? '#FFFFFF' : '#000000'),
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
              p: 0.5,
            }}
          >
            <Button
              variant="secondary"
              size="small"
              onClick={() => setViewMode('carousel')}
              sx={{
                px: 1.5,
                py: 0.5,
                fontSize: '0.78rem',
                bgcolor: viewMode === 'carousel' ? 'primary.main' : 'transparent',
                color: viewMode === 'carousel' ? '#FFFFFF' : 'text.secondary',
                borderColor: 'transparent',
                '&:hover': {
                  bgcolor: viewMode === 'carousel' ? 'primary.dark' : 'action.hover',
                  borderColor: 'transparent',
                },
              }}
            >
              Carousel
            </Button>
            <Button
              variant="secondary"
              size="small"
              onClick={() => setViewMode('grid')}
              sx={{
                px: 1.5,
                py: 0.5,
                fontSize: '0.78rem',
                bgcolor: viewMode === 'grid' ? 'primary.main' : 'transparent',
                color: viewMode === 'grid' ? '#FFFFFF' : 'text.secondary',
                borderColor: 'transparent',
                '&:hover': {
                  bgcolor: viewMode === 'grid' ? 'primary.dark' : 'action.hover',
                  borderColor: 'transparent',
                },
              }}
            >
              Grid View
            </Button>
          </Box>

          {viewMode === 'carousel' && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <IconButton
                onClick={handlePrev}
                size="small"
                aria-label="Previous case study"
                sx={{
                  border: '1px solid',
                  borderColor: 'divider',
                  color: 'text.primary',
                  '&:hover': { borderColor: 'primary.main', color: 'primary.main' },
                }}
              >
                <ChevronLeft size={18} />
              </IconButton>
              <IconButton
                onClick={() => setIsPlaying(!isPlaying)}
                size="small"
                aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                sx={{
                  border: '1px solid',
                  borderColor: 'divider',
                  color: isPlaying ? 'primary.main' : 'text.secondary',
                  '&:hover': { borderColor: 'primary.main' },
                }}
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              </IconButton>
              <IconButton
                onClick={handleNext}
                size="small"
                aria-label="Next case study"
                sx={{
                  border: '1px solid',
                  borderColor: 'divider',
                  color: 'text.primary',
                  '&:hover': { borderColor: 'primary.main', color: 'primary.main' },
                }}
              >
                <ChevronRight size={18} />
              </IconButton>
            </Box>
          )}
        </Box>
      </Box>

      {/* Mode 1: Interactive Carousel */}
      {viewMode === 'carousel' ? (
        <Box sx={{ position: 'relative' }}>
          <Card
            sx={{
              p: { xs: 3, md: 5 },
              minHeight: 320,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
              background: (theme) =>
                theme.palette.mode === 'light'
                  ? '#FFFFFF'
                  : 'linear-gradient(135deg, #000000 0%, #000000 100%)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
            }}
          >
            <Box>
              {/* Badges & Counter */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mb: 3,
                }}
              >
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {currentProject.tag.split(' · ').map((tag) => (
                    <Badge key={tag} label={tag} color="primary" />
                  ))}
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: 'var(--font-oswald)',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    color: 'text.secondary',
                  }}
                >
                  0{currentIndex + 1} / 0{total}
                </Typography>
              </Box>

              {/* Title */}
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem' },
                  fontWeight: 700,
                  mb: 2,
                  color: 'text.primary',
                }}
              >
                {currentProject.name}
              </Typography>

              {/* Description */}
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  lineHeight: 1.75,
                  maxWidth: 820,
                  fontSize: { xs: '0.95rem', md: '1.05rem' },
                  mb: 3,
                }}
              >
                {currentProject.description}
              </Typography>
            </Box>

            {/* Carousel Bottom Controls & Case Study Action */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                pt: 3,
                borderTop: '1px solid',
                borderColor: 'divider',
                flexWrap: 'wrap',
                gap: 2,
              }}
            >
              {/* Pagination Dots */}
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                {selectedWork.map((_, idx) => (
                  <Box
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    sx={{
                      width: idx === currentIndex ? 24 : 8,
                      height: 8,
                      borderRadius: 4,
                      bgcolor: idx === currentIndex ? 'primary.main' : 'divider',
                      cursor: 'pointer',
                      transition: 'all 100ms ease',
                      '&:hover': { bgcolor: 'primary.main' },
                    }}
                  />
                ))}
              </Box>

              {/* Interactive Case Study Modal trigger */}
              <Button
                variant="primary"
                onClick={() => setActiveModalProject(currentProject)}
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  fontSize: '0.85rem',
                }}
              >
                Explore Details & Architecture <ArrowUpRight size={16} />
              </Button>
            </Box>
          </Card>
        </Box>
      ) : (
        /* Mode 2: MUI Cards Grid */
        <Grid container spacing={3}>
          {selectedWork.map((project, idx) => (
            <Grid key={project.name} size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Box>
                  <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                    {project.tag.split(' · ').map((tag) => (
                      <Badge key={tag} label={tag} color="primary" />
                    ))}
                  </Box>

                  <Typography
                    variant="h4"
                    sx={{ mb: 1.5, fontSize: '1.25rem', fontWeight: 700 }}
                  >
                    {project.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.7, mb: 3 }}
                  >
                    {project.description}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    pt: 2,
                    borderTop: '1px solid',
                    borderColor: 'divider',
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Button
                    variant="secondary"
                    size="small"
                    onClick={() => setActiveModalProject(project)}
                    sx={{
                      fontSize: '0.8rem',
                      color: 'primary.main',
                      borderColor: 'divider',
                      '&:hover': { borderColor: 'primary.main' },
                    }}
                  >
                    View Details <ArrowUpRight size={14} style={{ marginLeft: 4 }} />
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Interactive Case Study Detail Modal */}
      <Dialog
        open={Boolean(activeModalProject)}
        onClose={() => setActiveModalProject(null)}
        maxWidth="md"
        fullWidth
        slotProps={{
          paper: {
            sx: {
              borderRadius: 3,
              bgcolor: 'background.paper',
              p: 1,
            },
          },
        }}
      >
        {activeModalProject && (
          <>
            <DialogTitle
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                pb: 1,
              }}
            >
              <Box>
                <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700 }}>
                  CASE STUDY DETAILS
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 700, fontSize: '1.5rem' }}>
                  {activeModalProject.name}
                </Typography>
              </Box>
              <IconButton onClick={() => setActiveModalProject(null)} size="small">
                <X size={20} />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers sx={{ borderColor: 'divider' }}>
              <Box sx={{ mb: 3, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {activeModalProject.tag.split(' · ').map((tag) => (
                  <Badge key={tag} label={tag} color="primary" />
                ))}
              </Box>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.75 }}>
                {activeModalProject.description}
              </Typography>
              <Typography variant="h6" sx={{ mb: 1.5, fontSize: '1rem', fontWeight: 600 }}>
                Engineering Highlights & Key Outcomes:
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                  <CheckCircle2 size={18} style={{ color: '#B84A47', marginTop: 2, flexShrink: 0 }} />
                  <Typography variant="body2">
                    Production-grade system designed and tested under harsh operational environments.
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                  <CheckCircle2 size={18} style={{ color: '#B84A47', marginTop: 2, flexShrink: 0 }} />
                  <Typography variant="body2">
                    Seamless integration between low-level hardware/firmware layers and cloud telemetry dashboards.
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                  <CheckCircle2 size={18} style={{ color: '#B84A47', marginTop: 2, flexShrink: 0 }} />
                  <Typography variant="body2">
                    Zero third-party vendor lock-in with fully documented API specs and hardware schemas.
                  </Typography>
                </Box>
              </Box>
            </DialogContent>
            <DialogActions sx={{ px: 3, py: 2, justifyContent: 'space-between' }}>
              <Typography variant="caption" color="text.secondary">
                Arelix Labs Engineering Project
              </Typography>
              <Button variant="primary" href="/contact" onClick={() => setActiveModalProject(null)}>
                Talk to Us About Similar Work
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Section>
  );
}
