import type { Metadata } from 'next';
import { Inter, Oswald } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AutoFix Trenčín — Spoľahlivý autoservis',
  description:
    'Profesionálny autoservis v Trenčíne. Mechanika, pneumatiky, elektrika, karoséria. Expresná diagnostika od 30 minút. Záruka 2 roky.',
  keywords: 'autoservis, Trenčín, mechanik, oprava auta, diagnostika, pneumatiky',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className={`${inter.variable} ${oswald.variable}`}>
      <body>{children}</body>
    </html>
  );
}
