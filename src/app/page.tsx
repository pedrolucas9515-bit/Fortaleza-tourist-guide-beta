'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { useVelaStore } from '@/lib/store';
import { ATTRACTIONS } from '@/lib/data';
import { TRANSLATIONS } from '@/lib/i18n';
import BottomNav from '@/components/BottomNav';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Search, Star, MapPin, Heart, Settings, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import placeholderData from '@/app/lib/placeholder-images.json';

const AttractionCard = React.memo(({ 
  attraction, 
  language, 
  isFav, 
  toggleFavorite, 
  t 
}: { 
  attraction: any, 
  language: any, 
  isFav: boolean, 
  toggleFavorite: (id: string) => void,
  t: any
}) => {
  const getHint = useCallback((url: string) => {
    return placeholderData.placeholderImages.find(img => img.imageUrl === url)?.imageHint || 'fortaleza tourism';
  }, []);

  const catKey = attraction.category.toLowerCase().replace(' ', '');
  const translatedCategory = (t as any)[catKey] || attraction.category;

  return (
    <Card className="group relative overflow-hidden border-0 bg-transparent rounded-3xl h-[400px]">
      <Link href={`/attraction/${attraction.id}`} className="absolute inset-0 z-0">
        <Image
          src={attraction.imageUrl}
          alt={attraction.title[language]}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
          data-ai-hint={getHint(attraction.imageUrl)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
      </Link>
      
      <button 
        onClick={(e) => { e.preventDefault(); toggleFavorite(attraction.id); }}
        className="absolute top-4 right-4 z-10 glass p-3 rounded-full hover:scale-110 transition-transform active:scale-95"
      >
        <Heart className={cn("w-5 h-5", isFav ? "fill-primary text-primary" : "text-foreground")} />
      </button>

      <div className="absolute bottom-0 left-0 right-0 p-6 z-10 pointer-events-none">
        <Badge className="mb-2 bg-primary/20 text-primary backdrop-blur-sm border-0 font-bold tracking-widest text-[10px] uppercase">
          {translatedCategory}
        </Badge>
        <h2 className="font-headline text-3xl text-foreground mb-2 leading-tight">{attraction.title[language]}</h2>
        <div className="flex items-center gap-4 text-foreground/80 text-sm">
          <span className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-500 fill-current" /> {attraction.rating}</span>
          <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-primary" /> Fortaleza</span>
        </div>
      </div>
    </Card>
  );
});

AttractionCard.displayName = 'AttractionCard';

export default function HomePage() {
  const { language, favorites, toggleFavorite, isLoaded } = useVelaStore();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [search, setSearch] = useState('');
  
  const t = useMemo(() => TRANSLATIONS[language], [language]);
  const categories = useMemo(() => ['All', 'Beaches', 'Culture', 'Historical Places', 'Parks'], []);

  const filteredAttractions = useMemo(() => {
    return ATTRACTIONS.filter(a => {
      const matchesCategory = activeCategory === 'All' || a.category === activeCategory;
      const matchesSearch = a.title[language].toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search, language]);

  const categoryMap = useMemo(() => ({
    'All': t.all,
    'Beaches': t.beaches,
    'Culture': t.culture,
    'Historical Places': t.historicalPlaces,
    'Parks': t.parks
  }), [t]);

  if (!isLoaded) return <div className="h-screen flex items-center justify-center bg-background"><div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" /></div>;

  const APP_LOGO = "https://i.pinimg.com/736x/46/26/75/462675165eeac26a77e0d23157de6f09.jpg";

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 px-6 pt-12 pb-6 hud-gradient backdrop-blur-md">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30 shadow-lg shadow-primary/10 bg-card">
              <Image src={APP_LOGO} alt="Fortaleza Tourist Guide Logo" fill className="object-cover" priority />
            </div>
            <div>
              <h1 className="font-headline text-3xl mb-0.5 text-foreground leading-tight">{t.welcome}</h1>
              <p className="text-muted-foreground text-[10px] tracking-[0.2em] uppercase font-bold">{t.subtitle}</p>
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
            placeholder={t.search}
            className="pl-10 h-12 bg-card/60 border-border rounded-xl focus:ring-primary text-foreground"
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
                activeCategory === cat ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border text-foreground hover:bg-primary/10"
              )}
              onClick={() => setActiveCategory(cat)}
            >
              {(categoryMap as any)[cat]}
            </Badge>
          ))}
        </div>
      </header>

      <section className="px-6 grid gap-6 pb-24 mt-4">
        {filteredAttractions.map((attraction) => (
          <AttractionCard 
            key={attraction.id}
            attraction={attraction}
            language={language}
            isFav={favorites.includes(attraction.id)}
            toggleFavorite={toggleFavorite}
            t={t}
          />
        ))}
      </section>

      <BottomNav lang={language} />
    </div>
  );
}
