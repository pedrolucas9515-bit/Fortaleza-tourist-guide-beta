
'use client';

import { useState } from 'react';
import { useVelaStore } from '@/lib/store';
import { RESTAURANTS } from '@/lib/data';
import { TRANSLATIONS } from '@/lib/i18n';
import BottomNav from '@/components/BottomNav';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Search, Star, MapPin, Clock, DollarSign, Utensils } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { RestaurantCategory } from '@/lib/types';

export default function RestaurantsPage() {
  const { language, isLoaded } = useVelaStore();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [search, setSearch] = useState('');
  
  if (!isLoaded) return <div className="h-screen flex items-center justify-center bg-background"><div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" /></div>;

  const t = TRANSLATIONS[language];
  const categories = ['All', 'Seafood', 'Brazilian Food', 'Cafés', 'Beach Restaurants', 'Fine Dining', 'Fast Food'];

  const filteredRestaurants = RESTAURANTS.filter(r => {
    const matchesCategory = activeCategory === 'All' || r.category === activeCategory;
    const matchesSearch = r.name.toLowerCase().includes(search.toLowerCase()) || 
                          r.cuisine.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0f1315]">
      {/* HUD Header */}
      <header className="sticky top-0 z-40 px-6 pt-12 pb-6 hud-gradient backdrop-blur-md">
        <h1 className="font-headline text-4xl mb-1 text-white">{t.restaurants}</h1>
        <p className="text-muted-foreground text-sm tracking-widest uppercase">Gastronomic Guide</p>
        
        <div className="relative mt-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder={t.searchRestaurants}
            className="pl-10 h-12 bg-white/5 border-white/10 rounded-xl focus:ring-primary text-white"
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
                activeCategory === cat ? "bg-primary text-primary-foreground border-primary" : "bg-white/5 border-white/10 text-white hover:bg-white/10"
              )}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </Badge>
          ))}
        </div>
      </header>

      {/* Restaurants List */}
      <section className="px-6 grid gap-6 pb-32 mt-4">
        {filteredRestaurants.map((res) => (
          <Link key={res.id} href={`/restaurant/${res.id}`}>
            <Card className="group overflow-hidden border-white/10 bg-white/5 rounded-3xl transition-all hover:border-primary/50">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={res.imageUrl}
                  alt={res.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-500 fill-current" />
                  <span className="text-xs font-bold text-white">{res.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-primary text-primary-foreground font-bold text-[10px] uppercase tracking-widest">
                    {res.category}
                  </Badge>
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-headline text-2xl text-white">{res.name}</h3>
                  <div className="flex items-center text-primary">
                    {[...Array(4)].map((_, i) => (
                      <DollarSign key={i} className={cn("w-3 h-3", i >= res.priceRange.length && "opacity-30")} />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                  {res.description}
                </p>
                <div className="flex flex-wrap gap-y-2 gap-x-4 text-[10px] uppercase tracking-widest font-bold text-white/50">
                  <span className="flex items-center gap-1.5"><Utensils className="w-3 h-3 text-primary" /> {res.cuisine}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3 h-3 text-primary" /> {res.openingHours}</span>
                  <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3 text-primary" /> Fortaleza</span>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </section>

      <BottomNav lang={language} />
    </div>
  );
}
