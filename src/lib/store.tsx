'use client';

import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { Language, BadgeProgress, Badge } from './types';
import { useToast } from '@/hooks/use-toast';
import { TRANSLATIONS } from './i18n';

interface VelaContextType {
  favorites: string[];
  toggleFavorite: (id: string) => void;
  language: Language;
  updateLanguage: (lang: Language) => void;
  isLoaded: boolean;
  progress: BadgeProgress;
  markAsVisited: (type: 'attraction' | 'restaurant' | 'hotel', id: string, category?: string) => void;
  markSectionViewed: (section: 'transport' | 'curiosities' | 'safety' | 'slang') => void;
}

const INITIAL_PROGRESS: BadgeProgress = {
  visitedAttractions: [],
  visitedRestaurants: [],
  visitedHotels: [],
  visitedCultural: [],
  viewedTransport: false,
  viewedCuriosities: false,
  viewedSafety: false,
  viewedSlang: false,
  unlockedBadgeIds: [],
};

export const BADGES: Badge[] = [
  {
    id: 'tourist-attractions',
    name: { en: 'Tourist Attractions', pt: 'Atrativos Turísticos', es: 'Atractivos Turísticos', fr: 'Attractions Touristiques' },
    description: { en: 'Explore 10 different tourist attractions.', pt: 'Explore 10 atrações turísticas diferentes.', es: 'Explora 10 atracciones turísticas diferentes.', fr: 'Explorez 10 attractions touristiques différentes.' },
    imagePath: '/badges/tourist-attractions.png',
    target: 10
  },
  {
    id: 'restaurants',
    name: { en: 'Restaurants', pt: 'Restaurantes', es: 'Restaurantes', fr: 'Restaurants' },
    description: { en: 'Explore 10 different restaurants.', pt: 'Explore 10 restaurantes diferentes.', es: 'Explora 10 restaurantes diferentes.', fr: 'Explorez 10 restaurants différents.' },
    imagePath: '/badges/restaurants.png',
    target: 10
  },
  {
    id: 'hotels',
    name: { en: 'Hotels', pt: 'Hotéis', es: 'Hoteles', fr: 'Hôtels' },
    description: { en: 'Explore 10 different hotels.', pt: 'Explore 10 hotéis diferentes.', es: 'Explora 10 hoteles diferentes.', fr: 'Explorez 10 hôtels différents.' },
    imagePath: '/badges/hotels.png',
    target: 10
  },
  {
    id: 'transport',
    name: { en: 'Means of Transport', pt: 'Meios de Transportes', es: 'Medios de Transporte', fr: 'Moyens de Transport' },
    description: { en: 'Complete the transportation guide.', pt: 'Complete o guia de transportes.', es: 'Completa la guía de transportes.', fr: 'Complétez le guide des transports.' },
    imagePath: '/badges/transport.png',
    target: 1
  },
  {
    id: 'cultural-spaces',
    name: { en: 'Cultural Spaces', pt: 'Espaços Culturais', es: 'Espacios Culturales', fr: 'Espaces Culturels' },
    description: { en: 'Explore 5 different cultural spaces.', pt: 'Explore 5 espaços culturais diferentes.', es: 'Explora 5 espacios culturales diferentes.', fr: 'Explorez 5 espaces culturels différents.' },
    imagePath: '/badges/cultural-spaces.png',
    target: 5
  },
  {
    id: 'local-curiosities',
    name: { en: 'Local Curiosities', pt: 'Curiosidades Locais', es: 'Curiosidades Locales', fr: 'Curiosités Locales' },
    description: { en: 'Complete the curiosities section.', pt: 'Complete a seção de curiosidades.', es: 'Completa la sección de curiosidades.', fr: 'Complétez la section des curiosités.' },
    imagePath: '/badges/local-curiosities.png',
    target: 1
  },
  {
    id: 'safety-guidelines',
    name: { en: 'Safety Guidelines', pt: 'Orientações de Segurança', es: 'Consejos de Seguridad', fr: 'Conseils de Sécurité' },
    description: { en: 'Read the safety guidelines.', pt: 'Leia as orientações de segurança.', es: 'Lee los consejos de seguridad.', fr: 'Lisez les conseils de sécurité.' },
    imagePath: '/badges/safety-guidelines.png',
    target: 1
  },
  {
    id: 'cearense-slang',
    name: { en: 'Cearense Slang', pt: 'Gírias Cearenses', es: 'Jerga de Ceará', fr: 'Argot du Ceará' },
    description: { en: 'Explore the local slang section.', pt: 'Explore a seção de gírias locais.', es: 'Explora la sección de jerga local.', fr: 'Explorez la section sur l\'argot local.' },
    imagePath: '/badges/cearense-slang.png',
    target: 1
  }
];

const VelaContext = createContext<VelaContextType | undefined>(undefined);

export function VelaProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [language, setLanguage] = useState<Language>('en');
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState<BadgeProgress>(INITIAL_PROGRESS);
  const { toast } = useToast();

  useEffect(() => {
    const savedFavs = localStorage.getItem('vela_favorites');
    const savedLang = localStorage.getItem('vela_language');
    const savedProgress = localStorage.getItem('vela_progress');
    
    if (savedFavs) setFavorites(JSON.parse(savedFavs));
    if (savedLang) setLanguage(savedLang as Language);
    if (savedProgress) setProgress(JSON.parse(savedProgress));
    
    setIsLoaded(true);
  }, []);

  const checkBadgeUnlock = useCallback((newProgress: BadgeProgress) => {
    const newlyUnlocked: string[] = [];
    const t = TRANSLATIONS[language];

    BADGES.forEach(badge => {
      if (newProgress.unlockedBadgeIds.includes(badge.id)) return;

      let currentVal = 0;
      switch (badge.id) {
        case 'tourist-attractions': currentVal = newProgress.visitedAttractions.length; break;
        case 'restaurants': currentVal = newProgress.visitedRestaurants.length; break;
        case 'hotels': currentVal = newProgress.visitedHotels.length; break;
        case 'transport': currentVal = newProgress.viewedTransport ? 1 : 0; break;
        case 'cultural-spaces': currentVal = newProgress.visitedCultural.length; break;
        case 'local-curiosities': currentVal = newProgress.viewedCuriosities ? 1 : 0; break;
        case 'safety-guidelines': currentVal = newProgress.viewedSafety ? 1 : 0; break;
        case 'cearense-slang': currentVal = newProgress.viewedSlang ? 1 : 0; break;
      }

      if (currentVal >= badge.target) {
        newlyUnlocked.push(badge.id);
        toast({
          title: t.newBadge,
          description: badge.name[language],
        });
      }
    });

    if (newlyUnlocked.length > 0) {
      const finalProgress = {
        ...newProgress,
        unlockedBadgeIds: [...newProgress.unlockedBadgeIds, ...newlyUnlocked]
      };
      setProgress(finalProgress);
      localStorage.setItem('vela_progress', JSON.stringify(finalProgress));
    }
  }, [language, toast]);

  const markAsVisited = useCallback((type: 'attraction' | 'restaurant' | 'hotel', id: string, category?: string) => {
    setProgress(prev => {
      let updated = false;
      const next = { ...prev };

      if (type === 'attraction' && !prev.visitedAttractions.includes(id)) {
        next.visitedAttractions = [...prev.visitedAttractions, id];
        updated = true;
        if ((category === 'Culture' || category === 'Historical Places') && !prev.visitedCultural.includes(id)) {
          next.visitedCultural = [...prev.visitedCultural, id];
        }
      } else if (type === 'restaurant' && !prev.visitedRestaurants.includes(id)) {
        next.visitedRestaurants = [...prev.visitedRestaurants, id];
        updated = true;
      } else if (type === 'hotel' && !prev.visitedHotels.includes(id)) {
        next.visitedHotels = [...prev.visitedHotels, id];
        updated = true;
      }

      if (updated) {
        localStorage.setItem('vela_progress', JSON.stringify(next));
        checkBadgeUnlock(next);
        return next;
      }
      return prev;
    });
  }, [checkBadgeUnlock]);

  const markSectionViewed = useCallback((section: 'transport' | 'curiosities' | 'safety' | 'slang') => {
    setProgress(prev => {
      const next = { ...prev };
      let updated = false;
      if (section === 'transport' && !prev.viewedTransport) { next.viewedTransport = true; updated = true; }
      if (section === 'curiosities' && !prev.viewedCuriosities) { next.viewedCuriosities = true; updated = true; }
      if (section === 'safety' && !prev.viewedSafety) { next.viewedSafety = true; updated = true; }
      if (section === 'slang' && !prev.viewedSlang) { next.viewedSlang = true; updated = true; }

      if (updated) {
        localStorage.setItem('vela_progress', JSON.stringify(next));
        checkBadgeUnlock(next);
        return next;
      }
      return prev;
    });
  }, [checkBadgeUnlock]);

  const toggleFavorite = useCallback((id: string) => {
    setFavorites(prev => {
      const newFavs = prev.includes(id)
        ? prev.filter(favId => favId !== id)
        : [...prev, id];
      localStorage.setItem('vela_favorites', JSON.stringify(newFavs));
      return newFavs;
    });
  }, []);

  const updateLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('vela_language', lang);
  }, []);

  const contextValue = useMemo(() => ({
    favorites,
    toggleFavorite,
    language,
    updateLanguage,
    isLoaded,
    progress,
    markAsVisited,
    markSectionViewed
  }), [favorites, toggleFavorite, language, updateLanguage, isLoaded, progress, markAsVisited, markSectionViewed]);

  return (
    <VelaContext.Provider value={contextValue}>
      {children}
    </VelaContext.Provider>
  );
}

export function useVelaStore() {
  const context = useContext(VelaContext);
  if (!context) {
    throw new Error('useVelaStore must be used within a VelaProvider');
  }
  return context;
}
