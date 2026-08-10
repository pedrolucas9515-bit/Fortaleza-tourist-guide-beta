
'use client';

import { useParams, useRouter } from 'next/navigation';
import { useVelaStore } from '@/lib/store';
import { ATTRACTIONS, RESTAURANTS } from '@/lib/data';
import { TRANSLATIONS } from '@/lib/i18n';
import { ArrowLeft, MapPin, Clock, Star, Navigation, Heart, ChevronRight, Info } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import placeholderData from '@/app/lib/placeholder-images.json';

export default function AttractionDetail() {
  const { id } = useParams();
  const router = useRouter();
  const { language, favorites, toggleFavorite, isLoaded } = useVelaStore();
  
  if (!isLoaded) return null;
  const t = TRANSLATIONS[language];
  const attraction = ATTRACTIONS.find(a => a.id === id);

  if (!attraction) return <div className="p-10 text-center text-white">Not found</div>;

  const isFav = favorites.includes(attraction.id);
  const nearbyRestaurants = RESTAURANTS.filter(r => attraction.nearbyRestaurantIds.includes(r.id));

  const openInMaps = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${attraction.coords.lat},${attraction.coords.lng}`;
    window.open(url, '_blank');
  };

  const getHint = (url: string) => {
    return placeholderData.placeholderImages.find(img => img.imageUrl === url)?.imageHint || 'attraction spot';
  };

  const catKey = attraction.category.toLowerCase().replace(' ', '');
  const translatedCategory = (t as any)[catKey] || attraction.category;

  return (
    <div className="min-h-screen pb-32 bg-background">
      <div className="relative h-[65vh] w-full">
        <Image 
          src={attraction.imageUrl}
          alt={attraction.title[language]}
          fill
          className="object-cover"
          priority
          data-ai-hint={getHint(attraction.imageUrl)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/40" />
        
        <div className="absolute top-12 left-6 right-6 flex justify-between items-center">
          <button onClick={() => router.back()} className="glass p-4 rounded-2xl active:scale-90 transition-transform"><ArrowLeft className="w-6 h-6 text-white" /></button>
          <button onClick={() => toggleFavorite(attraction.id)} className="glass p-4 rounded-2xl active:scale-90 transition-transform">
            <Heart className={cn("w-6 h-6 transition-colors", isFav ? "fill-primary text-primary" : "text-white")} />
          </button>
        </div>

        <div className="absolute bottom-12 left-6 right-6 animate-in slide-in-from-bottom-8 duration-700">
          <Badge className="mb-4 bg-primary text-primary-foreground border-0 uppercase font-black text-[10px] tracking-[0.2em] px-4 py-1.5">
            {translatedCategory}
          </Badge>
          <h1 className="font-headline text-5xl text-white mb-4 font-bold tracking-tight leading-tight">{attraction.title[language]}</h1>
          <div className="flex items-center gap-6 text-white font-medium">
            <span className="flex items-center gap-2"><Star className="w-6 h-6 text-yellow-500 fill-current" /> {attraction.rating}</span>
            <span className="flex items-center gap-2 text-sm uppercase tracking-widest opacity-70"><MapPin className="w-5 h-5 text-primary" /> Fortaleza, CE</span>
          </div>
        </div>
      </div>

      <div className="px-6 -mt-8 relative z-10">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-white/5 border border-white/10 h-16 p-1.5 rounded-[2rem] backdrop-blur-xl">
            <TabsTrigger value="about" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-2xl uppercase text-[10px] font-black tracking-widest h-full">
              {t.explore}
            </TabsTrigger>
            <TabsTrigger value="dining" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-2xl uppercase text-[10px] font-black tracking-widest h-full">
              {t.nearbyRestaurants}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="about" className="mt-12 space-y-10 animate-in fade-in duration-700">
            <div className="grid gap-10">
              <section className="space-y-4">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-primary flex items-center gap-3">
                   <Clock className="w-4 h-4" /> {t.openingHours}
                </h3>
                <p className="text-white/80 font-medium text-lg">{attraction.openingHours[language]}</p>
              </section>
              
              <section className="space-y-4">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-primary flex items-center gap-3">
                   <Info className="w-4 h-4" /> {t.explore}
                </h3>
                <p className="text-white/70 leading-relaxed text-lg font-medium">
                  {attraction.description[language]}
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-primary flex items-center gap-3">
                   <MapPin className="w-4 h-4" /> {t.address}
                </h3>
                <Card className="bg-white/5 border-white/10 p-5 rounded-[1.5rem] italic text-white/60">
                  {attraction.address[language]}
                </Card>
              </section>

              <Button onClick={openInMaps} size="lg" className="w-full h-16 rounded-[1.5rem] bg-primary text-primary-foreground hover:bg-primary/90 font-black uppercase tracking-widest group shadow-xl shadow-primary/20">
                <Navigation className="w-5 h-5 mr-3 group-hover:animate-pulse" /> {t.howToGetThere}
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="dining" className="mt-12 animate-in fade-in duration-700">
            <div className="grid gap-6">
              {nearbyRestaurants.map((res) => (
                <Link key={res.id} href={`/restaurant/${res.id}`}>
                  <Card className="flex overflow-hidden bg-white/5 border-white/10 rounded-[2rem] h-40 p-0 group transition-all hover:border-primary/50 shadow-lg">
                    <div className="relative w-40 h-full shrink-0 overflow-hidden">
                      <Image 
                        src={res.imageUrl} 
                        alt={res.name[language]} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-700" 
                        data-ai-hint={getHint(res.imageUrl)}
                      />
                    </div>
                    <div className="flex-1 p-6 flex flex-col justify-between min-w-0">
                      <div>
                        <div className="flex justify-between items-start mb-1">
                           <h4 className="font-bold text-white truncate text-xl tracking-tight">{res.name[language]}</h4>
                           <span className="text-[10px] flex items-center gap-1 font-black text-primary"><Star className="w-3 h-3 fill-current" /> {res.rating}</span>
                        </div>
                        <p className="text-[10px] text-primary/60 uppercase tracking-widest font-black mb-2">{res.cuisine[language]}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-white/40 uppercase tracking-tighter font-bold">{res.openingHours[language]}</span>
                        <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
              {nearbyRestaurants.length === 0 && (
                <div className="py-20 text-center opacity-30">
                  <p className="text-xs uppercase tracking-widest font-bold">No nearby dining options listed</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
