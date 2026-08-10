
'use client';

import { useState, useMemo } from 'react';
import { useVelaStore } from '@/lib/store';
import { HOTELS } from '@/lib/data';
import { TRANSLATIONS } from '@/lib/i18n';
import BottomNav from '@/components/BottomNav';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Search, Star, MapPin, Building, Bed, Settings, MessageSquare, Info } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import placeholderData from '@/app/lib/placeholder-images.json';

const APP_LOGO = "https://i.ibb.co/gLRCXsZC/draguinho.jpg";

export default function HotelsPage() {
  const { language, isLoaded } = useVelaStore();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [search, setSearch] = useState('');
  
  const t = useMemo(() => TRANSLATIONS[language], [language]);
  const categories = useMemo(() => ['All', 'Luxury', 'Boutique', 'Beachfront', 'Business', 'Budget'], []);

  const filteredHotels = useMemo(() => {
    return HOTELS.filter(h => {
      const matchesCategory = activeCategory === 'All' || h.category === activeCategory;
      const matchesSearch = h.name[language].toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search, language]);

  const categoryMap: Record<string, string> = useMemo(() => ({
    'All': t.all,
    'Luxury': t.luxury,
    'Boutique': t.boutique,
    'Beachfront': t.beachfront,
    'Business': t.business,
    'Budget': t.budget
  }), [t]);

  if (!isLoaded) return <div className="h-screen flex items-center justify-center bg-background"><div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" /></div>;

  const getHint = (url: string) => {
    return placeholderData.placeholderImages.find(img => img.imageUrl === url)?.imageHint || 'hotel room';
  };

  return (
    <div className="min-h-screen bg-background pb-32">
      <header className="sticky top-0 z-40 px-6 pt-12 pb-6 hud-gradient backdrop-blur-md">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-lg bg-card/40">
              <Image src={APP_LOGO} alt="Fortaleza Tourist Guide Logo" fill className="object-cover" priority />
            </div>
            <div>
              <h1 className="font-headline text-3xl mb-0.5 text-foreground font-bold">{t.hotels}</h1>
              <p className="text-primary text-[9px] tracking-[0.3em] uppercase font-black opacity-60">Premium Stays</p>
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
            placeholder={t.searchHotels}
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
              {categoryMap[cat]}
            </Badge>
          ))}
        </div>
      </header>

      <section className="px-6 grid gap-8 mt-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        {filteredHotels.map((hotel) => {
          const categoryKey = hotel.category.charAt(0).toLowerCase() + hotel.category.slice(1);
          const translatedCategory = (t as any)[categoryKey] || hotel.category;

          return (
            <Link key={hotel.id} href={`/hotel/${hotel.id}`}>
              <Card className="group overflow-hidden border-border bg-card/40 rounded-[2rem] transition-all hover:border-primary/50 shadow-lg">
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={hotel.imageUrl}
                    alt={hotel.name[language]}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    data-ai-hint={getHint(hotel.imageUrl)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/10">
                    <Star className="w-3.5 h-3.5 text-yellow-500 fill-current" />
                    <span className="text-xs font-bold text-white">{hotel.rating}</span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-primary text-primary-foreground font-black text-[9px] uppercase tracking-[0.2em] px-4 py-1.5 shadow-xl">
                      {translatedCategory}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-headline text-2xl text-foreground font-bold tracking-tight pr-4">{hotel.name[language]}</h3>
                    <div className="text-right shrink-0">
                      <p className="text-[9px] text-muted-foreground uppercase tracking-widest font-black mb-1">{t.pricePerNight}</p>
                      <p className="text-xl font-black text-primary">R$ {hotel.pricePerNight}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6 line-clamp-2 leading-relaxed font-medium">
                    {hotel.description[language]}
                  </p>
                  <div className="flex flex-wrap gap-y-3 gap-x-6 text-[9px] uppercase tracking-[0.2em] font-black text-foreground/40 border-t border-white/5 pt-5">
                    <span className="flex items-center gap-2.5"><Building className="w-4 h-4 text-primary" /> {translatedCategory}</span>
                    <span className="flex items-center gap-2.5"><MapPin className="w-4 h-4 text-primary" /> Fortaleza</span>
                    <span className="flex items-center gap-2.5"><Bed className="w-4 h-4 text-primary" /> {hotel.amenities[language].length} {t.amenities}</span>
                  </div>
                </div>
              </Card>
            </Link>
          );
        })}
        {filteredHotels.length === 0 && (
          <div className="py-20 text-center opacity-30 flex flex-col items-center gap-4">
            <Building className="w-12 h-12" />
            <p className="text-[10px] uppercase tracking-widest font-black">No hotels found</p>
          </div>
        )}
      </section>

      <BottomNav lang={language} />
    </div>
  );
}
