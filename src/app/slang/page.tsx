'use client';

import { useVelaStore } from '@/lib/store';
import { TRANSLATIONS } from '@/lib/i18n';
import { ArrowLeft, Languages, MessageCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function SlangPage() {
  const { language, isLoaded } = useVelaStore();
  const router = useRouter();

  if (!isLoaded) return null;
  const t = TRANSLATIONS[language];

  const slangs = [
    { term: "Arre égua!", meaning: t.slang1Meaning },
    { term: "Eita!", meaning: t.slang2Meaning },
    { term: "Vixe!", meaning: t.slang3Meaning },
    { term: "Oxente!", meaning: t.slang4Meaning },
    { term: "Macho", meaning: t.slang5Meaning },
    { term: "Caba", meaning: t.slang6Meaning },
    { term: "Abestado", meaning: t.slang7Meaning },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="px-6 pt-12 pb-6 hud-gradient sticky top-0 z-20">
        <button onClick={() => router.back()} className="mb-4 flex items-center gap-2 text-primary text-[10px] uppercase font-bold tracking-widest">
          <ArrowLeft className="w-4 h-4" /> {t.guide}
        </button>
        <h1 className="font-headline text-3xl text-foreground flex items-center gap-3">
          {t.cearaSlang} <Languages className="w-6 h-6 text-primary" />
        </h1>
      </header>

      <div className="px-6 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        {slangs.map((item, idx) => (
          <Card key={idx} className="glass border-border p-6 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <MessageCircle className="w-16 h-16 text-primary" />
            </div>
            
            <div className="flex flex-col gap-2">
              <Badge className="w-fit bg-primary/20 text-primary border-0 font-bold uppercase text-[10px] tracking-widest">
                Slang
              </Badge>
              <h2 className="text-2xl font-headline text-foreground">{item.term}</h2>
              <div className="h-px w-full bg-border/50 my-2" />
              <p className="text-sm text-foreground/80 leading-relaxed font-medium italic">
                {item.meaning}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
