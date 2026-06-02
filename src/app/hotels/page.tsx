'use client';

import { useState } from 'react';
import { useVelaStore } from '@/lib/store';
import { HOTELS } from '@/lib/data';
import { TRANSLATIONS } from '@/lib/i18n';
import BottomNav from '@/components/BottomNav';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Search, Star, MapPin, Building, Bed, Settings } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function HotelsPage() {
  const { language, isLoaded } = useVelaStore();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [search, setSearch] = useState('');
  
  if (!isLoaded) return <div className="h-screen flex items-center justify-center bg-background"><div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" /></div>;

  const t = TRANSLATIONS[language];
  const categories = ['All', 'Luxury', 'Boutique', 'Beachfront', 'Business', 'Budget'];

  const filteredHotels = HOTELS.filter(h => {
    const matchesCategory = activeCategory === 'All' || h.category === activeCategory;
    const matchesSearch = h.name[language].toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categoryMap: Record<string, string> = {
    'All': t.all,
    'Luxury': t.luxury,
    'Boutique': t.boutique,
    'Beachfront': t.beachfront,
    'Business': t.business,
    'Budget': t.budget
  };

  const APP_LOGO = "https://i.pinimg.com/736x/46/26/75/462675165eeac26a77e0d23157de6f09.jpg";

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 px-6 pt-12 pb-6 hud-gradient backdrop-blur-md">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-primary/30 shadow-lg bg-card">
              <Image src={APP_LOGO} alt="Fortaleza Tourist Guide Logo" fill className="object-cover" />
            </div>
            <div>
              <h1 className="font-headline text-3xl mb-0.5 text-foreground">{t.hotels}</h1>
              <p className="text-muted-foreground text-[10px] tracking-widest uppercase font-bold">Premium Stays</p>
            </div>
          </div>
          <Link href="/settings" className="glass p-3 rounded-full hover:bg-primary/10 transition-colors">
            <Settings className="w-5 h-5 text-foreground" />
          </Link>
        </div>
        
        <div className="relative mt-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder={t.searchHotels}
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
              {categoryMap[cat]}
            </Badge>
          ))}
        </div>
      </header>

      <section className="px-6 grid gap-6 pb-32 mt-4">
        {filteredHotels.map((hotel) => {
          const categoryKey = hotel.category.charAt(0).toLowerCase() + hotel.category.slice(1);
          const translatedCategory = (t as any)[categoryKey] || hotel.category;

          return (
            <Link key={hotel.id} href={`/hotel/${hotel.id}`}>
              <Card className="group overflow-hidden border-border bg-card/40 rounded-3xl transition-all hover:border-primary/50">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={hotel.imageUrl}
                    alt={hotel.name[language]}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-xs font-bold text-white">{hotel.rating}</span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-primary text-primary-foreground font-bold text-[10px] uppercase tracking-widest">
                      {translatedCategory}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-headline text-2xl text-foreground">{hotel.name[language]}</h3>
                    <div className="text-right">
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{t.pricePerNight}</p>
                      <p className="text-lg font-bold text-primary">R$ {hotel.pricePerNight}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                    {hotel.description[language]}
                  </p>
                  <div className="flex flex-wrap gap-y-2 gap-x-4 text-[10px] uppercase tracking-widest font-bold text-foreground/50">
                    <span className="flex items-center gap-1.5"><Building className="w-3 h-3 text-primary" /> {translatedCategory}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3 text-primary" /> Fortaleza</span>
                    <span className="flex items-center gap-1.5"><Bed className="w-3 h-3 text-primary" /> {hotel.amenities[language].length} {t.amenities}</span>
                  </div>
                </div>
              </Card>
            </Link>
          );
        })}
      </section>

      <BottomNav lang={language} />
    </div>
  );
}
