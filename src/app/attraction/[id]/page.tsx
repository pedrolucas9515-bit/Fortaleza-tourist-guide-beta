'use client';

import { useParams, useRouter } from 'next/navigation';
import { useVelaStore } from '@/lib/store';
import { ATTRACTIONS, RESTAURANTS } from '@/lib/data';
import { TRANSLATIONS } from '@/lib/i18n';
import { ArrowLeft, MapPin, Clock, Star, Navigation, Heart, ChevronRight } from 'lucide-react';
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
    <div className="min-h-screen pb-24">
      <div className="relative h-[50vh] w-full">
        <Image 
          src={attraction.imageUrl}
          alt={attraction.title[language]}
          fill
          className="object-cover"
          priority
          data-ai-hint={getHint(attraction.imageUrl)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/30" />
        
        <div className="absolute top-12 left-6 right-6 flex justify-between items-center">
          <button onClick={() => router.back()} className="glass p-3 rounded-full"><ArrowLeft className="w-6 h-6 text-white" /></button>
          <button onClick={() => toggleFavorite(attraction.id)} className="glass p-3 rounded-full">
            <Heart className={cn("w-6 h-6", isFav ? "fill-primary text-primary" : "text-white")} />
          </button>
        </div>

        <div className="absolute bottom-6 left-6 right-6">
          <Badge className="mb-2 bg-primary/20 text-primary backdrop-blur-md border-0 uppercase font-bold text-xs">
            {translatedCategory}
          </Badge>
          <h1 className="font-headline text-4xl text-white mb-2">{attraction.title[language]}</h1>
          <div className="flex items-center gap-4 text-white/90">
            <span className="flex items-center gap-1"><Star className="w-5 h-5 text-yellow-500 fill-current" /> {attraction.rating}</span>
            <span className="flex items-center gap-1 text-sm opacity-80 uppercase tracking-widest font-medium"><MapPin className="w-4 h-4" /> Fortaleza, CE</span>
          </div>
        </div>
      </div>

      <div className="px-6 mt-8">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-white/5 border-white/10 h-12 p-1 rounded-xl">
            <TabsTrigger value="about" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg uppercase text-[10px] font-bold tracking-widest">
              {t.explore}
            </TabsTrigger>
            <TabsTrigger value="dining" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg uppercase text-[10px] font-bold tracking-widest">
              {t.nearbyRestaurants} ({nearbyRestaurants.length})
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="about" className="mt-8 animate-in fade-in duration-500">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-headline mb-3 flex items-center gap-2 text-white"><Clock className="w-5 h-5 text-primary" /> {t.openingHours}</h3>
                <p className="text-muted-foreground">{attraction.openingHours[language]}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-headline mb-3 text-white">{t.explore}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {attraction.description[language]}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-headline mb-3 flex items-center gap-2 text-white"><MapPin className="w-5 h-5 text-primary" /> {t.address}</h3>
                <p className="text-muted-foreground text-sm italic">{attraction.address[language]}</p>
              </div>

              <Button onClick={openInMaps} size="lg" className="w-full h-14 rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-widest group">
                <Navigation className="w-5 h-5 mr-2 group-hover:animate-pulse" /> {t.howToGetThere}
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="dining" className="mt-8 animate-in fade-in duration-500">
            <div className="grid gap-4">
              {nearbyRestaurants.map((res) => {
                const cuisineLabel = res.cuisine[language];
                return (
                  <Link key={res.id} href={`/restaurant/${res.id}`}>
                    <Card className="flex overflow-hidden bg-white/5 border-white/10 rounded-2xl h-36 p-0 group transition-all hover:border-primary/50">
                      <div className="relative w-36 h-full shrink-0">
                        <Image 
                          src={res.imageUrl} 
                          alt={res.name[language]} 
                          fill 
                          className="object-cover group-hover:scale-105 transition-transform duration-500" 
                          data-ai-hint={getHint(res.imageUrl)}
                        />
                        <div className="absolute top-2 left-2">
                          <Badge className="bg-black/60 backdrop-blur-md border-0 text-[8px] tracking-tighter">
                            {res.priceRange}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex-1 p-4 flex flex-col justify-between min-w-0">
                        <div>
                          <div className="flex justify-between items-start">
                             <h4 className="font-bold text-white truncate text-base">{res.name[language]}</h4>
                             <span className="text-[10px] flex items-center gap-0.5 font-bold text-primary"><Star className="w-3 h-3 fill-current" /> {res.rating}</span>
                          </div>
                          <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1 truncate">{cuisineLabel}</p>
                          <div className="flex items-center gap-1 text-[10px] text-white/40">
                            <Clock className="w-3 h-3" />
                            <span>{res.openingHours[language]}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-[10px] text-primary/80 font-medium">Near Attraction</span>
                          <ChevronRight className="w-4 h-4 text-primary" />
                        </div>
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
