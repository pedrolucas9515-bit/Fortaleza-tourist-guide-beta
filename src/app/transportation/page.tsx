'use client';

import { useEffect } from 'react';
import { useVelaStore } from '@/lib/store';
import { TRANSLATIONS } from '@/lib/i18n';
import { ArrowLeft, Car, Bus, Footprints, DollarSign, CheckCircle2, Lightbulb } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function TransportationPage() {
  const { language, isLoaded, markSectionViewed } = useVelaStore();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded) {
      markSectionViewed('transport');
    }
  }, [isLoaded, markSectionViewed]);

  if (!isLoaded) return null;
  const t = TRANSLATIONS[language];

  const transportData = [
    {
      name: 'Taxi',
      icon: Car,
      desc: {
        en: 'Official city taxis. Available at ranks and through apps.',
        pt: 'Taxis oficiais da cidade. Disponíveis em pontos e por aplicativos.',
        es: 'Taxis oficiales de la ciudad. Disponibles en paradas y a través de aplicaciones.',
        fr: 'Taxis officiels de la ville. Disponibles aux stations et via des applications.'
      },
      pros: {
        en: 'Safe, uses bus lanes, professional drivers.',
        pt: 'Seguro, utiliza faixas de ônibus, motoristas profissionais.',
        es: 'Seguro, utiliza carriles de autobús, conductores profesionales.',
        fr: 'Sûr, utilise les voies de bus, chauffeurs professionnels.'
      },
      cost: '$$',
      tips: {
        en: 'Always check if the meter is on.',
        pt: 'Sempre verifique se o taxímetro está ligado.',
        es: 'Siempre verifique que el taxímetro esté encendido.',
        fr: 'Vérifiez toujours si le compteur est allumé.'
      }
    },
    {
      name: 'Uber / 99',
      icon: Car,
      desc: {
        en: 'Most popular ride-sharing apps in Brazil.',
        pt: 'Aplicativos de transporte mais populares no Brasil.',
        es: 'Las aplicaciones de transporte compartido más populares en Brasil.',
        fr: 'Applications de VTC les plus populaires au Brésil.'
      },
      pros: {
        en: 'Affordable, predictable pricing, English app interface.',
        pt: 'Acessível, preços previsíveis, interface em português.',
        es: 'Asequible, precios predecibles, interfaz de aplicación en español.',
        fr: 'Abordable, prix prévisibles, interface d\'application en français.'
      },
      cost: '$',
      tips: {
        en: 'Check the license plate before entering.',
        pt: 'Verifique a placa antes de entrar.',
        es: 'Verifique la placa antes de entrar.',
        fr: 'Vérifiez la plaque d\'immatriculation avant de monter.'
      }
    },
    {
      name: 'Public Bus',
      icon: Bus,
      desc: {
        en: 'Extensive network covering the entire city.',
        pt: 'Rede extensa cobrindo toda a cidade.',
        es: 'Extensa red que cubre toda la ciudad.',
        fr: 'Vaste réseau couvrant toute la ville.'
      },
      pros: {
        en: 'Very cheap, connects to all tourist spots.',
        pt: 'Muito barato, conecta a todos os pontos turísticos.',
        es: 'Muy barato, conecta con todos los puntos turísticos.',
        fr: 'Très bon marché, dessert tous les sites touristiques.'
      },
      cost: '¢',
      tips: {
        en: 'Use the "Meu Ônibus" app to track routes.',
        pt: 'Use o aplicativo "Meu Ônibus" para rastrear rotas.',
        es: 'Utilice la aplicación "Meu Ônibus" para rastrear rutas.',
        fr: 'Utilisez l\'application "Meu Ônibus" pour suivre les itinéraires.'
      }
    },
    {
      name: 'Walking',
      icon: Footprints,
      desc: {
        en: 'Best way to explore the Beira Mar and Iracema areas.',
        pt: 'Melhor forma de explorar as áreas da Beira Mar e Iracema.',
        es: 'La mejor manera de explorar las zonas de Beira Mar e Iracema.',
        fr: 'Meilleur moyen d\'explorer les zones de Beira Mar et Iracema.'
      },
      pros: {
        en: 'Free, healthy, best views of the ocean.',
        pt: 'Grátis, saudável, melhores vistas do oceano.',
        es: 'Gratis, saludable, mejores vistas del océano.',
        fr: 'Gratuit, sain, meilleures vues sur l\'océan.'
      },
      cost: '0',
      tips: {
        en: 'Use sunscreen and stay hydrated.',
        pt: 'Use protetor solar e mantenha-se hidratado.',
        es: 'Use protector solar y manténgase hidratado.',
        fr: 'Utilisez de la crème solaire et restez hydraté.'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="px-6 pt-12 pb-6 hud-gradient sticky top-0 z-20">
        <button onClick={() => router.back()} className="mb-4 flex items-center gap-2 text-primary text-[10px] uppercase font-bold tracking-widest">
          <ArrowLeft className="w-4 h-4" /> {t.guide}
        </button>
        <h1 className="font-headline text-3xl text-foreground">{t.transportation}</h1>
      </header>

      <div className="px-6 space-y-6">
        {transportData.map((item, idx) => (
          <Card key={idx} className="glass border-border p-6 rounded-3xl overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <item.icon className="w-16 h-16 text-foreground" />
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/20 p-2 rounded-xl">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl font-headline text-foreground">{item.name}</h2>
            </div>

            <p className="text-sm text-foreground/70 mb-6 leading-relaxed">
              {item.desc[language]}
            </p>

            <div className="grid gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-foreground/30 mb-1">{t.advantages}</p>
                  <p className="text-xs text-foreground/80">{item.pros[language]}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <DollarSign className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-foreground/30 mb-1">{t.cost}</p>
                  <p className="text-xs font-bold text-primary">{item.cost}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Lightbulb className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-foreground/30 mb-1">{t.tips}</p>
                  <p className="text-xs text-foreground/80 italic">"{item.tips[language]}"</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
