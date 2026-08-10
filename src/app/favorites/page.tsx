
'use client';

import { useVelaStore } from '@/lib/store';
import { ATTRACTIONS } from '@/lib/data';
import { TRANSLATIONS } from '@/lib/i18n';
import BottomNav from '@/components/BottomNav';
import { Card } from '@/components/ui/card';
import { Heart, ArrowRight, Settings, MessageSquare, Star, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import placeholderData from '@/app/lib/placeholder-images.json';

const APP_LOGO = "https://i.ibb.co/gLRCXsZC/draguinho.jpg";

export default function FavoritesPage() {
  const { language, favorites, isLoaded } = useVelaStore();

  if (!isLoaded) return <div className="h-screen flex items-center justify-center bg-background"><div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" /></div>;
  
  const t = TRANSLATIONS[language];
  const favoriteAttractions = ATTRACTIONS.filter(a => favorites.includes(a.id));

  const getHint = (url: string) => {
    return placeholderData.placeholderImages.find(img => img.imageUrl === url)?.imageHint || 'saved spot';
  };

  return (
    <div className="min-h-screen bg-background pb-32">
      <header className="px-6 pt-12 pb-6 hud-gradient sticky top-0 z-20 flex justify-between items-start backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-lg bg-card/40">
            <Image src={APP_LOGO} alt="Vela Logo" fill className="object-cover" />
          </div>
          <div>
            <h1 className="font-headline text-3xl mb-0.5 text-foreground font-bold">{t.favorites}</h1>
            <p className="text-primary text-[9px] tracking-[0.3em] uppercase font-black opacity-60">Saved by You</p>
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

      <div className="px-6 mt-6">
        {favoriteAttractions.length === 0 ? (
          <div className="flex flex-col items-center justify-center pt-32 text-center opacity-30 animate-in fade-in duration-700">
             <Heart className="w-20 h-20 mb-6 text-muted-foreground opacity-50" />
             <p className="text-muted-foreground font-black uppercase tracking-[0.2em] text-[10px]">{t.noFavorites}</p>
          </div>
        ) : (
          <div className="grid gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {favoriteAttractions.map(attraction => {
              const catKey = attraction.category.toLowerCase().replace(' ', '');
              const translatedCategory = (t as any)[catKey] || attraction.category;
              return (
                <Link key={attraction.id} href={`/attraction/${attraction.id}`}>
                  <Card className="flex h-40 overflow-hidden bg-card/40 border-white/5 rounded-[1.5rem] group transition-all hover:border-primary/50 shadow-xl">
                    <div className="relative w-40 h-full overflow-hidden shrink-0">
                      <Image 
                        src={attraction.imageUrl} 
                        alt="" 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-700" 
                        data-ai-hint={getHint(attraction.imageUrl)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                    </div>
                    <div className="flex-1 p-5 flex flex-col justify-between min-w-0">
                      <div>
                        <Badge className="mb-2 text-[8px] tracking-[0.2em] bg-primary/20 text-primary border-0 font-black uppercase px-2 py-0.5">
                          {translatedCategory}
                        </Badge>
                        <h3 className="font-headline text-xl text-white font-bold truncate tracking-tight">{attraction.title[language]}</h3>
                        <div className="flex items-center gap-4 mt-2 text-[9px] text-white/40 uppercase tracking-widest font-black">
                           <span className="flex items-center gap-1.5"><Star className="w-3 h-3 text-yellow-500 fill-current" /> {attraction.rating}</span>
                           <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3 text-primary" /> Fortaleza</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-[9px] text-primary uppercase tracking-[0.3em] font-black group-hover:translate-x-1 transition-transform">
                         <span>Explore Spot</span>
                         <ArrowRight className="w-4 h-4" />
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
