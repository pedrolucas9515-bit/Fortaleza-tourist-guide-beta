'use client';

import { useEffect } from 'react';
import { useVelaStore } from '@/lib/store';
import { TRANSLATIONS } from '@/lib/i18n';
import { ArrowLeft, Sparkles, ThermometerSun, UtensilsCrossed, Laugh, Music, MapPin, Lightbulb } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';

export default function FactsPage() {
  const { language, isLoaded, markSectionViewed } = useVelaStore();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded) {
      markSectionViewed('curiosities');
    }
  }, [isLoaded, markSectionViewed]);

  if (!isLoaded) return null;
  const t = TRANSLATIONS[language];

  const facts = [
    { icon: ThermometerSun, text: t.fact1, color: 'text-orange-400', bg: 'bg-orange-400/10' },
    { icon: Laugh, text: t.fact2, color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
    { icon: UtensilsCrossed, text: t.fact3, color: 'text-red-400', bg: 'bg-red-400/10' },
    { icon: Music, text: t.fact4, color: 'text-purple-400', bg: 'bg-purple-400/10' },
    { icon: MapPin, text: t.fact5, color: 'text-primary', bg: 'bg-primary/10' }
  ];

  return (
    <div className="min-h-screen bg-background pb-32">
      <header className="px-6 pt-12 pb-10 hud-gradient sticky top-0 z-20">
        <button onClick={() => router.back()} className="mb-6 flex items-center gap-3 text-primary text-[10px] uppercase font-black tracking-[0.3em] hover:opacity-70 transition-opacity">
          <ArrowLeft className="w-5 h-5" /> {t.guide}
        </button>
        <h1 className="font-headline text-5xl text-white flex items-center gap-5 tracking-tight font-bold">
          {t.facts} <Sparkles className="w-10 h-10 text-primary animate-pulse" />
        </h1>
      </header>

      <div className="px-6 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        {facts.map((fact, idx) => (
          <Card key={idx} className="glass border-white/10 p-10 rounded-[3rem] relative overflow-hidden group shadow-2xl transition-all hover:scale-[1.02]">
            <div className="absolute -right-12 -bottom-12 opacity-5 group-hover:opacity-15 transition-all duration-1000 rotate-12 group-hover:rotate-0">
              <fact.icon className={`w-48 h-48 ${fact.color}`} />
            </div>
            
            <div className={`p-5 rounded-[2rem] ${fact.bg} inline-block mb-8 shadow-inner`}>
              <fact.icon className={`w-10 h-10 ${fact.color}`} />
            </div>
            
            <p className="text-2xl font-bold text-white leading-snug relative z-10 tracking-tight">
              {fact.text}
            </p>

            <div className="mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-black text-white/30">
              <Lightbulb className="w-4 h-4 text-primary" />
              <span>Ceará Insight</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
