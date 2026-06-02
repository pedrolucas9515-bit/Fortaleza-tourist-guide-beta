'use client';

import { useVelaStore } from '@/lib/store';
import { TRANSLATIONS } from '@/lib/i18n';
import BottomNav from '@/components/BottomNav';
import { Language } from '@/lib/types';
import { Globe, ArrowLeft, Download, Smartphone, MessageSquare, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function SettingsPage() {
  const { language, updateLanguage, isLoaded } = useVelaStore();
  const router = useRouter();

  if (!isLoaded) return null;
  const t = TRANSLATIONS[language];

  const langs: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'pt', label: 'Português' },
    { code: 'es', label: 'Español' },
    { code: 'fr', label: 'Français' },
  ];

  const APP_LOGO = "https://i.pinimg.com/736x/46/26/75/462675165eeac26a77e0d23157de6f09.jpg";

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

        <section>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 flex items-center gap-2">
            <MessageSquare className="w-4 h-4" /> User Experience
          </h3>
          <Link href="/feedback">
            <div className="flex items-center justify-between p-5 glass border-border bg-card/40 rounded-[1.5rem] hover:bg-primary/10 transition-colors">
              <div className="flex-1 pr-4">
                <h4 className="text-sm font-bold text-foreground uppercase tracking-widest">{t.feedback}</h4>
                <p className="text-xs text-muted-foreground font-medium line-clamp-1">{t.feedbackDesc}</p>
              </div>
              <ExternalLink className="w-5 h-5 text-primary" />
            </div>
          </Link>
        </section>

        <section>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 flex items-center gap-2">
            <Smartphone className="w-4 h-4" /> Install Application
          </h3>
          <Link href="/download">
            <div className="flex items-center justify-between p-5 glass border-border bg-card/40 rounded-[1.5rem] hover:bg-primary/10 transition-colors">
              <div>
                <h4 className="text-sm font-bold text-foreground uppercase tracking-widest">{t.downloadApp}</h4>
                <p className="text-xs text-muted-foreground font-medium">{t.downloadDesc}</p>
              </div>
              <Download className="w-5 h-5 text-muted-foreground" />
            </div>
          </Link>
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
