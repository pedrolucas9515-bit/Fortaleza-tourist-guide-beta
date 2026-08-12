'use client';

import { useMemo } from 'react';
import { useVelaStore, BADGES } from '@/lib/store';
import { TRANSLATIONS } from '@/lib/i18n';
import BottomNav from '@/components/BottomNav';
import { Card } from '@/components/ui/card';
import { Trophy, Lock, Zap, CheckCircle2, Settings, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

const APP_LOGO = "https://i.ibb.co/gLRCXsZC/draguinho.jpg";

export default function BadgesPage() {
  const { language, progress, isLoaded } = useVelaStore();

  const t = useMemo(() => TRANSLATIONS[language], [language]);

  if (!isLoaded) return <div className="h-screen flex items-center justify-center bg-background"><div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" /></div>;

  const getProgressData = (badgeId: string, target: number) => {
    let current = 0;
    switch (badgeId) {
      case 'tourist-attractions': current = progress.visitedAttractions.length; break;
      case 'restaurants': current = progress.visitedRestaurants.length; break;
      case 'hotels': current = progress.visitedHotels.length; break;
      case 'transport': current = progress.viewedTransport ? 1 : 0; break;
      case 'cultural-spaces': current = progress.visitedCultural.length; break;
      case 'local-curiosities': current = progress.viewedCuriosities ? 1 : 0; break;
      case 'safety-guidelines': current = progress.viewedSafety ? 1 : 0; break;
      case 'cearense-slang': current = progress.viewedSlang ? 1 : 0; break;
    }
    const percent = Math.min((current / target) * 100, 100);
    const isUnlocked = progress.unlockedBadgeIds.includes(badgeId);
    return { current, percent, isUnlocked };
  };

  return (
    <div className="min-h-screen bg-background pb-32">
      <header className="px-6 pt-12 pb-6 hud-gradient sticky top-0 z-20 flex justify-between items-start backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-lg bg-card/40">
            <Image src={APP_LOGO} alt="Vela Logo" fill className="object-cover" />
          </div>
          <div>
            <h1 className="font-headline text-3xl mb-0.5 text-foreground font-bold flex items-center gap-3">
              {t.badges} <Trophy className="w-5 h-5 text-primary animate-pulse" />
            </h1>
            <p className="text-primary text-[9px] tracking-[0.3em] uppercase font-black opacity-60">{t.badgeProgress}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Link href="/settings" className="glass p-3 rounded-2xl hover:bg-primary/20 transition-all active:scale-90">
            <Settings className="w-5 h-5 text-foreground" />
          </Link>
          <Link href="/feedback" className="glass p-3 rounded-2xl hover:bg-primary/20 transition-all active:scale-90">
            <MessageSquare className="w-5 h-5 text-foreground" />
          </Link>
        </div>
      </header>

      <div className="px-6 grid grid-cols-1 gap-6 mt-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        {BADGES.map((badge) => {
          const { current, percent, isUnlocked } = getProgressData(badge.id, badge.target);
          return (
            <Card key={badge.id} className={cn(
              "p-6 rounded-[2rem] border transition-all duration-500 overflow-hidden relative group",
              isUnlocked ? "bg-primary/10 border-primary/40 shadow-lg shadow-primary/10 scale-[1.02]" : "bg-white/5 border-white/10 opacity-70"
            )}>
              <div className="flex gap-6 items-center">
                <div className="relative w-20 h-20 shrink-0">
                  <Image 
                    src={badge.imagePath} 
                    alt={badge.name[language]} 
                    fill 
                    className={cn(
                      "object-contain transition-all duration-700",
                      isUnlocked ? "grayscale-0 scale-110 drop-shadow-[0_0_15px_rgba(var(--primary),0.5)]" : "grayscale opacity-30 scale-90"
                    )}
                  />
                  {!isUnlocked && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Lock className="w-8 h-8 text-white/20" />
                    </div>
                  )}
                </div>

                <div className="flex-1 space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg text-white tracking-tight">{badge.name[language]}</h3>
                    {isUnlocked ? (
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    ) : (
                      <span className="text-[10px] font-black uppercase text-primary/40">{current} / {badge.target}</span>
                    )}
                  </div>
                  <p className="text-[10px] text-white/50 leading-tight font-medium">{badge.description[language]}</p>
                  
                  <div className="pt-2">
                    <Progress value={percent} className="h-1.5 bg-white/5" />
                  </div>
                  
                  <div className="flex justify-between items-center pt-2">
                    <span className={cn(
                      "text-[9px] font-black uppercase tracking-widest",
                      isUnlocked ? "text-primary" : "text-white/20"
                    )}>
                      {isUnlocked ? `🏆 ${t.unlocked}` : t.locked}
                    </span>
                    {isUnlocked && <Zap className="w-3 h-3 text-primary animate-pulse" />}
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
