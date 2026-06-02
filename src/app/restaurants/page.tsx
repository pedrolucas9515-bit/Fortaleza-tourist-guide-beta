
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

const APP_LOGO = "https://i.ibb.co/gLRCXsZC/draguinho.jpg";

const RestaurantCard = React.memo(({ res, language, t }: { res: any, language: any, t: any }) => {
  const categoryKey = res.category.charAt(0).toLowerCase() + res.category.slice(1).replace(' ', '');
  const translatedCategory = (t as any)[categoryKey] || res.category;

  return (
    <Link href={`/restaurant/${res.id}`}>
      <Card className="group overflow-hidden border-border bg-card/40 rounded-3xl transition-all hover:border-primary/50">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={res.imageUrl}
            alt={res.name[language]}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
          />
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
            <Star className="w-3 h-3 text-yellow-500 fill-current" />
            <span className="text-xs font-bold text-white">{res.rating}</span>
          </div>
          <div className="absolute bottom-4 left-4">
            <Badge className="bg-primary text-primary-foreground font-bold text-[10px] uppercase tracking-widest">
              {translatedCategory}
            </Badge>
          </div>
        </div>
        
        <div className="p-5">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-headline text-2xl text-foreground">{res.name[language]}</h3>
            <div className="flex items-center text-primary">
              {[...Array(4)].map((_, i) => (
                <DollarSign key={i} className={cn("w-3 h-3", i >= res.priceRange.length && "opacity-30")} />
              ))}
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed font-medium">
            {res.description[language]}
          </p>
          <div className="flex flex-wrap gap-y-2 gap-x-4 text-[10px] uppercase tracking-widest font-bold text-foreground/50">
            <span className="flex items-center gap-1.5"><Utensils className="w-3 h-3 text-primary" /> {res.cuisine[language]}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-3 h-3 text-primary" /> {res.openingHours[language]}</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3 text-primary" /> Fortaleza</span>
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
  const categories = useMemo(() => ['All', 'Seafood', 'Brazilian Food', 'Cafés', 'Beach Restaurants', 'Fine Dining', 'Fast Food'], []);

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
    'Fast Food': t.fastFood
  }), [t]);

  if (!isLoaded) return <div className="h-screen flex items-center justify-center bg-background"><div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" /></div>;

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 px-6 pt-12 pb-6 hud-gradient backdrop-blur-md">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-primary/30 shadow-lg bg-black/40">
              <Image src={APP_LOGO} alt="Fortaleza Tourist Guide Logo" fill className="object-cover" priority />
            </div>
            <div>
              <h1 className="font-headline text-3xl mb-0.5 text-foreground">{t.restaurants}</h1>
              <p className="text-muted-foreground text-[10px] tracking-widest uppercase font-bold">Gastronomic Guide</p>
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
        </div>
        
        <div className="relative mt-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder={t.searchRestaurants}
            className="pl-10 h-12 bg-card/40 border-border rounded-xl focus:ring-primary text-foreground"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex gap-2 mt-6 overflow-x-auto no-scrollbar pb-2">
          {categories.map((cat) => (
            <Badge
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              className={cn(
                "cursor-pointer px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all whitespace-nowrap",
                activeCategory === cat ? "bg-primary text-primary-foreground border-primary" : "bg-card/40 border-border text-foreground hover:bg-primary/10"
              )}
              onClick={() => setActiveCategory(cat)}
            >
              {(categoryMap as any)[cat]}
            </Badge>
          ))}
        </div>
      </header>

      <section className="px-6 grid gap-6 pb-32 mt-4">
        {filteredRestaurants.map((res) => (
          <RestaurantCard key={res.id} res={res} language={language} t={t} />
        ))}
      </section>

      <BottomNav lang={language} />
    </div>
  );
}
