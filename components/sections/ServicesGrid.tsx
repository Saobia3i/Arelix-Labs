'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';
import { services } from '@/content/site-copy';
import {
  Check,
  Code,
  Cpu,
  Brain,
  Wifi,
  Layers,
  Compass,
  ArrowRight,
  GitMerge,
  X,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'Software Engineering': <Code size={22} />,
  'Hardware & Embedded Systems': <Cpu size={22} />,
  'Artificial Intelligence & ML': <Brain size={22} />,
  'IoT & Connected Systems': <Wifi size={22} />,
  'Systems Integration': <Layers size={22} />,
  'Technical Consulting & Architecture': <Compass size={22} />,
};

// Mathematically calculated 6 Radial Node Centers around Hub (550, 460) with R = 360px
// Angles: -90°, -30°, 30°, 90°, 150°, 210°
const radialNodes = [
  { x: 550, y: 100, label: 'NODE 01' }, // Top Center
  { x: 862, y: 280, label: 'NODE 02' }, // Top Right
  { x: 862, y: 640, label: 'NODE 03' }, // Bottom Right
  { x: 550, y: 820, label: 'NODE 04' }, // Bottom Center
  { x: 238, y: 640, label: 'NODE 05' }, // Bottom Left
  { x: 238, y: 280, label: 'NODE 06' }, // Top Left
];

// SVG Closed Ring Path connecting the 6 outer hexagon nodes
const outerRingPath = "M 550 100 L 862 280 L 862 640 L 550 820 L 238 640 L 238 280 Z";

// Sleek Compact Hexagon Card Component
function HexagonNodeCard({
  category,
  description,
  items,
  index,
  onOpenModal,
}: {
  category: string;
  description: string;
  items: string[];
  index: number;
  onOpenModal: (index: number) => void;
}) {
  const icon = iconMap[category] || <Code size={22} />;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      whileHover={{ scale: 1.05 }}
      style={{ width: '100%', height: '100%' }}
    >
      <Box
        sx={{
          position: 'relative',
          width: 250,
          height: 250,
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          p: 2.5,
          // Precision 6-Sided Hexagon Clip Path
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          bgcolor: (theme) => (theme.palette.mode === 'light' ? '#FFFFFF' : '#0D0D0D'),
          boxShadow: (theme) =>
            theme.palette.mode === 'light'
              ? '0 10px 30px rgba(0, 0, 0, 0.12)'
              : '0 10px 30px rgba(0, 0, 0, 0.7)',
          transition: 'all 200ms ease',
          cursor: 'pointer',
        }}
        onClick={() => onOpenModal(index)}
      >
        {/* SVG Hexagon Border Outline */}
        <svg
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
          }}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon
            points="50,1.5 98.5,25.5 98.5,74.5 50,98.5 1.5,74.5 1.5,25.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            style={{
              color: 'var(--card-stroke)',
            }}
          />
        </svg>

        <Box sx={{ position: 'relative', zIndex: 2, maxWidth: 190, mx: 'auto' }}>
          {/* Node Number Badge */}
          <Typography
            variant="overline"
            sx={{
              fontFamily: 'var(--font-oswald)',
              color: 'primary.main',
              fontWeight: 700,
              fontSize: '0.75rem',
              letterSpacing: '0.1em',
              display: 'block',
              mb: 0.5,
              lineHeight: 1,
            }}
          >
            NODE 0{index + 1}
          </Typography>

          {/* Icon */}
          <Box
            sx={{
              width: 40,
              height: 40,
              mx: 'auto',
              mb: 1,
              borderRadius: '50%',
              bgcolor: 'rgba(192, 0, 0, 0.08)',
              color: 'primary.main',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {icon}
          </Box>

          {/* Title */}
          <Typography
            variant="h4"
            sx={{
              fontSize: '1rem',
              fontWeight: 700,
              color: 'text.primary',
              mb: 0.5,
              lineHeight: 1.25,
            }}
          >
            {category}
          </Typography>

          {/* Action Trigger */}
          <Box
            sx={{
              mt: 1,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 0.5,
              fontSize: '0.72rem',
              fontWeight: 600,
              color: 'primary.main',
            }}
          >
            Explore Node <ArrowRight size={12} />
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}

export default function ServicesGrid() {
  const [selectedModal, setSelectedModal] = useState<number | null>(null);

  return (
    <Section spacing="lg" background="default" id="services">
      {/* Header (Original Copy: WHAT WE BUILD / Our Services) */}
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
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <Badge label="WHAT WE BUILD" color="primary" />
            <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary', letterSpacing: '0.05em' }}>
              NETWORK TOPOLOGY MAP
            </Typography>
          </Box>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.2rem', md: '2.8rem' },
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            Our Services
          </Typography>
        </Box>

        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 460, fontSize: '0.98rem', lineHeight: 1.6 }}>
          End-to-end engineering across software, hardware, AI, and connected IoT systems.
        </Typography>
      </Box>

      {/* Desktop Mode: 360° Spacious Radial Topology Map (No Overlaps, Clean Wires) */}
      <Box
        sx={{
          display: { xs: 'none', lg: 'block' },
          position: 'relative',
          width: 1100,
          height: 920,
          mx: 'auto',
        }}
      >
        {/* SVG Wires Layer (Underneath Cards, Clean Endpoints) */}
        <svg
          width="1100"
          height="920"
          viewBox="0 0 1100 920"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}
        >
          {/* Outer Ring Pathway */}
          <path d={outerRingPath} stroke="#E2E8F0" strokeWidth="2" strokeDasharray="6 6" />

          {/* Radial Wires Connecting Center Hub (550, 460) to all 6 Nodes */}
          {radialNodes.map((node, idx) => (
            <g key={idx}>
              <line
                x1="550"
                y1="460"
                x2={node.x}
                y2={node.y}
                stroke="#C00000"
                strokeWidth="1.5"
                opacity="0.6"
              />
              <motion.circle
                cx="550"
                cy="460"
                r="3.5"
                fill="#FF3B30"
                animate={{ cx: [550, node.x], cy: [460, node.y] }}
                transition={{
                  duration: 2 + idx * 0.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: idx * 0.25,
                }}
              />
            </g>
          ))}
        </svg>

        {/* CENTER MAIN NODE: CORE TOPOLOGY HUB (Exact Center: 550, 460) */}
        <Box
          sx={{
            position: 'absolute',
            top: 460,
            left: 550,
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
            textAlign: 'center',
            pointerEvents: 'none',
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Box
              sx={{
                width: 76,
                height: 76,
                borderRadius: '50%',
                bgcolor: 'primary.main',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 40px rgba(192, 0, 0, 0.55)',
                mx: 'auto',
                mb: 1.25,
              }}
            >
              <GitMerge size={36} />
            </Box>
          </motion.div>

          <Typography
            variant="caption"
            sx={{
              fontFamily: 'var(--font-oswald)',
              fontWeight: 700,
              letterSpacing: '0.14em',
              color: 'primary.main',
              fontSize: '0.95rem',
              display: 'block',
              bgcolor: (theme) => (theme.palette.mode === 'light' ? '#FFFFFF' : '#0D0D0D'),
              px: 2,
              py: 0.5,
              borderRadius: 10,
              boxShadow: (theme) =>
                theme.palette.mode === 'light'
                  ? '0 4px 14px rgba(0,0,0,0.12)'
                  : '0 4px 14px rgba(0,0,0,0.7)',
              border: (theme) => (theme.palette.mode === 'light' ? '1.5px solid #000000' : '1.5px solid #FFFFFF'),
            }}
          >
            CORE TOPOLOGY HUB
          </Typography>
        </Box>

        {/* 6 Hexagon Node Cards Positioned Radially Around the Center Hub (No Overlaps) */}
        {services.map((service, index) => {
          const node = radialNodes[index];
          return (
            <Box
              key={service.category}
              sx={{
                position: 'absolute',
                top: node.y,
                left: node.x,
                width: 250,
                height: 250,
                transform: 'translate(-50%, -50%)',
                zIndex: 5,
              }}
            >
              <HexagonNodeCard
                {...service}
                index={index}
                onOpenModal={(idx) => setSelectedModal(idx)}
              />
            </Box>
          );
        })}
      </Box>

      {/* Mobile & Tablet Mode (< lg): Responsive Hexagon Grid */}
      <Box sx={{ display: { xs: 'block', lg: 'none' } }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: '50%',
              bgcolor: 'primary.main',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mx: 'auto',
              mb: 1,
              boxShadow: '0 0 24px rgba(192,0,0,0.4)',
            }}
          >
            <GitMerge size={28} />
          </Box>
          <Typography variant="caption" sx={{ fontWeight: 700, color: 'primary.main', letterSpacing: '0.1em' }}>
            CORE TOPOLOGY HUB
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid key={service.category} size={{ xs: 12, sm: 6 }}>
              <HexagonNodeCard
                {...service}
                index={index}
                onOpenModal={(idx) => setSelectedModal(idx)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Node Specification Dialog */}
      <Dialog
        open={selectedModal !== null}
        onClose={() => setSelectedModal(null)}
        maxWidth="sm"
        fullWidth
        slotProps={{
          paper: {
            sx: {
              borderRadius: 3,
              p: 1,
              bgcolor: '#FFFFFF',
            },
          },
        }}
      >
        {selectedModal !== null && (
          <>
            <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    bgcolor: 'rgba(192,0,0,0.08)',
                    color: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {iconMap[services[selectedModal].category]}
                </Box>
                <Box>
                  <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, lineHeight: 1 }}>
                    TOPOLOGY NODE 0{selectedModal + 1} SPECIFICATION
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '1.2rem', mt: 0.25 }}>
                    {services[selectedModal].category}
                  </Typography>
                </Box>
              </Box>
              <IconButton onClick={() => setSelectedModal(null)} size="small">
                <X size={18} />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers sx={{ borderColor: '#E2E8F0' }}>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                {services[selectedModal].description}
              </Typography>

              <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5, color: 'text.primary' }}>
                Technical Capabilities &amp; Features:
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {services[selectedModal].items.map((item, i) => (
                  <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}>
                    <Box
                      sx={{
                        width: 18,
                        height: 18,
                        borderRadius: '50%',
                        bgcolor: 'rgba(192,0,0,0.08)',
                        color: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mt: '2px',
                        flexShrink: 0,
                      }}
                    >
                      <Check size={12} strokeWidth={2.5} />
                    </Box>
                    <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </DialogContent>
            <DialogActions sx={{ px: 3, py: 2 }}>
              <Button variant="primary" href="/contact" onClick={() => setSelectedModal(null)}>
                Inquire About Node Integration
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Section>
  );
}
