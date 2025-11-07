'use client'
import * as React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '@/theme/muiTheme'

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}