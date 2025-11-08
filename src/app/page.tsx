'use client';
import { Button } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/ruyjfs.svg';
import BackgroundParticles from '@/components/layouts/Particles';

export default function Page() {
  return (
    <main className="flex flex-1">
      <BackgroundParticles />
      {/* <Header /> */}
      <section className="flex mx-auto max-w-5xl px-4 py-10  flex-1 items-center justify-center">
        {/* <img src={logo} className="App-logo-text" alt="logo" /> */}
        <div>
          <div className="flex justify-center ">
            <Image
              src={logo}
              alt="Logo do site do Ruy"
              width={418}
              height={313}
              className="App-logo-text "
            />
          </div>
          <nav className=" items-center gap-2 justify-center p-10 flex gap-4 flex-1 grid flex-col sm:flex sm:flex-row">
            {/* flex-1 grid flex-col sm:bg-red-500 md:bg-blue-500 lg:bg-green-500 */}
            <Button
              component={Link as any}
              target="_blank"
              href="https://wiki.ruyjfs.com"
              variant="outlined"
            >
              Ruy Wiki
            </Button>
            <Button
              target="_blank"
              href="https://religare.app"
              variant="outlined"
            >
              Religare Atomic App
            </Button>
            <Button
              target="_blank"
              href="https://topdriver.app"
              variant="outlined"
            >
              Top Driver
            </Button>
            <Button
              component={Link as any}
              href="/sobre"
              variant="outlined"
              // className="normal-case backdrop-blur supports-[backdrop-filter]:bg-slate-100/20"
            >
              Sobre
            </Button>
          </nav>
        </div>

        {/* <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card className="shadow-lg">
            <CardContent>
              <h2 className="text-xl font-semibold">Projetos em destaque</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                <Chip label="Religare" color="primary" variant="outlined" />
                <Chip label="Hype" color="secondary" />
                <Chip label="V8 Car Collection" />
              </div>
              <Button className="mt-4" variant="contained">
                Ver portfólio
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent>
              <h2 className="text-xl font-semibold">Últimos artigos</h2>
              <ul className="mt-3 list-disc pl-5 text-slate-300">
                <li>Arquitetura evolutiva com modulação (2025)</li>
                <li>CI/CD na SEAD: boas práticas</li>
                <li>App Router + MUI + Tailwind: guia prático</li>
              </ul>
              <Button className="mt-4" variant="outlined">
                Ler artigos
              </Button>
            </CardContent>
          </Card>
        </div> */}
      </section>
    </main>
  );
}
