import type { Metadata } from 'next';
import './globals.css';
import EmotionRegistry from './emotion-registry';
import { Providers } from './providers';
import Footer from '@/components/layouts/Footer';

export const metadata: Metadata = {
  title: {
    default: 'TopDriver — A rede dos apaixonados por carros 🚗🔥',
    template: '%s | Top Driver', // 👈 define o formato padrão do título
  },
  description:
    'Entre para o TopDriver! Crie seu clube automotivo, compartilhe fotos dos seus carros, discuta nos fóruns e descubra opiniões reais de donos sobre cada modelo. O ponto de encontro para quem vive o mundo automotivo.',
  keywords: [
    'carros',
    'automóveis',
    'clubes de carros',
    'TopDriver',
    'fórum automotivo',
    'rede social de carros',
    'comunidade automotiva',
    'carros esportivos',
    'apaixonados por carros',
  ],
  applicationName: 'TopDriver',
  authors: [{ name: 'Ruy Junior Ferreira Silva', url: 'https://ruyjfs.com' }],
  creator: 'Ruy Junior Ferreira Silva',
  publisher: 'TopDriver',
  themeColor: '#000000',
  colorScheme: 'dark',
  openGraph: {
    type: 'website',
    url: 'https://topdriver.app',
    title: 'TopDriver — A rede dos apaixonados por carros 🚗🔥',
    description:
      'Conecte-se com pessoas que amam carros! Crie clubes, mostre sua garagem, troque experiências e descubra as opiniões reais dos donos sobre cada modelo.',
    siteName: 'TopDriver',
    images: [
      {
        url: 'https://topdriver.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TopDriver — Comunidade automotiva',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@topdriver',
    creator: '@ruyjfs',
    title: 'TopDriver — A rede dos apaixonados por carros 🚗🔥',
    description:
      'A plataforma que conecta donos e amantes de carros! Clubes, fóruns, garagem pessoal e opiniões reais dos donos.',
    images: ['https://topdriver.app/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
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
