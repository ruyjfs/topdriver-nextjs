'use client';
import * as React from 'react';
import Link from 'next/link';
import { Button } from '@mui/material';
import Image from 'next/image';
import logo from '@/assets/ruyjfs.svg';

export default function Footer() {
  return (
    // <footer className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-300/20">
    // <footer className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-100/20">
    <footer className="sticky top-0  border-t">
      <div className="mx-auto flex max-w-5xl items-center justify-center px-4 py-8">
        <p className="flex items-center">
          {/* Feito com ❤️ por{' '} */}
          Powered by{'  '}
          <Link
            href="https://ruyjfs.com"
            target="_blank"
            className="text-lg font-semibold tracking-tight"
          >
            <Image
              src={logo}
              alt="TopDriver"
              width={50}
              height={50}
              priority
              className="mx-1 mt-2"
            />
            {/* ruyjfs.com{' '} */}
          </Link>{' '}
          | © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
