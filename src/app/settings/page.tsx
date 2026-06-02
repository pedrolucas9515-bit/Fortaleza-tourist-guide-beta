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

  const themes: { code: Theme; label: string; color: string }[] = [
    { code: 'dark', label: (t as any).dark, color: 'bg-[#53beec]' },
    { code: 'ocean', label: (t as any).ocean, color: 'bg-[#3b82f6]' },
    { code: 'emerald', label: (t as any).emerald, color: 'bg-[#10b981]' },
    { code: 'purple', label: (t as any).purple, color: 'bg-[#a855f7]' },
    { code: 'sunset', label: (t as any).sunset, color: 'bg-[#ef4444]' },
    { code: 'tropical', label: (t as any).tropical, color: 'bg-[#f97316]' },
  ];

  return (
    <div className="min-h-screen bg-[#0f1315]">
      <header className="px-6 pt-12 pb-6 hud-gradient sticky top-0 z-20 flex justify-between items-start">
        <div>
          <button onClick={() => router.back()} className="mb-4 flex items-center gap-2 text-primary text-[10px] uppercase font-bold tracking-widest hover:opacity-70 transition-opacity">
            <ArrowLeft className="w-4 h-4" /> Go Back
          </button>
          <h1 className="font-headline text-3xl mb-1 text-white">{t.settings}</h1>
          <p className="text-muted-foreground text-xs tracking-widest uppercase">System Preferences</p>
        </div>
      </header>

      <div className="px-6 space-y-8 pb-32">
        <section>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 flex items-center gap-2">
            <Palette className="w-4 h-4" /> {t.theme}
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {themes.map((th) => (
              <button
                key={th.code}
                onClick={() => updateTheme(th.code)}
                className={cn(
                  "p-4 rounded-2xl glass transition-all border text-left flex items-center justify-between",
                  theme === th.code ? "border-primary bg-primary/10" : "border-white/10 bg-white/5 hover:bg-white/10"
                )}
              >
                <div>
                  <div className={cn("w-3 h-3 rounded-full mb-2 shadow-sm", th.color)} />
                  <span className={cn("text-xs font-bold uppercase tracking-widest", theme === th.code ? "text-primary" : "text-white")}>
                    {th.label}
                  </span>
                </div>
                {theme === th.code && <Check className="w-4 h-4 text-primary" />}
              </button>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 flex items-center gap-2">
            <Globe className="w-4 h-4" /> Localization
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {langs.map((l) => (
              <button
                key={l.code}
                onClick={() => updateLanguage(l.code)}
                className={cn(
                  "p-4 rounded-2xl glass transition-all border text-left",
                  language === l.code ? "border-primary bg-primary/10" : "border-white/10 bg-white/5 hover:bg-white/10"
                )}
              >
                <span className={cn("text-sm font-bold uppercase tracking-widest", language === l.code ? "text-primary" : "text-white")}>
                  {l.label}
                </span>
                <div className="text-[10px] text-muted-foreground mt-1">{l.code.toUpperCase()} Engine Active</div>
              </button>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 flex items-center gap-2">
            <Smartphone className="w-4 h-4" /> Application
          </h3>
          <Link href="/download">
            <div className="flex items-center justify-between p-4 glass border-primary/30 bg-primary/5 rounded-2xl hover:bg-primary/10 transition-colors">
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-widest">{t.downloadApp}</h4>
                <p className="text-xs text-muted-foreground">{t.downloadDesc}</p>
              </div>
              <Download className="w-4 h-4 text-primary animate-bounce" />
            </div>
          </Link>
        </section>

        <section>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 flex items-center gap-2">
            <Shield className="w-4 h-4" /> Data & Storage
          </h3>
          <div className="space-y-4">
             <div className="flex items-center justify-between p-4 glass border-white/10 rounded-2xl">
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-widest">Offline Mode</h4>
                  <p className="text-xs text-muted-foreground">Cache attractions and maps</p>
                </div>
                <Badge className="bg-green-500/20 text-green-500 border-0">ACTIVE</Badge>
             </div>
          </div>
        </section>

        <section className="pt-8 border-t border-white/5 text-center">
           <h2 className="font-headline text-2xl text-white/20">Fortaleza Tourist Guide</h2>
           <p className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase mt-2">v1.1.0 Premium Core</p>
        </section>
      </div>

      <BottomNav lang={language} />
    </div>
  );
}
