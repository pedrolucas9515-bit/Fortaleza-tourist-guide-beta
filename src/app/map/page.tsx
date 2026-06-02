'use client';

import dynamic from 'next/dynamic';
import { useVelaStore } from '@/lib/store';
import { TRANSLATIONS } from '@/lib/i18n';
import BottomNav from '@/components/BottomNav';
import { Settings, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Dynamic import to handle Leaflet's window dependency
const MapContainer = dynamic(() => import('./MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="h-screen w-full flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-muted-foreground animate-pulse font-bold tracking-[0.2em] uppercase text-[10px]">Initializing HUD</p>
      </div>
    </div>
  ),
});

export default function MapPage() {
  const { language, isLoaded } = useVelaStore();

  if (!isLoaded) return null;
  const t = TRANSLATIONS[language];
  const APP_LOGO = "https://i.pinimg.com/736x/46/26/75/462675165eeac26a77e0d23157de6f09.jpg";

  return (
    <div className="h-screen relative overflow-hidden bg-background">
      {/* HUD Header */}
      <div className="absolute top-0 left-0 right-0 z-[1000] px-6 pt-12 pb-8 hud-gradient pointer-events-none flex justify-between items-start">
        <div className="flex items-center gap-4">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-primary/30 shadow-lg bg-black/40">
            <Image src={APP_LOGO} alt="Vela Logo" fill className="object-cover" />
          </div>
          <div>
            <h1 className="font-headline text-2xl mb-0.5 text-foreground">{t.map}</h1>
            <p className="text-muted-foreground text-[10px] tracking-widest uppercase font-bold">Interactive HUD</p>
          </div>
        </div>
        <div className="flex items-center gap-2 pointer-events-auto">
          <Link href="/feedback" className="glass p-3 rounded-full hover:bg-primary/10 transition-colors">
            <MessageSquare className="w-5 h-5 text-foreground" />
          </Link>
          <Link href="/settings" className="glass p-3 rounded-full hover:bg-primary/10 transition-colors">
            <Settings className="w-5 h-5 text-foreground" />
          </Link>
        </div>
      </div>

      {/* Real Interactive Map Component */}
      <MapContainer />

      <BottomNav lang={language} />
    </div>
  );
}