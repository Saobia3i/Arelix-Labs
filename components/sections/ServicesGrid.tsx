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
import { keyframes } from '@emotion/react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
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
  X,
} from 'lucide-react';

const hexPopIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.65);
  }
  75% {
    transform: scale(1.04);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const iconMap: Record<string, React.ReactNode> = {
  'Software Development': <Code size={22} color="#B84A47" strokeWidth={2.2} />,
  'AI Solutions': <Brain size={22} color="#B84A47" strokeWidth={2.2} />,
  'Hardware & Electronics': <Cpu size={22} color="#B84A47" strokeWidth={2.2} />,
  'IoT & Connected Systems': <Wifi size={22} color="#B84A47" strokeWidth={2.2} />,
  'UI/UX & Product Design': <Layers size={22} color="#B84A47" strokeWidth={2.2} />,
  'Technology Support & Maintenance': <Compass size={22} color="#B84A47" strokeWidth={2.2} />,
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
      initial={{ opacity: 0, scale: 0.65 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.45,
        delay: (index % 2) * 0.12,
        ease: [0.175, 0.885, 0.32, 1.275],
      }}
      style={{ width: '100%', height: '100%' }}
    >
      <Box
        sx={{
          position: 'relative',
          width: 220,
          height: 220,
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          p: 2,
          // Precision 6-Sided Hexagon Clip Path
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          bgcolor: (theme) => (theme.palette.mode === 'light' ? '#FFFFFF' : '#000000'),
          boxShadow: (theme) =>
            theme.palette.mode === 'light'
              ? '0 10px 30px rgba(0, 0, 0, 0.12)'
              : '0 10px 30px rgba(0, 0, 0, 0.7)',
          transition: 'transform 200ms ease, box-shadow 200ms ease',
          cursor: 'pointer',
          '&:hover': {
            transform: 'scale(1.05)',
          },
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

        <Box sx={{ position: 'relative', zIndex: 2, maxWidth: 170, mx: 'auto' }}>
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
              fontSize: '1.35rem',
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
              fontSize: '0.95rem',
              fontWeight: 600,
              color: 'primary.main',
            }}
          >
            Explore <ArrowRight size={12} />
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}

export default function ServicesGrid() {
  const [selectedModal, setSelectedModal] = useState<number | null>(null);

  return (
    <Section
      spacing="lg"
      background="default"
      id="services"
      sx={{ py: { xs: 6, md: 2 } }}
    >
      {/* Services heading */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'flex-start', md: 'flex-end' },
          justifyContent: 'space-between',
          mb: { xs: 4, lg: 1.5 },
          gap: 2,
        }}
      >
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.2rem', md: '2.35rem' },
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
          width: 638,
          height: 563,
          mx: 'auto',
          '@media (min-height: 850px)': {
            width: 770,
            height: 679,
          },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 1100,
            height: 920,
            transform: 'scale(0.58) translateY(25px)',
            transformOrigin: 'top left',
            '@media (min-height: 850px)': {
              transform: 'scale(0.7) translateY(25px)',
            },
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
                stroke="#B84A47"
                strokeWidth="1.5"
                opacity="0.6"
              />
              <motion.circle
                cx="550"
                cy="460"
                r="3.5"
                fill="#C25752"
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

        {/* Center logo at the exact topology origin (550, 460). */}
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
                width: 86,
                height: 86,
                borderRadius: '50%',
                bgcolor: 'background.default',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                boxShadow: '0 0 40px rgba(217, 92, 87, 0.42)',
                mx: 'auto',
              }}
            >
              <Box
                component="img"
                src="/images/arelix-logo-transparent.png"
                alt="Arelix Labs"
                sx={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.08)' }}
              />
            </Box>
          </motion.div>

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
                width: 220,
                height: 220,
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
      </Box>

      {/* Mobile & Tablet Mode (< lg): Responsive Hexagon Grid */}
      <Box sx={{ display: { xs: 'block', lg: 'none' }, position: 'relative' }}>
        {/* Animated mobile connection backbone */}
        <Box
          component="svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
          sx={{
            display: { xs: 'block', sm: 'none' },
            position: 'absolute',
            top: 34,
            bottom: 80,
            left: '50%',
            width: 24,
            height: 'calc(100% - 114px)',
            transform: 'translateX(-50%)',
            color: 'primary.main',
            pointerEvents: 'none',
            zIndex: 0,
            overflow: 'visible',
          }}
        >
          <motion.line
            x1="50"
            y1="0"
            x2="50"
            y2="100"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="3 4"
            opacity="0.62"
            animate={{ strokeDashoffset: [0, -28] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
          />
        </Box>

        {/* Animated two-column tablet connection network */}
        <Box
          component="svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
          sx={{
            display: { xs: 'none', sm: 'block', lg: 'none' },
            position: 'absolute',
            top: 34,
            bottom: 70,
            left: 0,
            width: '100%',
            height: 'calc(100% - 104px)',
            color: 'primary.main',
            pointerEvents: 'none',
            zIndex: 0,
            overflow: 'visible',
          }}
        >
          <motion.path
            d="M 50 0 V 88 M 50 18 H 25 M 50 18 H 75 M 50 50 H 25 M 50 50 H 75 M 50 82 H 25 M 50 82 H 75"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.45"
            strokeDasharray="2 2"
            opacity="0.62"
            animate={{ strokeDashoffset: [0, -18] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
          />
        </Box>

        <Box sx={{ textAlign: 'center', mb: 4, position: 'relative', zIndex: 2 }}>
          <Box
            sx={{
              width: 66,
              height: 66,
              borderRadius: '50%',
              bgcolor: 'background.default',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              mx: 'auto',
              boxShadow: '0 0 24px rgba(217,92,87,0.34)',
            }}
          >
            <Box
              component="img"
              src="/images/arelix-logo-transparent.png"
              alt="Arelix Labs"
              sx={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.08)' }}
            />
          </Box>
        </Box>

        <Grid container spacing={3} sx={{ position: 'relative', zIndex: 1 }}>
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
              bgcolor: 'background.paper',
              color: 'text.primary',
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
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    bgcolor: 'rgba(184, 74, 71, 0.12)',
                    border: '1px solid rgba(184, 74, 71, 0.25)',
                    color: '#B84A47',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {iconMap[services[selectedModal].category] || <Code size={22} color="#B84A47" strokeWidth={2.2} />}
                </Box>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '1.2rem', color: 'text.primary' }}>
                    {services[selectedModal].category}
                  </Typography>
                </Box>
              </Box>
              <IconButton onClick={() => setSelectedModal(null)} size="small" sx={{ color: 'text.primary' }}>
                <X size={18} />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers sx={{ borderColor: 'divider' }}>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7, color: 'text.secondary' }}>
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
                        width: 20,
                        height: 20,
                        borderRadius: '50%',
                        bgcolor: 'rgba(184, 74, 71, 0.12)',
                        border: '1px solid rgba(184, 74, 71, 0.25)',
                        color: '#B84A47',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mt: '2px',
                        flexShrink: 0,
                      }}
                    >
                      <Check size={12} strokeWidth={2.5} color="#B84A47" />
                    </Box>
                    <Typography variant="body2" sx={{ fontSize: '0.875rem', color: 'text.primary' }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </DialogContent>
            <DialogActions sx={{ px: 3, py: 2 }}>
              <Button variant="primary" href="/contact" onClick={() => setSelectedModal(null)}>
                Inquire About Integration
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Section>
  );
}
