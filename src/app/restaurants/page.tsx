'use client';

import React, { useState, useMemo } from 'react';
import { useVelaStore } from '@/lib/store';
import { RESTAURANTS } from '@/lib/data';
import { TRANSLATIONS } from '@/lib/i18n';
import BottomNav from '@/components/BottomNav';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Search, Star, MapPin, Clock, DollarSign, Utensils, Settings, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import placeholderData from '@/app/lib/placeholder-images.json';

const APP_LOGO = "https://i.ibb.co/gLRCXsZC/draguinho.jpg";

const RestaurantCard = React.memo(({ res, language, t }: { res: any, language: any, t: any }) => {
  const categoryKey = res.category.charAt(0).toLowerCase() + res.category.slice(1).replace(' ', '');
  const translatedCategory = (t as any)[categoryKey] || res.category;

  const getHint = (url: string) => {
    return placeholderData.placeholderImages.find(img => img.imageUrl === url)?.imageHint || 'restaurant food';
  };

  const priceLevelKey = `priceLevel${res.priceRange.length}`;
  const priceDescription = (t as any)[priceLevelKey] || '';

  return (
    <Link href={`/restaurant/${res.id}`}>
      <Card className="group overflow-hidden border-border bg-card/40 rounded-[2rem] transition-all hover:border-primary/50 shadow-lg">
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={res.imageUrl}
            alt={res.name[language]}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
            data-ai-hint={getHint(res.imageUrl)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 border border-white/10">
            <Star className="w-3 h-3 text-yellow-500 fill-current" />
            <span className="text-xs font-bold text-white">{res.rating}</span>
          </div>
          <div className="absolute bottom-4 left-4">
            <Badge className="bg-primary text-primary-foreground font-black text-[9px] uppercase tracking-[0.2em] px-3 py-1">
              {translatedCategory}
            </Badge>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-headline text-2xl text-foreground font-bold tracking-tight">{res.name[language]}</h3>
            <div className="flex flex-col items-end gap-1">
              <div className="flex items-center text-primary gap-0.5">
                {[...Array(4)].map((_, i) => (
                  <DollarSign key={i} className={cn("w-3 h-3", i >= res.priceRange.length && "opacity-20")} />
                ))}
              </div>
              <span className="text-[8px] font-black uppercase text-primary/60 tracking-wider">
                {priceDescription}
              </span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-6 line-clamp-2 leading-relaxed font-medium">
            {res.description[language]}
          </p>
          <div className="flex flex-wrap gap-y-3 gap-x-6 text-[9px] uppercase tracking-[0.2em] font-black text-foreground/40 border-t border-white/5 pt-4">
            <span className="flex items-center gap-2"><Utensils className="w-3.5 h-3.5 text-primary" /> {res.cuisine[language]}</span>
            <span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-primary" /> {res.openingHours[language]}</span>
            <span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-primary" /> Fortaleza</span>
          </div>
        </div>
      </Card>
    </Link>
  );
});

RestaurantCard.displayName = 'RestaurantCard';

export default function RestaurantsPage() {
  const { language, isLoaded } = useVelaStore();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [search, setSearch] = useState('');
  
  const t = useMemo(() => TRANSLATIONS[language], [language]);
  const categories = useMemo(() => ['All', 'Seafood', 'Brazilian Food', 'Cafés', 'Beach Restaurants', 'Fine Dining', 'Fast Food', 'Italian'], []);

  const filteredRestaurants = useMemo(() => {
    return RESTAURANTS.filter(r => {
      const matchesCategory = activeCategory === 'All' || r.category === activeCategory;
      const matchesSearch = r.name[language].toLowerCase().includes(search.toLowerCase()) || 
                            r.cuisine[language].toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search, language]);

  const categoryMap = useMemo(() => ({
    'All': t.all,
    'Seafood': t.seafood,
    'Brazilian Food': t.brazilianFood,
    'Cafés': t.cafes,
    'Beach Restaurants': t.beachRestaurants,
    'Fine Dining': t.fineDining,
    'Fast Food': t.fastFood,
    'Italian': t.italian
  }), [t]);

  if (!isLoaded) return <div className="h-screen flex items-center justify-center bg-background"><div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" /></div>;

  return (
    <div className="min-h-screen bg-background pb-32">
      <header className="sticky top-0 z-40 px-6 pt-12 pb-6 hud-gradient backdrop-blur-md">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-lg bg-card/40">
              <Image src={APP_LOGO} alt="Fortaleza Tourist Guide Logo" fill className="object-cover" priority />
            </div>
            <div>
              <h1 className="font-headline text-3xl mb-0.5 text-foreground font-bold">{t.restaurants}</h1>
              <p className="text-primary text-[9px] tracking-[0.3em] uppercase font-black opacity-60">Gastronomic Guide</p>
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
        </div>
        
        <div className="relative mt-8 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input 
            placeholder={t.searchRestaurants}
            className="pl-12 h-14 bg-white/5 border-white/10 rounded-2xl focus:ring-primary text-foreground text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex gap-2 mt-8 overflow-x-auto no-scrollbar pb-2">
          {categories.map((cat) => (
            <Badge
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              className={cn(
                "cursor-pointer px-5 py-2 rounded-xl text-[9px] font-black uppercase tracking-[0.15em] transition-all whitespace-nowrap",
                activeCategory === cat 
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20" 
                  : "bg-white/5 border-white/10 text-foreground/60 hover:bg-white/10 hover:text-white"
              )}
              onClick={() => setActiveCategory(cat)}
            >
              {(categoryMap as any)[cat]}
            </Badge>
          ))}
        </div>
      </header>

      <section className="px-6 grid gap-8 mt-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        {filteredRestaurants.map((res) => (
          <RestaurantCard key={res.id} res={res} language={language} t={t} />
        ))}
        {filteredRestaurants.length === 0 && (
          <div className="py-20 text-center opacity-30 flex flex-col items-center gap-4">
            <Utensils className="w-12 h-12" />
            <p className="text-[10px] uppercase tracking-widest font-black">No restaurants found</p>
          </div>
        )}
      </section>

      <BottomNav lang={language} />
    </div>
  );
}
