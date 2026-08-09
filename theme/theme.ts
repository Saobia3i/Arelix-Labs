import { createTheme, type PaletteMode } from '@mui/material/styles';
import { keyframes } from '@emotion/react';
import { colors, borderRadius, typography } from './tokens';

const cardShimmerSweep = keyframes`
  0%, 14% { transform: translateX(-260%) rotate(25deg); }
  68%, 100% { transform: translateX(720%) rotate(25deg); }
`;

export function getTheme(mode: PaletteMode) {
  const t = mode === 'light' ? colors.light : colors.dark;

  return createTheme({
    palette: {
      mode,
      primary: {
        main: t.primaryMain,
        dark: t.primaryDark,
        contrastText: t.primaryContrastText,
      },
      background: {
        default: t.backgroundDefault,
        paper: t.backgroundPaper,
      },
      text: {
        primary: t.textPrimary,
        secondary: t.textSecondary,
      },
      divider: t.divider,
    },
    typography: {
      fontFamily: typography.fontFamilyBody,
      h1: {
        fontFamily: typography.fontFamilyHeading,
        fontWeight: 700,
        letterSpacing: '-0.02em',
        lineHeight: 1.1,
      },
      h2: {
        fontFamily: typography.fontFamilyHeading,
        fontWeight: 700,
        letterSpacing: '-0.01em',
        lineHeight: 1.15,
      },
      h3: {
        fontFamily: typography.fontFamilyHeading,
        fontWeight: 600,
        letterSpacing: '-0.005em',
      },
      h4: {
        fontFamily: typography.fontFamilyHeading,
        fontWeight: 600,
      },
      h5: {
        fontFamily: typography.fontFamilyHeading,
        fontWeight: 500,
      },
      h6: {
        fontFamily: typography.fontFamilyHeading,
        fontWeight: 500,
      },
      body1: {
        fontFamily: typography.fontFamilyBody,
        fontWeight: 400,
        lineHeight: 1.7,
      },
      body2: {
        fontFamily: typography.fontFamilyBody,
        fontWeight: 400,
        lineHeight: 1.6,
      },
      button: {
        fontFamily: typography.fontFamilyBody,
        fontWeight: 500,
        textTransform: 'none',
        letterSpacing: '0.02em',
      },
      overline: {
        fontFamily: typography.fontFamilyBody,
        fontWeight: 500,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        fontSize: '0.75rem',
      },
    },
    shape: {
      borderRadius: borderRadius.default,
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            borderRadius: borderRadius.default,
            padding: '10px 24px',
            fontWeight: 500,
            transition: 'all 80ms ease',
            '&:hover': {
              boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
            },
          },
          contained: {
            '&:hover': {
              backgroundColor: mode === 'light' ? colors.light.primaryDark : colors.dark.primaryDark,
            },
          },
          outlined: {
            borderColor: t.divider,
            color: t.textPrimary,
            '&:hover': {
              borderColor: t.primaryMain,
              backgroundColor: 'transparent',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: '20px 0px 20px 20px', // Cat's Eye sharp top-right corner
            backgroundColor: mode === 'light' ? '#FFFFFF' : '#000000',
            border: mode === 'light' ? '1px solid #D8DEE8' : '1px solid #FFFFFF',
            boxShadow: mode === 'light'
              ? '0 4px 20px rgba(0,0,0,0.08)'
              : '0 4px 20px rgba(0,0,0,0.7)',
            transition: 'transform 150ms ease, box-shadow 150ms ease, border-color 150ms ease',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '-60%',
              left: '-35%',
              width: '28%',
              height: '220%',
              pointerEvents: 'none',
              zIndex: 2,
              opacity: mode === 'light' ? 0.28 : 0.38,
              background: mode === 'light'
                ? 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.5) 48%, rgba(255,255,255,0.72) 50%, rgba(255,255,255,0.5) 52%, transparent 100%)'
                : 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.14) 48%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.14) 52%, transparent 100%)',
              animation: `${cardShimmerSweep} 3.2s ease-in-out infinite`,
              '@media (prefers-reduced-motion: reduce)': {
                animation: 'none',
                opacity: 0,
              },
            },
            '&:hover': {
              transform: 'translateY(-3px)',
              boxShadow: mode === 'light'
                ? '0 12px 32px rgba(0,0,0,0.18)'
                : '0 12px 36px rgba(214,107,102,0.16)',
              borderColor: mode === 'light' ? '#B84A47' : '#C25752',
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: t.backgroundDefault,
            color: t.textPrimary,
            boxShadow: 'none',
            borderBottom: `1px solid ${t.divider}`,
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            borderRadius: `${borderRadius.default}px`,
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: borderRadius.default,
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: t.primaryMain,
            },
          },
          notchedOutline: {
            borderColor: t.divider,
            transition: 'border-color 80ms ease',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 4,
            fontWeight: 500,
            fontSize: '0.75rem',
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            borderColor: t.divider,
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollbarWidth: 'thin',
            scrollbarColor: `${t.divider} transparent`,
          },
          '::selection': {
            backgroundColor: t.primaryMain,
            color: '#fff',
          },
        },
      },
    },
  });
}
