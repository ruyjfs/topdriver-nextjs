'use client';
import { Button } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/svgs/ReligareLogo.svg';
import BackgroundParticles from '@/components/layouts/Particles';

export default function Page() {
  return (
    <main className="flex flex-1">
      <BackgroundParticles />
      {/* <Header /> */}
      <section className="flex mx-auto max-w-5xl px-4 py-10  flex-1 items-center justify-center">
        {/* <img src={logo} className="App-logo-text" alt="logo" /> */}
        <div>
          <div className="flex justify-center grid">
            <div className="flex justify-center items-center">
              <Image
                src={logo}
                alt="Logo do site religare.app"
                width={160}
                height={160}
                className="App-logo"
              />
            </div>
            <h1 className="text-4xl py-12 bold text-center">Religare</h1>
            <p className="text-center bold text-xl">
              Eis aqui o sentido mais profundo da minha relação contigo, <br />
              porque não existe, entre tu e eu, nem eu, nem tu, existe nós...
            </p>
          </div>
          <nav className=" items-center gap-2 justify-center p-10 flex gap-4 flex-1 grid flex-col sm:flex sm:flex-row">
            {/* flex-1 grid flex-col sm:bg-red-500 md:bg-blue-500 lg:bg-green-500 */}
            <Button
              component={Link as any}
              href="/sobre"
              variant="outlined"
              // className="normal-case backdrop-blur supports-[backdrop-filter]:bg-slate-100/20"
            >
              Sobre
            </Button>
            {/* <Button
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
            </Button> */}
          </nav>
          <div className="relative flex flex-1 justify-center items-center z-1000 w-full">
            <a
              style={{ width: 150, margin: 15 }}
              href="https://apps.apple.com/us/app/id1493537626"
              target="_blank"
            >
              <Image
                width={150}
                height={150}
                src="/images/logos/optimized/apple-store-badge.png"
                alt="logo AppStore"
              />
            </a>
            <a
              style={{ width: 150, margin: 15 }}
              href="https://play.google.com/store/apps/details?id=com.religarebr"
              target="_blank"
            >
              <Image
                width={150}
                height={150}
                src="/images/logos/optimized/google-play-badge.png"
                alt="logo GooglePlay"
              />
            </a>
          </div>
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
