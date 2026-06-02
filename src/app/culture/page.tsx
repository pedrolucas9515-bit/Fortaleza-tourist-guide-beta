'use client';

import { useVelaStore } from '@/lib/store';
import { ATTRACTIONS } from '@/lib/data';
import { TRANSLATIONS } from '@/lib/i18n';
import { ArrowLeft, Music, MapPin, Calendar, Info } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function CulturePage() {
  const { language, isLoaded } = useVelaStore();
  const router = useRouter();

  if (!isLoaded) return null;
  const t = TRANSLATIONS[language];
  const cultureSpots = ATTRACTIONS.filter(a => a.category === 'Culture' || a.category === 'Historical Places');

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="px-6 pt-12 pb-6 hud-gradient sticky top-0 z-20">
        <button onClick={() => router.back()} className="mb-4 flex items-center gap-2 text-primary text-[10px] uppercase font-bold tracking-widest">
          <ArrowLeft className="w-4 h-4" /> {t.guide}
        </button>
        <h1 className="font-headline text-3xl text-foreground flex items-center gap-3">
          {t.cultureEvents} <Music className="w-6 h-6 text-primary" />
        </h1>
      </header>

      <div className="px-6 space-y-6">
        {cultureSpots.map((spot) => (
          <Link key={spot.id} href={`/attraction/${spot.id}`}>
            <Card className="overflow-hidden glass border-border rounded-[2rem] group mb-6">
              <div className="relative h-48 w-full">
                <Image 
                  src={spot.imageUrl} 
                  alt={spot.title[language]} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-primary/20 text-primary border-0 text-[8px] uppercase tracking-widest font-bold">
                    {spot.category}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-headline text-2xl text-foreground mb-2">{spot.title[language]}</h3>
                <p className="text-xs text-foreground/60 mb-6 line-clamp-2 leading-relaxed">
                  {spot.description[language]}
                </p>

                <div className="grid gap-2">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-foreground/40">
                    <MapPin className="w-3 h-3 text-primary" />
                    <span>{spot.address[language]}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-foreground/40">
                    <Calendar className="w-3 h-3 text-primary" />
                    <span>{spot.openingHours[language]}</span>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        ))}

        <Card className="glass border-primary/20 p-6 rounded-[2rem] bg-primary/5">
           <h4 className="font-bold text-primary uppercase text-xs tracking-widest mb-3 flex items-center gap-2">
             <Info className="w-4 h-4" /> Beira Mar Cultural Events
           </h4>
           <p className="text-xs text-foreground/80 leading-relaxed italic">
             {language === 'pt' ? 'Fique atento aos eventos culturais que ocorrem quase diariamente no calçadão da Beira Mar, incluindo shows de humor e música ao vivo.' : 
              language === 'en' ? 'Keep an eye out for cultural events occurring almost daily on the Beira Mar promenade, including humor shows and live music.' :
              language === 'es' ? 'Esté atento a los eventos culturales que ocurren a diario en el paseo de Beira Mar, incluidos espectáculos de humor y música en vivo.' :
              'Gardez un œil sur les événements culturels qui ont lieu presque quotidiennement sur la promenade Beira Mar, notamment des spectacles d\'humour et de la musique live.'}
           </p>
        </Card>
      </div>
    </div>
  );
}