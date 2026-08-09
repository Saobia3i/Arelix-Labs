'use client';

import React, {
  createContext,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getTheme } from './theme';

type ColorMode = 'light' | 'dark';

interface ColorModeContextValue {
  mode: ColorMode;
  toggleColorMode: () => void;
}

const ColorModeContext = createContext<ColorModeContextValue>({
  mode: 'light',
  toggleColorMode: () => {},
});

export function useColorMode() {
  return useContext(ColorModeContext);
}

const STORAGE_KEY = 'arelix-color-mode';

function getInitialMode(fallback: ColorMode): ColorMode {
  if (typeof window === 'undefined') return fallback;
  const stored = localStorage.getItem(STORAGE_KEY) as ColorMode | null;
  if (stored === 'light' || stored === 'dark') return stored;
  return fallback;
}

export function ColorModeProvider({
  children,
  initialMode = 'light',
}: {
  children: ReactNode;
  initialMode?: ColorMode;
}) {
  const [mode, setMode] = useState<ColorMode>(initialMode);

  useLayoutEffect(() => {
    const storedMode = getInitialMode(initialMode);
    if (storedMode !== mode) setMode(storedMode);
    document.documentElement.dataset.arelixTheme = storedMode;
    document.documentElement.style.colorScheme = storedMode;
    document.cookie = `${STORAGE_KEY}=${storedMode}; Path=/; Max-Age=31536000; SameSite=Lax`;
  }, [initialMode, mode]);

  const toggleColorMode = () => {
    setMode((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem(STORAGE_KEY, next);
      document.cookie = `${STORAGE_KEY}=${next}; Path=/; Max-Age=31536000; SameSite=Lax`;
      document.documentElement.dataset.arelixTheme = next;
      document.documentElement.style.colorScheme = next;
      return next;
    });
  };

  const contextValue = useMemo(
    () => ({ mode, toggleColorMode }),
    [mode]
  );

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
