
'use client';

import { useVelaStore } from '@/lib/store';
import { TRANSLATIONS } from '@/lib/i18n';
import BottomNav from '@/components/BottomNav';
import { Language } from '@/lib/types';
import { Globe, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const APP_LOGO = "https://i.ibb.co/gLRCXsZC/draguinho.jpg";

export default function SettingsPage() {
  const { language, updateLanguage, isLoaded } = useVelaStore();
  const router = useRouter();

  if (!isLoaded) return <div className="h-screen flex items-center justify-center bg-background"><div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" /></div>;
  
  const t = TRANSLATIONS[language];

  const langs: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'pt', label: 'Português' },
    { code: 'es', label: 'Español' },
    { code: 'fr', label: 'Français' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="px-6 pt-12 pb-6 hud-gradient sticky top-0 z-20">
        <button onClick={() => router.back()} className="mb-4 flex items-center gap-2 text-primary text-[10px] uppercase font-bold tracking-widest hover:opacity-70 transition-opacity">
          <ArrowLeft className="w-4 h-4" /> Go Back
        </button>
        <h1 className="font-headline text-3xl mb-1 text-foreground">{t.settings}</h1>
        <p className="text-muted-foreground text-xs tracking-widest uppercase font-bold">Preferences</p>
      </header>

      <div className="px-6 space-y-8 pb-32">
        <section>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 flex items-center gap-2">
            <Globe className="w-4 h-4" /> Language
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {langs.map((l) => (
              <button
                key={l.code}
                onClick={() => updateLanguage(l.code)}
                className={cn(
                  "p-4 rounded-2xl glass transition-all border text-left",
                  language === l.code ? "border-primary bg-primary/10" : "border-border bg-card/40 hover:bg-card/60"
                )}
              >
                <span className={cn("text-sm font-bold uppercase tracking-widest", language === l.code ? "text-primary" : "text-foreground")}>
                  {l.label}
                </span>
                <div className="text-[10px] text-muted-foreground mt-1 font-medium">{l.code.toUpperCase()} Engine</div>
              </button>
            ))}
          </div>
        </section>

        <section className="pt-8 border-t border-border text-center">
           <h2 className="font-headline text-2xl text-foreground/20">Fortaleza Tourist Guide</h2>
           <div className="relative w-12 h-12 mx-auto mt-4 opacity-20 grayscale">
              <Image src={APP_LOGO} alt="Vela Logo" fill className="object-cover rounded-xl" />
           </div>
           <p className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase mt-2 font-bold">v1.3.5 Core</p>
        </section>
      </div>

      <BottomNav lang={language} />
    </div>
  );
}
