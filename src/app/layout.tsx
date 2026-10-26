import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'VoiSage AI — Your conversations, handled intelligently',
  description: 'B2C consumer AI call assistant for Android in India. Unknown call? VoiSage answers, identifies itself as an AI assistant, understands who is calling and why, lets you watch live, and lets you take over.',
  keywords: [
    'VoiSage AI',
    'AI Call Assistant',
    'Android Call Assistant',
    'Call Screener India',
    'Dual SIM call assistant',
    'AI call answering Telugu Hindi English',
    'Tech22Blocks'
  ],
  authors: [{ name: 'Tech22Blocks' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0b0f19',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
