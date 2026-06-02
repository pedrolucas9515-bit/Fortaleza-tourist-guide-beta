import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { VelaProvider } from '@/lib/store';

const APP_ICON_URL = "https://i.ibb.co/gLRCXsZC/draguinho.jpg";

export const metadata: Metadata = {
  title: 'Fortaleza Tourist Guide | Your Premium Guide',
  description: 'The ultimate mobile tourism experience for Fortaleza, Ceará. Explore beaches, culture, and gastronomy with AI-powered tips.',
  manifest: '/manifest.json',
  metadataBase: new URL('https://fortaleza-tourist-guide.app'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: APP_ICON_URL, href: APP_ICON_URL },
    ],
    shortcut: APP_ICON_URL,
    apple: APP_ICON_URL,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Fortaleza Guide',
  },
  applicationName: 'Fortaleza Guide',
  authors: [{ name: 'Fortaleza Tourist Guide Team' }],
  keywords: ['Fortaleza', 'Tourism', 'Guide', 'Brazil', 'Ceará', 'Travel', 'PWA'],
  openGraph: {
    title: 'Fortaleza Tourist Guide',
    description: 'Explore the land of light with our premium mobile guide.',
    images: [APP_ICON_URL],
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-body antialiased bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
        <VelaProvider>
          <main className="min-h-screen">
            {children}
          </main>
          <Toaster />
        </VelaProvider>
      </body>
    </html>
  );
}