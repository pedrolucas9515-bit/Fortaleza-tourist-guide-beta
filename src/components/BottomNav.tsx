'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Map, Utensils, Heart, Info, Building } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TRANSLATIONS } from '@/lib/i18n';
import { Language } from '@/lib/types';

export default function BottomNav({ lang }: { lang: Language }) {
  const pathname = usePathname();
  const t = TRANSLATIONS[lang];

  const items = [
    { href: '/', icon: Home, label: t.explore },
    { href: '/map', icon: Map, label: t.map },
    { href: '/guide', icon: Info, label: t.guide },
    { href: '/restaurants', icon: Utensils, label: t.restaurants },
    { href: '/hotels', icon: Building, label: t.hotels },
    { href: '/favorites', icon: Heart, label: t.favorites },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-2xl border-t border-border/50 safe-bottom">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto px-1">
        {items.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full transition-all duration-300",
                isActive ? "text-primary scale-110" : "text-muted-foreground hover:text-foreground"
              )}
            >
              <item.icon className={cn("w-4 h-4 mb-1", isActive && "fill-current")} />
              <span className={cn("text-[7px] font-bold uppercase tracking-tighter transition-opacity", isActive ? "opacity-100" : "opacity-60")}>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
