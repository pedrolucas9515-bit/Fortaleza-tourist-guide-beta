'use client';

import { useVelaStore } from '@/lib/store';
import { TRANSLATIONS } from '@/lib/i18n';
import { ArrowLeft, Sparkles, ThermometerSun, UtensilsCrossed, Laugh } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';

export default function FactsPage() {
  const { language, isLoaded } = useVelaStore();
  const router = useRouter();

  if (!isLoaded) return null;
  const t = TRANSLATIONS[language];

  const facts = [
    { icon: ThermometerSun, text: t.fact1, color: 'text-primary' },
    { icon: UtensilsCrossed, text: t.fact2, color: 'text-primary' },
    { icon: Laugh, text: t.fact3, color: 'text-primary' }
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="px-6 pt-12 pb-6 hud-gradient sticky top-0 z-20">
        <button onClick={() => router.back()} className="mb-4 flex items-center gap-2 text-primary text-[10px] uppercase font-bold tracking-widest">
          <ArrowLeft className="w-4 h-4" /> {t.guide}
        </button>
        <h1 className="font-headline text-3xl text-foreground flex items-center gap-3">
          {t.facts} <Sparkles className="w-6 h-6 text-primary animate-pulse" />
        </h1>
      </header>

      <div className="px-6 space-y-6">
        {facts.map((fact, idx) => (
          <Card key={idx} className="glass border-border p-8 rounded-[2.5rem] relative overflow-hidden group">
            <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <fact.icon className={`w-32 h-32 ${fact.color}`} />
            </div>
            
            <div className={`p-4 rounded-3xl bg-primary/10 inline-block mb-6`}>
              <fact.icon className={`w-8 h-8 ${fact.color}`} />
            </div>
            
            <p className="text-lg font-medium text-foreground/90 leading-relaxed relative z-10">
              {fact.text}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}