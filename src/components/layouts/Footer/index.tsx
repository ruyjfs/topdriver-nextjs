'use client';
import * as React from 'react';
import Link from 'next/link';
import { Button } from '@mui/material';

export default function Footer() {
  return (
    // <footer className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-300/20">
    <footer className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-100/20">
      <div className="mx-auto flex max-w-5xl items-center justify-center px-4 py-3">
        <p>
          Feito com ❤️ por{' '}
          <Link href="/" className="text-lg font-semibold tracking-tight">
            ruyjfs.com{' '}
          </Link>{' '}
          | © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
