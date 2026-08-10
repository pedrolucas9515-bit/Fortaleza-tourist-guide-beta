'use client';

import { useVelaStore } from '@/lib/store';
import { TRANSLATIONS } from '@/lib/i18n';
import { ArrowLeft, Languages, MessageCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import BottomNav from '@/components/BottomNav';

export default function SlangPage() {
  const { language, isLoaded } = useVelaStore();
  const router = useRouter();

  if (!isLoaded) return null;
  const t = TRANSLATIONS[language];

  // Map of 25 slangs requested
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
        {slangs.map((item, idx) => {
          const equiv = (t as any)[`${item.key}Equiv`];
          const sense = (t as any)[`${item.key}Sense`];

          return (
            <Card key={idx} className="glass border-border p-6 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <MessageCircle className="w-16 h-16 text-primary" />
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <Badge className="w-fit bg-primary/20 text-primary border-0 font-bold uppercase text-[8px] tracking-[0.2em] mb-1">
                    Gíria Original
                  </Badge>
                  <h2 className="text-3xl font-headline text-foreground">{item.term}</h2>
                </div>
                
                <div className="h-px w-full bg-border/50" />
                
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-primary/60 mb-1">
                      {t.naturalEquivalent}
                    </p>
                    <p className="text-lg text-foreground font-medium italic">
                      "{equiv}"
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-foreground/40 mb-1">
                      {t.sense}
                    </p>
                    <p className="text-sm text-foreground/80 leading-relaxed font-medium">
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
