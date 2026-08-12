'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { useVelaStore } from '@/lib/store';
import { ATTRACTIONS } from '@/lib/data';
import { TRANSLATIONS } from '@/lib/i18n';
import BottomNav from '@/components/BottomNav';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Search, Star, MapPin, Heart, Settings, MessageSquare, Trophy } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import placeholderData from '@/app/lib/placeholder-images.json';

const APP_LOGO = "https://i.ibb.co/gLRCXsZC/draguinho.jpg";

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
    <Card className="group relative overflow-hidden border-0 bg-card/20 rounded-[2.5rem] h-[450px] shadow-2xl transition-all hover:shadow-primary/10">
      <Link href={`/attraction/${attraction.id}`} className="absolute inset-0 z-0">
        <Image
          src={attraction.imageUrl}
          alt={attraction.title[language]}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
          data-ai-hint={getHint(attraction.imageUrl)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </Link>
      
      <button 
        onClick={(e) => { e.preventDefault(); toggleFavorite(attraction.id); }}
        className="absolute top-6 right-6 z-10 glass p-4 rounded-full hover:scale-110 transition-all active:scale-95 shadow-lg"
      >
        <Heart className={cn("w-6 h-6", isFav ? "fill-primary text-primary" : "text-white")} />
      </button>

      <div className="absolute bottom-0 left-0 right-0 p-8 z-10 pointer-events-none">
        <Badge className="mb-4 bg-primary text-primary-foreground font-bold tracking-[0.2em] text-[10px] uppercase px-4 py-1">
          {translatedCategory}
        </Badge>
        <h2 className="font-headline text-4xl text-white mb-3 leading-tight tracking-tight drop-shadow-lg">{attraction.title[language]}</h2>
        <div className="flex items-center gap-6 text-white/80 text-sm font-medium">
          <span className="flex items-center gap-2 drop-shadow-md"><Star className="w-5 h-5 text-yellow-400 fill-current" /> {attraction.rating}</span>
          <span className="flex items-center gap-2 drop-shadow-md"><MapPin className="w-5 h-5 text-primary" /> Fortaleza</span>
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

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 px-6 pt-12 pb-8 hud-gradient backdrop-blur-md">
        <div className="flex justify-between items-start mb-8">
          <div className="flex items-center gap-5">
            <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-primary/40 shadow-xl shadow-primary/20 bg-card rotate-3">
              <Image src={APP_LOGO} alt="Logo" fill className="object-cover" priority />
            </div>
            <div>
              <h1 className="font-headline text-3xl mb-1 text-white leading-tight font-bold">{t.welcome}</h1>
              <p className="text-primary text-[10px] tracking-[0.3em] uppercase font-black opacity-80">{t.subtitle}</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Link href="/badges" className="glass p-3 rounded-2xl hover:bg-primary/20 transition-all active:scale-90 relative">
              <Trophy className="w-6 h-6 text-white" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-ping" />
            </Link>
            <Link href="/settings" className="glass p-3 rounded-2xl hover:bg-primary/20 transition-all active:scale-90">
              <Settings className="w-6 h-6 text-white" />
            </Link>
          </div>
        </div>
        
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input 
            placeholder={t.search}
            className="pl-12 h-14 bg-white/5 border-white/10 rounded-2xl focus:ring-primary focus:border-primary text-white text-lg placeholder:text-white/20"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex gap-3 mt-8 overflow-x-auto no-scrollbar pb-2">
          {categories.map((cat) => (
            <Badge
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              className={cn(
                "cursor-pointer px-6 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap",
                activeCategory === cat 
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20" 
                  : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white"
              )}
              onClick={() => setActiveCategory(cat)}
            >
              {(categoryMap as any)[cat]}
            </Badge>
          ))}
        </div>
      </header>

      <section className="px-6 grid gap-8 pb-32 mt-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
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
        {filteredAttractions.length === 0 && (
          <div className="py-20 text-center space-y-4 opacity-40">
            <Search className="w-16 h-16 mx-auto mb-4" />
            <p className="font-bold uppercase tracking-widest text-xs">No results found</p>
          </div>
        )}
      </section>

      <BottomNav lang={language} />
    </div>
  );
}
