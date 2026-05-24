
'use client';

import dynamic from 'next/dynamic';
import { useVelaStore } from '@/lib/store';
import { TRANSLATIONS } from '@/lib/i18n';
import BottomNav from '@/components/BottomNav';
import { Skeleton } from '@/components/ui/skeleton';

// Dynamic import to handle Leaflet's window dependency
const MapContainer = dynamic(() => import('./MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="h-screen w-full flex items-center justify-center bg-[#0f1315]">
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

  return (
    <div className="h-screen relative overflow-hidden bg-[#0f1315]">
      {/* HUD Header */}
      <div className="absolute top-0 left-0 right-0 z-[1000] px-6 pt-12 pb-8 hud-gradient pointer-events-none">
        <h1 className="font-headline text-3xl mb-1 text-white">{t.map}</h1>
        <p className="text-muted-foreground text-xs tracking-widest uppercase">Fortaleza Interactive HUD</p>
      </div>

      {/* Real Interactive Map Component */}
      <MapContainer />

      <BottomNav lang={language} />
    </div>
  );
}
