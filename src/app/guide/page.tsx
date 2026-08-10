
'use client';

import { useVelaStore } from '@/lib/store';
import { TRANSLATIONS } from '@/lib/i18n';
import BottomNav from '@/components/BottomNav';
import { Card } from '@/components/ui/card';
import { Car, ShieldAlert, Sparkles, Music, ChevronRight, Settings, MessageSquare, Languages, Lightbulb, Compass } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const APP_LOGO = "https://i.ibb.co/gLRCXsZC/draguinho.jpg";

export default function GuidePage() {
  const { language, isLoaded } = useVelaStore();

  if (!isLoaded) return <div className="h-screen flex items-center justify-center bg-background"><div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" /></div>;
  
  const t = TRANSLATIONS[language];

  const guideSections = [
    {
      href: '/transportation',
      icon: Car,
      title: t.transportation,
      desc: t.transportDesc,
      color: 'text-blue-400',
      bg: 'bg-blue-400/20'
    },
    {
      href: '/culture',
      icon: Music,
      title: t.cultureEvents,
      desc: t.cultureDesc,
      color: 'text-purple-400',
      bg: 'bg-purple-400/20'
    },
    {
      href: '/safety',
      icon: ShieldAlert,
      title: t.safety,
      desc: t.safetyDesc,
      color: 'text-red-400',
      bg: 'bg-red-400/20'
    },
    {
      href: '/facts',
      icon: Sparkles,
      title: t.facts,
      desc: t.factsDesc,
      color: 'text-yellow-400',
      bg: 'bg-yellow-400/20'
    },
    {
      href: '/slang',
      icon: Languages,
      title: t.cearaSlang,
      desc: t.slangDesc,
      color: 'text-emerald-400',
      bg: 'bg-emerald-400/20'
    },
    {
      href: '/feedback',
      icon: MessageSquare,
      title: t.feedback,
      desc: t.feedbackDesc,
      color: 'text-primary',
      bg: 'bg-primary/20'
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-32">
      <header className="px-6 pt-12 pb-6 hud-gradient sticky top-0 z-20 flex justify-between items-start backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-lg bg-card/40">
            <Image src={APP_LOGO} alt="Vela Logo" fill className="object-cover" />
          </div>
          <div>
            <h1 className="font-headline text-3xl mb-0.5 text-foreground font-bold">{t.guide}</h1>
            <p className="text-primary text-[9px] tracking-[0.3em] uppercase font-black opacity-60">Local Insights</p>
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

      <div className="px-6 space-y-5 mt-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="bg-primary/5 border border-primary/20 p-6 rounded-[2rem] flex items-center gap-5 mb-8">
           <div className="bg-primary/20 p-4 rounded-2xl text-primary">
             <Compass className="w-8 h-8 animate-spin-slow" />
           </div>
           <div>
             <h3 className="text-sm font-black uppercase tracking-widest text-primary mb-1">Knowledge Hub</h3>
             <p className="text-xs text-white/60 font-medium leading-relaxed">Everything you need to navigate Fortaleza like a true local.</p>
           </div>
        </div>

        {guideSections.map((section, idx) => (
          <Link key={idx} href={section.href}>
            <Card className="glass border-white/5 p-6 rounded-[2rem] flex items-center gap-6 group hover:border-primary/50 transition-all shadow-xl active:scale-[0.98]">
              <div className={`p-5 rounded-2xl ${section.bg} shrink-0 transition-transform group-hover:scale-110 duration-500`}>
                <section.icon className={`w-8 h-8 ${section.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-headline text-white font-bold mb-1 tracking-tight">{section.title}</h3>
                <p className="text-xs text-white/40 leading-relaxed font-medium line-clamp-1">{section.desc}</p>
              </div>
              <div className="bg-white/5 p-2 rounded-full text-white/40 group-hover:text-primary group-hover:bg-primary/10 transition-all">
                <ChevronRight className="w-5 h-5" />
              </div>
            </Card>
          </Link>
        ))}

        <div className="pt-8 text-center opacity-20">
          <Lightbulb className="w-6 h-6 mx-auto mb-2" />
          <p className="text-[8px] uppercase tracking-[0.4em] font-black">Powered by Vela Local Intelligence</p>
        </div>
      </div>

      <BottomNav lang={language} />
    </div>
  );
}
