import type { Metadata } from 'next';
import './globals.css';
import EmotionRegistry from './emotion-registry';
import { Providers } from './providers';
import Footer from '@/components/layouts/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Religare',
    template: '%s | Religare', // 👈 define o formato padrão do título
  },
  description:
    '🌌 Conecte-se com o essencial. 💫 A sua jornada de autodesenvolvimento começa aqui. #ReligareAtomicApp',
  keywords: [
    'Religare',
    'autodesenvolvimento',
    'inteligência emocional',
    'espiritualidade',
  ],
  openGraph: {
    title: 'Religare Atomic App',
    description: 'Conecte-se com o essencial 💫',
    url: 'https://religare.app',
    siteName: 'Religare',
    images: [
      {
        url: '/ReligareLogo.svg',
        width: 1200,
        height: 630,
        alt: 'Imagem de capa do Religare',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@religareapp',
    title: 'Religare Atomic App',
    description: 'Autoconhecimento guiado por tecnologia e propósito.',
    images: ['/ReligareLogo.svg'],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="flex min-h-screen flex-col bg-slate-900 text-slate-200 antialiased animated fadeIn">
        <main className="flex-1 flex ">
          <EmotionRegistry>
            <Providers>{children}</Providers>
          </EmotionRegistry>
        </main>
        <Footer />
      </body>
    </html>
  );
}
