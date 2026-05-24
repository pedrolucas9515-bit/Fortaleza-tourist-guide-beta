
'use client';

import { useParams, useRouter } from 'next/navigation';
import { useVelaStore } from '@/lib/store';
import { ATTRACTIONS } from '@/lib/data';
import { TRANSLATIONS } from '@/lib/i18n';
import { ArrowLeft, MapPin, Clock, Star, Navigation, Heart } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from '@/components/ui/card';

export default function AttractionDetail() {
  const { id } = useParams();
  const router = useRouter();
  const { language, favorites, toggleFavorite, isLoaded } = useVelaStore();
  
  if (!isLoaded) return null;
  const t = TRANSLATIONS[language];
  const attraction = ATTRACTIONS.find(a => a.id === id);

  if (!attraction) return <div className="p-10 text-center">Not found</div>;

  const isFav = favorites.includes(attraction.id);

  const openInMaps = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${attraction.coords.lat},${attraction.coords.lng}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen pb-24">
      {/* Hero Header */}
      <div className="relative h-[50vh] w-full">
        <Image 
          src={attraction.imageUrl}
          alt={attraction.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/30" />
        
        <div className="absolute top-12 left-6 right-6 flex justify-between items-center">
          <button onClick={() => router.back()} className="glass p-3 rounded-full"><ArrowLeft className="w-6 h-6" /></button>
          <button onClick={() => toggleFavorite(attraction.id)} className="glass p-3 rounded-full">
            <Heart className={cn("w-6 h-6", isFav ? "fill-primary text-primary" : "text-white")} />
          </button>
        </div>

        <div className="absolute bottom-6 left-6 right-6">
          <Badge className="mb-2 bg-primary/20 text-primary backdrop-blur-md border-0 uppercase font-bold text-xs">
            {attraction.category}
          </Badge>
          <h1 className="font-headline text-4xl text-white mb-2">{attraction.title}</h1>
          <div className="flex items-center gap-4 text-white/90">
            <span className="flex items-center gap-1"><Star className="w-5 h-5 text-yellow-500 fill-current" /> {attraction.rating}</span>
            <span className="flex items-center gap-1 text-sm opacity-80 uppercase tracking-widest font-medium"><MapPin className="w-4 h-4" /> Fortaleza, CE</span>
          </div>
        </div>
      </div>

      <div className="px-6 mt-8">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-white/5 border-white/10 h-12 p-1 rounded-xl">
            <TabsTrigger value="about" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg uppercase text-[10px] font-bold tracking-widest">{t.explore}</TabsTrigger>
            <TabsTrigger value="dining" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg uppercase text-[10px] font-bold tracking-widest">{t.nearbyRestaurants}</TabsTrigger>
          </TabsList>
          
          <TabsContent value="about" className="mt-8 animate-in fade-in duration-500">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-headline mb-3 flex items-center gap-2"><Clock className="w-5 h-5 text-primary" /> {t.openingHours}</h3>
                <p className="text-muted-foreground">{attraction.openingHours}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-headline mb-3">{t.explore}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {attraction.description}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-headline mb-3 flex items-center gap-2"><MapPin className="w-5 h-5 text-primary" /> Address</h3>
                <p className="text-muted-foreground text-sm italic">{attraction.address}</p>
              </div>

              <Button onClick={openInMaps} size="lg" className="w-full h-14 rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-widest group">
                <Navigation className="w-5 h-5 mr-2 group-hover:animate-pulse" /> {t.howToGetThere}
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="dining" className="mt-8 animate-in fade-in duration-500">
            <div className="grid gap-4">
              {attraction.nearbyRestaurants.map((res) => (
                <Card key={res.id} className="flex overflow-hidden bg-white/5 border-white/10 rounded-2xl h-32 p-0">
                  <div className="relative w-32 h-full">
                    <Image src={res.imageUrl} alt={res.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 p-4 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-white truncate">{res.name}</h4>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{res.cuisine}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs flex items-center gap-1 font-bold text-primary"><Star className="w-3 h-3 fill-current" /> {res.rating}</span>
                      <Button variant="ghost" size="sm" className="h-8 text-[10px] uppercase font-bold text-white/50 border border-white/10">View</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
