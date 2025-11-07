'use client';
import Header from '@/components/layouts/Header';
import { Card, CardContent, Chip, Button } from '@mui/material';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="items-center gap-2 flex-1 justify-center">
      {/* <Header /> */}
      <section className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="text-3xl font-bold">Olá, eu sou o Ruy 👋</h1>
        <p className="mt-2 max-w-prose text-slate-300">
          Sou completamente apaixonado por tecnologia e por onde conseguimos
          chegar com ela.
        </p>
        <p>
          Atuo como Arquiteto de Solução, Arquiteto de Software Fullstack
          Master, Analista de Sistemas Sr, Gerência de Configuração e Mudança
          (GCM) Desenvolvedor Sr e Engenheiro de Software.
        </p>
        <p className="mt-2 max-w-prose text-slate-300">
          A melhor forma de prever o futuro, é criando ele e que possamos deixar
          o mundo melhor do que o encontramos! 🍃🌎📜
        </p>

        <nav className="flex items-center gap-2 flex-1 justify-center p-10">
          <Button
            component={Link as any}
            href="/"
            variant="outlined"
            className="normal-case"
          >
            Voltar
          </Button>
        </nav>
      </section>
    </main>
  );
}
