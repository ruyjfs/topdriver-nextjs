import type { Metadata } from 'next';
import './globals.css';
import EmotionRegistry from './emotion-registry';
import { Providers } from './providers';
import Footer from '@/components/layouts/Footer';

export const metadata: Metadata = {
  title: 'Ruyjfs',
  description: 'Site do Ruy Junior Ferreira Silva.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="flex min-h-screen flex-col bg-slate-900 text-slate-200 antialiased gradient animate animated fadeIn">
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
