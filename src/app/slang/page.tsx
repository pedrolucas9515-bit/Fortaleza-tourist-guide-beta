'use client';

import { useEffect } from 'react';
import { useVelaStore } from '@/lib/store';
import { TRANSLATIONS } from '@/lib/i18n';
import { ArrowLeft, Languages, MessageCircle, Quote } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import BottomNav from '@/components/BottomNav';

export default function SlangPage() {
  const { language, isLoaded, markSectionViewed } = useVelaStore();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded) {
      markSectionViewed('slang');
    }
  }, [isLoaded, markSectionViewed]);

  if (!isLoaded) return null;
  const t = TRANSLATIONS[language];

  const slangs = [
    { term: "Arretado", key: "slangArretado" },
    { term: "Abestado", key: "slangAbestado" },
    { term: "Caba", key: "slangCaba" },
    { term: "Macho", key: "slangMacho" },
    { term: "Égua", key: "slangEgua" },
    { term: "Arre égua!", key: "slangArreEgua" },
    { term: "Vixe!", key: "slangVixe" },
    { term: "Eita!", key: "slangEita" },
    { term: "Oxente!", key: "slangOxente" },
    { term: "Aperreio", key: "slangAperreio" },
    { term: "Aperreado", key: "slangAperreado" },
    { term: "Mangar", key: "slangMangar" },
    { term: "Mangar de alguém", key: "slangMangarDeAlguem" },
    { term: "Leseira", key: "slangLeseira" },
    { term: "Lesado", key: "slangLesado" },
    { term: "Avexado", key: "slangAvexado" },
    { term: "Quenga", key: "slangQuenga" },
    { term: "Cagado", key: "slangCagado" },
    { term: "Peba", key: "slangPeba" },
    { term: "Ruma", key: "slangRuma" },
    { term: "Bichinho", key: "slangBichinho" },
    { term: "Botar boneco", key: "slangBotarBoneco" },
    { term: "Dar o prego", key: "slangDarOPrego" },
    { term: "Pegar o beco", key: "slangPegarOBeco" },
    { term: "Tá de boa", key: "slangTaDeBoa" }
  ];

  return (
    <div className="min-h-screen bg-background pb-32">
      <header className="px-6 pt-12 pb-10 hud-gradient sticky top-0 z-20">
        <button onClick={() => router.back()} className="mb-6 flex items-center gap-3 text-primary text-[10px] uppercase font-black tracking-[0.3em] hover:opacity-70 transition-opacity">
          <ArrowLeft className="w-5 h-5" /> {t.guide}
        </button>
        <h1 className="font-headline text-5xl text-white flex items-center gap-5 tracking-tight font-bold">
          {t.cearaSlang} <Languages className="w-10 h-10 text-primary opacity-50" />
        </h1>
        <p className="text-white/40 text-xs mt-2 uppercase tracking-widest font-bold">{t.slangDesc}</p>
      </header>

      <div className="px-6 space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
        {slangs.map((item, idx) => {
          const equiv = (t as any)[`${item.key}Equiv`];
          const sense = (t as any)[`${item.key}Sense`];

          return (
            <Card key={idx} className="glass border-white/10 p-8 rounded-[2.5rem] relative overflow-hidden group shadow-2xl hover:border-primary/40 transition-all">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-all duration-700">
                <Quote className="w-24 h-24 text-primary" />
              </div>
              
              <div className="flex flex-col gap-6 relative z-10">
                <div className="flex flex-col gap-3">
                  <Badge className="w-fit bg-primary/20 text-primary border-0 font-black uppercase text-[9px] tracking-[0.3em] px-3 py-1">
                    Gíria Local
                  </Badge>
                  <h2 className="text-4xl font-headline text-white font-bold tracking-tight">{item.term}</h2>
                </div>
                
                <div className="h-px w-full bg-white/5" />
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-[10px] uppercase tracking-[0.2em] font-black text-primary/60">
                      {t.naturalEquivalent}
                    </p>
                    <p className="text-2xl text-white font-bold italic tracking-tight leading-tight">
                      "{equiv}"
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[10px] uppercase tracking-[0.2em] font-black text-white/30">
                      {t.sense}
                    </p>
                    <p className="text-base text-white/70 leading-relaxed font-medium">
                      {sense}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      
      <BottomNav lang={language} />
    </div>
  );
}
