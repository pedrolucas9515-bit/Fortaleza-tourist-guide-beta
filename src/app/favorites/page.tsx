
'use client';

import { useVelaStore } from '@/lib/store';
import { ATTRACTIONS } from '@/lib/data';
import { TRANSLATIONS } from '@/lib/i18n';
import BottomNav from '@/components/BottomNav';
import { Card } from '@/components/ui/card';
import { Heart, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export default function FavoritesPage() {
  const { language, favorites, isLoaded } = useVelaStore();

  if (!isLoaded) return null;
  const t = TRANSLATIONS[language];
  const favoriteAttractions = ATTRACTIONS.filter(a => favorites.includes(a.id));

  return (
    <div className="min-h-screen bg-[#0f1315]">
      <header className="px-6 pt-12 pb-6 hud-gradient sticky top-0 z-20">
        <h1 className="font-headline text-3xl mb-1 text-white">{t.favorites}</h1>
        <p className="text-muted-foreground text-xs tracking-widest uppercase">Saved by You</p>
      </header>

      <div className="px-6 pb-32">
        {favoriteAttractions.length === 0 ? (
          <div className="flex flex-col items-center justify-center pt-32 text-center opacity-50">
             <Heart className="w-16 h-16 mb-6 text-muted-foreground" />
             <p className="text-muted-foreground">{t.noFavorites}</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {favoriteAttractions.map(attraction => (
              <Link key={attraction.id} href={`/attraction/${attraction.id}`}>
                <Card className="flex h-32 overflow-hidden glass border-white/10 rounded-2xl group transition-all hover:border-primary/50">
                  <div className="relative w-32 h-full overflow-hidden">
                    <Image src={attraction.imageUrl} alt="" fill className="object-cover group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex-1 p-4 flex flex-col justify-between">
                    <div>
                      <Badge className="mb-1 text-[8px] tracking-widest bg-primary/20 text-primary border-0 font-bold uppercase">{attraction.category}</Badge>
                      <h3 className="font-headline text-xl text-white truncate">{attraction.title}</h3>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground uppercase tracking-widest">
                       <span>Explore Spot</span>
                       <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>

      <BottomNav lang={language} />
    </div>
  );
}
