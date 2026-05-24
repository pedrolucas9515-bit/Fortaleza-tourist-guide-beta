
'use client';

import { useParams, useRouter } from 'next/navigation';
import { useVelaStore } from '@/lib/store';
import { RESTAURANTS } from '@/lib/data';
import { TRANSLATIONS } from '@/lib/i18n';
import { ArrowLeft, MapPin, Clock, Star, Navigation, DollarSign, Utensils, Info } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import placeholderData from '@/app/lib/placeholder-images.json';

export default function RestaurantDetail() {
  const { id } = useParams();
  const router = useRouter();
  const { language, isLoaded } = useVelaStore();
  
  if (!isLoaded) return null;
  const t = TRANSLATIONS[language];
  const restaurant = RESTAURANTS.find(r => r.id === id);

  if (!restaurant) return <div className="p-10 text-center text-white">Restaurant not found</div>;

  const openInMaps = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(restaurant.address)}`;
    window.open(url, '_blank');
  };

  const getHint = (url: string) => {
    return placeholderData.placeholderImages.find(img => img.imageUrl === url)?.imageHint || 'restaurant food';
  };

  return (
    <div className="min-h-screen bg-[#0f1315] pb-24">
      {/* Header Overlay */}
      <div className="fixed top-12 left-6 right-6 z-30 flex justify-between items-center pointer-events-none">
        <button onClick={() => router.back()} className="glass p-3 rounded-full pointer-events-auto"><ArrowLeft className="w-6 h-6 text-white" /></button>
      </div>

      {/* Hero Section */}
      <div className="relative h-[45vh] w-full">
        <Image 
          src={restaurant.imageUrl}
          alt={restaurant.name}
          fill
          className="object-cover"
          priority
          data-ai-hint={getHint(restaurant.imageUrl)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1315] via-transparent to-black/20" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <Badge className="mb-2 bg-primary/20 text-primary backdrop-blur-md border-0 uppercase font-bold text-[10px] tracking-widest">
            {restaurant.cuisine}
          </Badge>
          <h1 className="font-headline text-4xl text-white mb-2">{restaurant.name}</h1>
          <div className="flex items-center gap-4 text-white/90">
            <span className="flex items-center gap-1"><Star className="w-5 h-5 text-yellow-500 fill-current" /> {restaurant.rating}</span>
            <div className="flex items-center text-primary">
              {[...Array(4)].map((_, i) => (
                <DollarSign key={i} className={cn("w-4 h-4", i >= restaurant.priceRange.length && "opacity-30")} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 mt-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Info Cards */}
        <div className="grid grid-cols-2 gap-4">
           <Card className="glass border-white/10 p-4 flex flex-col items-center text-center rounded-2xl">
              <Clock className="w-6 h-6 text-primary mb-2" />
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Status</p>
              <p className="text-xs font-bold text-white">{restaurant.openingHours}</p>
           </Card>
           <Card className="glass border-white/10 p-4 flex flex-col items-center text-center rounded-2xl">
              <Utensils className="w-6 h-6 text-primary mb-2" />
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Cuisine</p>
              <p className="text-xs font-bold text-white">{restaurant.cuisine}</p>
           </Card>
        </div>

        {/* Description */}
        <section>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary/70 mb-4 flex items-center gap-2">
            <Info className="w-4 h-4" /> About the Restaurant
          </h3>
          <p className="text-white/80 leading-relaxed text-sm">
            {restaurant.description}
          </p>
        </section>

        {/* Location */}
        <section>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary/70 mb-4 flex items-center gap-2">
            <MapPin className="w-4 h-4" /> Location
          </h3>
          <div className="p-4 glass border-white/10 rounded-2xl flex items-center gap-4">
             <div className="bg-primary/20 p-3 rounded-xl">
                <MapPin className="w-5 h-5 text-primary" />
             </div>
             <p className="text-xs text-white/90 italic flex-1">{restaurant.address}</p>
          </div>
          <Button onClick={openInMaps} size="lg" className="w-full h-14 rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-widest mt-6 group">
            <Navigation className="w-5 h-5 mr-2 group-hover:animate-pulse" /> {t.howToGetThere}
          </Button>
        </section>
      </div>
    </div>
  );
}
