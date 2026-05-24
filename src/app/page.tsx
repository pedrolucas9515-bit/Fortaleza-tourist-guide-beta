
'use client';

import { useState } from 'react';
import { useVelaStore } from '@/lib/store';
import { ATTRACTIONS } from '@/lib/data';
import { TRANSLATIONS } from '@/lib/i18n';
import BottomNav from '@/components/BottomNav';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Search, Star, MapPin, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import placeholderData from '@/app/lib/placeholder-images.json';

export default function HomePage() {
  const { language, favorites, toggleFavorite, isLoaded } = useVelaStore();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [search, setSearch] = useState('');
  
  if (!isLoaded) return <div className="h-screen flex items-center justify-center bg-background"><div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" /></div>;

  const t = TRANSLATIONS[language];
  const categories = ['All', 'Beaches', 'Culture', 'Historical Places', 'Parks'];

  const filteredAttractions = ATTRACTIONS.filter(a => {
    const matchesCategory = activeCategory === 'All' || a.category === activeCategory;
    const matchesSearch = a.title.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getHint = (url: string) => {
    return placeholderData.placeholderImages.find(img => img.imageUrl === url)?.imageHint || 'fortaleza tourism';
  };

  return (
    <div className="min-h-screen">
      {/* HUD Header */}
      <header className="sticky top-0 z-40 px-6 pt-12 pb-6 hud-gradient backdrop-blur-md">
        <h1 className="font-headline text-4xl mb-1">{t.welcome}</h1>
        <p className="text-muted-foreground text-sm tracking-widest uppercase">{t.subtitle}</p>
        
        <div className="relative mt-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder={t.search}
            className="pl-10 h-12 bg-white/5 border-white/10 rounded-xl focus:ring-primary"
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
                "cursor-pointer px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all",
                activeCategory === cat ? "bg-primary text-primary-foreground" : "bg-white/5 border-white/10 hover:bg-white/10"
              )}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </Badge>
          ))}
        </div>
      </header>

      {/* Attractions Grid */}
      <section className="px-6 grid gap-6 pb-24">
        {filteredAttractions.map((attraction) => {
          const isFav = favorites.includes(attraction.id);
          return (
            <Card key={attraction.id} className="group relative overflow-hidden border-0 bg-transparent rounded-3xl h-[400px]">
              <Link href={`/attraction/${attraction.id}`} className="absolute inset-0 z-0">
                <Image
                  src={attraction.imageUrl}
                  alt={attraction.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  data-ai-hint={getHint(attraction.imageUrl)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1315] via-transparent to-transparent opacity-80" />
              </Link>
              
              <button 
                onClick={(e) => { e.preventDefault(); toggleFavorite(attraction.id); }}
                className="absolute top-4 right-4 z-10 glass p-3 rounded-full hover:scale-110 transition-transform active:scale-95"
              >
                <Heart className={cn("w-5 h-5", isFav ? "fill-primary text-primary" : "text-white")} />
              </button>

              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 pointer-events-none">
                <Badge className="mb-2 bg-primary/20 text-primary backdrop-blur-sm border-0 font-bold tracking-widest text-[10px] uppercase">
                  {attraction.category}
                </Badge>
                <h2 className="font-headline text-3xl text-white mb-2">{attraction.title}</h2>
                <div className="flex items-center gap-4 text-white/80 text-sm">
                  <span className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-500 fill-current" /> {attraction.rating}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-primary" /> Fortaleza</span>
                </div>
              </div>
            </Card>
          );
        })}
      </section>

      <BottomNav lang={language} />
    </div>
  );
}
