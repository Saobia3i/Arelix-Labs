import { createTheme, type PaletteMode } from '@mui/material/styles';
import { colors, borderRadius, typography } from './tokens';

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
          containedPrimary: {
            '&:hover': {
              backgroundColor: mode === 'light' ? colors.light.primaryDark : colors.dark.primaryDark,
            },
          },
          outlinedSecondary: {
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
            borderRadius: borderRadius.card,
            border: `1px solid ${t.divider}`,
            boxShadow: 'none',
            transition: 'box-shadow 80ms ease, border-color 80ms ease',
            '&:hover': {
              boxShadow: mode === 'light'
                ? '0 4px 20px rgba(0,0,0,0.10)'
                : '0 4px 20px rgba(0,0,0,0.40)',
              borderColor: t.primaryMain,
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
