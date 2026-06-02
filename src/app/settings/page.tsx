'use client';

import { useVelaStore } from '@/lib/store';
import { TRANSLATIONS } from '@/lib/i18n';
import BottomNav from '@/components/BottomNav';
import { Language, Theme } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Globe, Shield, Download, ArrowLeft, Smartphone, Palette, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SettingsPage() {
  const { language, updateLanguage, theme, updateTheme, isLoaded } = useVelaStore();
  const router = useRouter();

  if (!isLoaded) return null;
  const t = TRANSLATIONS[language];

  const langs: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'pt', label: 'Português' },
    { code: 'es', label: 'Español' },
    { code: 'fr', label: 'Français' },
  ];

  const themes: { code: Theme; label: string; color: string; desc: string }[] = [
    { code: 'dark', label: (t as any).dark, color: 'bg-white', desc: 'True Black & White' },
    { code: 'ocean', label: (t as any).ocean, color: 'bg-blue-500', desc: 'Deep Sea Identity' },
    { code: 'emerald', label: (t as any).emerald, color: 'bg-emerald-500', desc: 'Fresh Nature Green' },
    { code: 'purple', label: (t as any).purple, color: 'bg-purple-500', desc: 'Modern Neon Night' },
    { code: 'sunset', label: (t as any).sunset, color: 'bg-red-500', desc: 'Warm Sunset Red' },
    { code: 'tropical', label: (t as any).tropical, color: 'bg-orange-500', desc: 'Sunny Tropical Energy' },
  ];

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <header className="px-6 pt-12 pb-6 hud-gradient sticky top-0 z-20 flex justify-between items-start">
        <div>
          <button onClick={() => router.back()} className="mb-4 flex items-center gap-2 text-primary text-[10px] uppercase font-bold tracking-widest hover:opacity-70 transition-opacity">
            <ArrowLeft className="w-4 h-4" /> Go Back
          </button>
          <h1 className="font-headline text-3xl mb-1 text-foreground">{t.settings}</h1>
          <p className="text-muted-foreground text-xs tracking-widest uppercase">System Customization</p>
        </div>
      </header>

      <div className="px-6 space-y-8 pb-32">
        <section>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 flex items-center gap-2">
            <Palette className="w-4 h-4" /> {t.theme}
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {themes.map((th) => (
              <button
                key={th.code}
                onClick={() => updateTheme(th.code)}
                className={cn(
                  "p-5 rounded-[1.5rem] glass transition-all border text-left flex items-center gap-4",
                  theme === th.code ? "border-primary bg-primary/5 ring-1 ring-primary/20" : "border-white/5 bg-card/40 hover:bg-card/60"
                )}
              >
                <div className={cn("w-12 h-12 rounded-2xl shadow-xl flex items-center justify-center shrink-0", th.color)}>
                  {theme === th.code && <Check className="w-6 h-6 text-background" />}
                </div>
                <div className="flex-1">
                  <span className={cn("text-sm font-bold uppercase tracking-widest block", theme === th.code ? "text-primary" : "text-foreground")}>
                    {th.label}
                  </span>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-tight mt-0.5">{th.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

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
                  language === l.code ? "border-primary bg-primary/10" : "border-white/5 bg-card/40 hover:bg-card/60"
                )}
              >
                <span className={cn("text-sm font-bold uppercase tracking-widest", language === l.code ? "text-primary" : "text-foreground")}>
                  {l.label}
                </span>
                <div className="text-[10px] text-muted-foreground mt-1">{l.code.toUpperCase()} Engine</div>
              </button>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 flex items-center gap-2">
            <Smartphone className="w-4 h-4" /> Install Application
          </h3>
          <Link href="/download">
            <div className="flex items-center justify-between p-5 glass border-primary/30 bg-primary/5 rounded-[1.5rem] hover:bg-primary/10 transition-colors">
              <div>
                <h4 className="text-sm font-bold text-foreground uppercase tracking-widest">{t.downloadApp}</h4>
                <p className="text-xs text-muted-foreground">{t.downloadDesc}</p>
              </div>
              <Download className="w-5 h-5 text-primary animate-bounce" />
            </div>
          </Link>
        </section>

        <section className="pt-8 border-t border-white/5 text-center">
           <h2 className="font-headline text-2xl text-foreground/20">Fortaleza Tourist Guide</h2>
           <p className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase mt-2">v1.2.0 Core</p>
        </section>
      </div>

      <BottomNav lang={language} />
    </div>
  );
}