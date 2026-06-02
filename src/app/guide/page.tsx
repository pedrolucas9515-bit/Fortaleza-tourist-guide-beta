'use client';

import { useVelaStore } from '@/lib/store';
import { TRANSLATIONS } from '@/lib/i18n';
import BottomNav from '@/components/BottomNav';
import { Card } from '@/components/ui/card';
import { Car, ShieldAlert, Sparkles, Music, ChevronRight, Settings } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function GuidePage() {
  const { language, isLoaded } = useVelaStore();

  if (!isLoaded) return null;
  const t = TRANSLATIONS[language];
  const APP_LOGO = "https://i.pinimg.com/736x/46/26/75/462675165eeac26a77e0d23157de6f09.jpg";

  const guideSections = [
    {
      href: '/transportation',
      icon: Car,
      title: t.transportation,
      desc: t.transportDesc,
      color: 'text-blue-400',
      bg: 'bg-blue-400/10'
    },
    {
      href: '/culture',
      icon: Music,
      title: t.cultureEvents,
      desc: t.cultureDesc,
      color: 'text-purple-400',
      bg: 'bg-purple-400/10'
    },
    {
      href: '/safety',
      icon: ShieldAlert,
      title: t.safety,
      desc: t.safetyDesc,
      color: 'text-red-400',
      bg: 'bg-red-400/10'
    },
    {
      href: '/facts',
      icon: Sparkles,
      title: t.facts,
      desc: t.factsDesc,
      color: 'text-yellow-400',
      bg: 'bg-yellow-400/10'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f1315]">
      <header className="px-6 pt-12 pb-6 hud-gradient sticky top-0 z-20 flex justify-between items-start">
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-primary/30 shadow-lg bg-black/40">
            <Image src={APP_LOGO} alt="Vela Logo" fill className="object-cover" />
          </div>
          <div>
            <h1 className="font-headline text-3xl mb-0.5 text-white">{t.guide}</h1>
            <p className="text-muted-foreground text-[10px] tracking-widest uppercase font-bold">Local Insights</p>
          </div>
        </div>
        <Link href="/settings" className="glass p-3 rounded-full hover:bg-white/10 transition-colors">
          <Settings className="w-5 h-5 text-white" />
        </Link>
      </header>

      <div className="px-6 space-y-4 pb-32">
        {guideSections.map((section, idx) => (
          <Link key={idx} href={section.href}>
            <Card className="glass border-white/5 p-6 rounded-3xl flex items-center gap-6 group hover:border-white/20 transition-all">
              <div className={`p-4 rounded-2xl ${section.bg}`}>
                <section.icon className={`w-8 h-8 ${section.color}`} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-headline text-white mb-1">{section.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{section.desc}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-primary transition-colors" />
            </Card>
          </Link>
        ))}
      </div>

      <BottomNav lang={language} />
    </div>
  );
}
