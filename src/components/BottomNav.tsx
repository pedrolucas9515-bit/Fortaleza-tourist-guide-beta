
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Map, Utensils, Heart, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TRANSLATIONS } from '@/lib/i18n';
import { Language } from '@/lib/types';

export default function BottomNav({ lang }: { lang: Language }) {
  const pathname = usePathname();
  const t = TRANSLATIONS[lang];

  const items = [
    { href: '/', icon: Home, label: t.explore },
    { href: '/map', icon: Map, label: t.map },
    { href: '/restaurants', icon: Utensils, label: t.restaurants },
    { href: '/favorites', icon: Heart, label: t.favorites },
    { href: '/settings', icon: Settings, label: t.settings },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-white/10 safe-bottom">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
        {items.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full transition-colors",
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              <item.icon className={cn("w-5 h-5 mb-1", isActive && "fill-current")} />
              <span className="text-[10px] font-medium uppercase tracking-widest">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
