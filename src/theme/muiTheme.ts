// src/theme/muiTheme.ts
import { createTheme } from '@mui/material/styles';

// Paleta alinhada ao Tailwind (ex.: primary = sky-500 #0ea5e9)
export const theme = createTheme({
  spacing: 4, // casa com Tailwind (1 = 4px)
  palette: {
    primary: { main: '#ffffff' }, // sky-500
    secondary: { main: '#22c55e' }, // green-500 (exemplo)
    background: { default: '#0b1022', paper: '#0f172a' }, // vibe escura opcional
    text: { primary: '#e2e8f0', secondary: '#94a3b8' },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(12px)',
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
          borderRadius: '1rem',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(8px)',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: '#fff',
          transition: 'background 0.3s',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          },
        },
      },
    },
  },
});
