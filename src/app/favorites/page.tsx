
'use client';

import { useVelaStore } from '@/lib/store';
import { ATTRACTIONS } from '@/lib/data';
import { TRANSLATIONS } from '@/lib/i18n';
import BottomNav from '@/components/BottomNav';
import { Card } from '@/components/ui/card';
import { Heart, ArrowRight, Settings, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

const APP_LOGO = "https://i.ibb.co/gLRCXsZC/draguinho.jpg";

export default function FavoritesPage() {
  const { language, favorites, isLoaded } = useVelaStore();

  if (!isLoaded) return null;
  const t = TRANSLATIONS[language];
  const favoriteAttractions = ATTRACTIONS.filter(a => favorites.includes(a.id));

  return (
    <div className="min-h-screen bg-background">
      <header className="px-6 pt-12 pb-6 hud-gradient sticky top-0 z-20 flex justify-between items-start">
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-primary/30 shadow-lg bg-black/40">
            <Image src={APP_LOGO} alt="Vela Logo" fill className="object-cover" />
          </div>
          <div>
            <h1 className="font-headline text-3xl mb-0.5 text-foreground">{t.favorites}</h1>
            <p className="text-muted-foreground text-[10px] tracking-widest uppercase font-bold">Saved by You</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Link href="/settings" className="glass p-3 rounded-full hover:bg-primary/10 transition-colors active:scale-90">
            <Settings className="w-5 h-5 text-foreground" />
          </Link>
          <Link href="/feedback" className="glass p-3 rounded-full hover:bg-primary/10 transition-colors active:scale-90">
            <MessageSquare className="w-5 h-5 text-foreground" />
          </Link>
        </div>
      </header>

      <div className="px-6 pb-32">
        {favoriteAttractions.length === 0 ? (
          <div className="flex flex-col items-center justify-center pt-32 text-center opacity-50">
             <Heart className="w-16 h-16 mb-6 text-muted-foreground" />
             <p className="text-muted-foreground font-bold uppercase tracking-widest text-xs">{t.noFavorites}</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {favoriteAttractions.map(attraction => {
              const catKey = attraction.category.toLowerCase().replace(' ', '');
              const translatedCategory = (t as any)[catKey] || attraction.category;
              return (
                <Link key={attraction.id} href={`/attraction/${attraction.id}`}>
                  <Card className="flex h-32 overflow-hidden bg-card/40 border-border rounded-2xl group transition-all hover:border-primary/50">
                    <div className="relative w-32 h-full overflow-hidden">
                      <Image src={attraction.imageUrl} alt="" fill className="object-cover group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex-1 p-4 flex flex-col justify-between">
                      <div>
                        <Badge className="mb-1 text-[8px] tracking-widest bg-primary/20 text-primary border-0 font-bold uppercase">
                          {translatedCategory}
                        </Badge>
                        <h3 className="font-headline text-xl text-foreground truncate">{attraction.title[language]}</h3>
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold">
                         <span>Explore Spot</span>
                         <ArrowRight className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        )}
      </div>

      <BottomNav lang={language} />
    </div>
  );
}
