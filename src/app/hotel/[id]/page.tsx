'use client';

import { useParams, useRouter } from 'next/navigation';
import { useVelaStore } from '@/lib/store';
import { HOTELS } from '@/lib/data';
import { TRANSLATIONS } from '@/lib/i18n';
import { ArrowLeft, MapPin, Star, Navigation, Info, ShieldCheck, Check } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export default function HotelDetail() {
  const { id } = useParams();
  const router = useRouter();
  const { language, isLoaded } = useVelaStore();
  
  if (!isLoaded) return null;
  const t = TRANSLATIONS[language];
  const hotel = HOTELS.find(h => h.id === id);

  if (!hotel) return <div className="p-10 text-center text-foreground">Hotel not found</div>;

  const openInMaps = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(hotel.address[language])}`;
    window.open(url, '_blank');
  };

  const categoryKey = hotel.category.charAt(0).toLowerCase() + hotel.category.slice(1);
  const translatedCategory = (t as any)[categoryKey] || hotel.category;

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="fixed top-12 left-6 right-6 z-30 flex justify-between items-center pointer-events-none">
        <button onClick={() => router.back()} className="glass p-3 rounded-full pointer-events-auto"><ArrowLeft className="w-6 h-6 text-foreground" /></button>
      </div>

      <div className="relative h-[45vh] w-full">
        <Image 
          src={hotel.imageUrl}
          alt={hotel.name[language]}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/20" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <Badge className="mb-2 bg-primary/20 text-primary backdrop-blur-md border-0 uppercase font-bold text-[10px] tracking-widest">
            {translatedCategory}
          </Badge>
          <h1 className="font-headline text-4xl text-foreground mb-2">{hotel.name[language]}</h1>
          <div className="flex items-center gap-4 text-foreground/90">
            <span className="flex items-center gap-1"><Star className="w-5 h-5 text-yellow-500 fill-current" /> {hotel.rating}</span>
            <div className="flex items-center gap-1 text-primary">
              <span className="text-xl font-bold">R$ {hotel.pricePerNight}</span>
              <span className="text-[10px] text-foreground/50 uppercase tracking-tighter">/ night</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 mt-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <section>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary/70 mb-4 flex items-center gap-2">
            <Info className="w-4 h-4" /> {t.aboutHotel}
          </h3>
          <p className="text-foreground/80 leading-relaxed text-sm">
            {hotel.description[language]}
          </p>
        </section>

        <section>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary/70 mb-4 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" /> {t.amenities}
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {hotel.amenities[language].map((amenity, idx) => (
              <div key={idx} className="flex items-center gap-2 glass p-3 rounded-xl border-border">
                <Check className="w-3 h-3 text-primary" />
                <span className="text-xs text-foreground/80 font-medium">{amenity}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary/70 mb-4 flex items-center gap-2">
            <MapPin className="w-4 h-4" /> {t.location}
          </h3>
          <div className="p-4 glass border-border rounded-2xl flex items-center gap-4">
             <div className="bg-primary/20 p-3 rounded-xl">
                <MapPin className="w-5 h-5 text-primary" />
             </div>
             <p className="text-xs text-foreground/90 italic flex-1">{hotel.address[language]}</p>
          </div>
          
          <div className="flex flex-col gap-3 mt-6">
            <Button onClick={openInMaps} size="lg" variant="outline" className="w-full h-14 rounded-2xl border-border bg-card/40 hover:bg-card/60 text-foreground font-bold uppercase tracking-widest group">
              <Navigation className="w-5 h-5 mr-2 group-hover:animate-pulse" /> {t.howToGetThere}
            </Button>
            <Button size="lg" className="w-full h-14 rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-widest">
              {t.bookNow}
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
