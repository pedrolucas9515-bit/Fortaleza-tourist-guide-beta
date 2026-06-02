'use client';

import { useVelaStore } from '@/lib/store';
import { TRANSLATIONS } from '@/lib/i18n';
import { ArrowLeft, ShieldCheck, AlertTriangle, Moon, Sun, Smartphone } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';

export default function SafetyPage() {
  const { language, isLoaded } = useVelaStore();
  const router = useRouter();

  if (!isLoaded) return null;
  const t = TRANSLATIONS[language];

  const tips = [
    { icon: Moon, text: t.safetyTip1 },
    { icon: Sun, text: t.safetyTip2 },
    { icon: Smartphone, text: t.safetyTip3 }
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="px-6 pt-12 pb-6 hud-gradient sticky top-0 z-20">
        <button onClick={() => router.back()} className="mb-4 flex items-center gap-2 text-primary text-[10px] uppercase font-bold tracking-widest">
          <ArrowLeft className="w-4 h-4" /> {t.guide}
        </button>
        <h1 className="font-headline text-3xl text-foreground">{t.safety}</h1>
      </header>

      <div className="px-6 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <section className="space-y-4">
          <div className="flex items-center gap-3 text-primary">
            <ShieldCheck className="w-6 h-6" />
            <h2 className="text-xl font-headline">{t.safetyTitle}</h2>
          </div>
          <p className="text-sm text-foreground/70 leading-relaxed italic">
            {t.safetyIntro}
          </p>
        </section>

        <div className="grid gap-4">
          {tips.map((tip, idx) => (
            <Card key={idx} className="glass border-border p-6 rounded-3xl flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-2xl shrink-0">
                <tip.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm text-foreground/90 leading-relaxed font-medium">
                {tip.text}
              </p>
            </Card>
          ))}
        </div>

        <Card className="p-6 bg-primary/10 border-primary/20 rounded-3xl border flex items-center gap-4">
          <AlertTriangle className="w-6 h-6 text-primary shrink-0" />
          <p className="text-[10px] text-primary uppercase font-bold tracking-widest">
            In case of emergency, dial 190 (Police) or 192 (Ambulance).
          </p>
        </Card>
      </div>
    </div>
  );
}