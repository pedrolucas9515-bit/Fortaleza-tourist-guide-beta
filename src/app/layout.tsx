import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Fortaleza Tourist Guide | Your Premium Guide',
  description: 'The ultimate mobile tourism experience for Fortaleza, Ceará.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Fortaleza Guide',
  },
  icons: {
    icon: [
      { url: 'https://i.pinimg.com/736x/46/26/75/462675165eeac26a77e0d23157de6f09.jpg', sizes: 'any' }
    ],
    apple: [
      { url: 'https://i.pinimg.com/736x/46/26/75/462675165eeac26a77e0d23157de6f09.jpg', sizes: '180x180', type: 'image/jpeg' }
    ],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: '#53beec',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <main className="min-h-screen pb-20">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
