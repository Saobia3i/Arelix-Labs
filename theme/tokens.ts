// Arelix Labs Design Tokens — ADR-02
// Do NOT hardcode these values anywhere else — always import from this file.

export const colors = {
  brand: {
    red: '#B84A47',
    redDark: '#9F3F3C',
    redBright: '#D66B66',
    redBrightHover: '#C75B57',
    black: '#000000',
    white: '#FFFFFF',
  },
  light: {
    backgroundDefault: '#FFFFFF',
    backgroundPaper: '#FFFFFF',
    textPrimary: '#0F172A',
    textSecondary: '#475569',
    divider: '#E2E8F0',
    primaryMain: '#B84A47',
    primaryDark: '#9F3F3C',
    primaryContrastText: '#FFFFFF',
  },
  dark: {
    backgroundDefault: '#000000',
    backgroundPaper: '#000000',
    textPrimary: '#FFFFFF',
    textSecondary: '#A3A3A3',
    divider: '#1F1F1F',
    primaryMain: '#C25752',
    primaryDark: '#A94743',
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
