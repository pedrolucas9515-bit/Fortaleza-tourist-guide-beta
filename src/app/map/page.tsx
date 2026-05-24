
'use client';

import { useVelaStore } from '@/lib/store';
import { ATTRACTIONS } from '@/lib/data';
import { TRANSLATIONS } from '@/lib/i18n';
import BottomNav from '@/components/BottomNav';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { MapPin, Info, Navigation } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function MapPage() {
  const { language, isLoaded } = useVelaStore();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  if (!isLoaded) return null;
  const t = TRANSLATIONS[language];
  const selected = ATTRACTIONS.find(a => a.id === selectedId);

  return (
    <div className="h-screen relative overflow-hidden bg-[#0f1315]">
      {/* HUD Header */}
      <div className="absolute top-0 left-0 right-0 z-20 px-6 pt-12 pb-8 hud-gradient pointer-events-none">
        <h1 className="font-headline text-3xl mb-1 text-white">{t.map}</h1>
        <p className="text-muted-foreground text-xs tracking-widest uppercase">Fortaleza HUD Navigation</p>
      </div>

      {/* Mock Interactive Map */}
      <div className="absolute inset-0 bg-[#0a0d0e] flex items-center justify-center">
        {/* Simple visual mock for map nodes */}
        <div className="relative w-full h-full opacity-40">
           <svg width="100%" height="100%" viewBox="0 0 400 800">
             <path d="M0 200 Q200 400 400 200 L400 800 L0 800 Z" fill="#151a1d" />
             <circle cx="200" cy="400" r="150" stroke="#53beec" strokeWidth="0.5" fill="none" opacity="0.2" />
             <circle cx="200" cy="400" r="250" stroke="#53beec" strokeWidth="0.5" fill="none" opacity="0.1" />
           </svg>
        </div>

        {ATTRACTIONS.map((a, idx) => (
          <button
            key={a.id}
            onClick={() => setSelectedId(a.id)}
            style={{
              position: 'absolute',
              left: `${15 + (idx % 3) * 30}%`,
              top: `${20 + (idx * 8)}%`,
            }}
            className={cn(
              "flex flex-col items-center transition-all duration-300",
              selectedId === a.id ? "scale-125 z-20" : "scale-100 z-10 opacity-70"
            )}
          >
            <div className={cn(
              "p-2 rounded-full glass border-2 mb-1",
              selectedId === a.id ? "border-primary text-primary" : "border-white/10 text-white"
            )}>
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-[10px] uppercase tracking-tighter text-white font-bold max-w-[60px] text-center">{a.title}</span>
          </button>
        ))}
      </div>

      {/* Selected Node Details HUD */}
      {selected && (
        <Card className="absolute bottom-24 left-6 right-6 z-30 glass border-white/20 p-4 rounded-3xl animate-in slide-in-from-bottom-10 duration-500">
           <div className="flex gap-4 items-start">
             <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0">
               <img src={selected.imageUrl} alt="" className="w-full h-full object-cover" />
             </div>
             <div className="flex-1 min-w-0">
               <Badge className="mb-1 text-[8px] tracking-widest bg-primary/20 text-primary border-0">{selected.category}</Badge>
               <h3 className="font-headline text-xl text-white truncate">{selected.title}</h3>
               <p className="text-xs text-muted-foreground line-clamp-1 italic">{selected.address}</p>
             </div>
           </div>
           <div className="grid grid-cols-2 gap-2 mt-4">
             <Button asChild variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 rounded-xl h-10 text-[10px] uppercase font-bold">
               <Link href={`/attraction/${selected.id}`}><Info className="w-3 h-3 mr-2" /> Details</Link>
             </Button>
             <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl h-10 text-[10px] uppercase font-bold">
               <Navigation className="w-3 h-3 mr-2" /> Navigate
             </Button>
           </div>
        </Card>
      )}

      <BottomNav lang={language} />
    </div>
  );
}
