'use client';
import * as React from 'react';
import Link from 'next/link';
import { Button } from '@mui/material';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Ruyjfs
        </Link>
        <nav className="flex items-center gap-2">
          <Button
            component={Link as any}
            href="/projetos"
            variant="text"
            className="normal-case"
          >
            Projetos
          </Button>
          <Button
            component={Link as any}
            href="/sobre"
            variant="outlined"
            className="normal-case"
          >
            Sobre
          </Button>
          <Button
            component={Link as any}
            href="/contato"
            variant="contained"
            className="normal-case"
          >
            Contato
          </Button>
        </nav>
      </div>
    </header>
  );
}
