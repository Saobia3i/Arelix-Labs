// Arelix Labs Design Tokens — ADR-02
// Do NOT hardcode these values anywhere else — always import from this file.

export const colors = {
  brand: {
    red: '#C00000',
    redDark: '#8F0000',
    redBright: '#E5231B',
    redBrightHover: '#FF3B30',
    black: '#0A0A0A',
    white: '#FFFFFF',
  },
  light: {
    backgroundDefault: '#FFFFFF',
    backgroundPaper: '#F7F7F7',
    textPrimary: '#0A0A0A',
    textSecondary: '#5C5C5C',
    divider: '#E3E3E3',
    primaryMain: '#C00000',
    primaryDark: '#8F0000',
    primaryContrastText: '#FFFFFF',
  },
  dark: {
    backgroundDefault: '#0A0A0A',
    backgroundPaper: '#141414',
    textPrimary: '#FFFFFF',
    textSecondary: '#B0B0B0',
    divider: '#2A2A2A',
    primaryMain: '#E5231B',
    primaryDark: '#FF3B30',
    primaryContrastText: '#FFFFFF',
  },
} as const;

export const spacing = {
  base: 4, // 4px base unit
  scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128],
} as const;

export const borderRadius = {
  default: 6,
  card: 8,
  pill: 100,
} as const;

export const typography = {
  fontFamilyHeading: 'var(--font-oswald), Oswald, sans-serif',
  fontFamilyBody: 'var(--font-roboto), Roboto, sans-serif',
  fontWeightLight: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
} as const;

export const containerMaxWidth = 1280;

export const sectionPadding = {
  sm: { py: { xs: 4, md: 5 } },
  md: { py: { xs: 6, md: 8 } },
  lg: { py: { xs: 8, md: 12 } },
} as const;
