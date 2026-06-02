'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from './types';

interface VelaContextType {
  favorites: string[];
  toggleFavorite: (id: string) => void;
  language: Language;
  updateLanguage: (lang: Language) => void;
  isLoaded: boolean;
}

const VelaContext = createContext<VelaContextType | undefined>(undefined);

export function VelaProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [language, setLanguage] = useState<Language>('en');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedFavs = localStorage.getItem('vela_favorites');
    const savedLang = localStorage.getItem('vela_language');
    
    if (savedFavs) setFavorites(JSON.parse(savedFavs));
    if (savedLang) setLanguage(savedLang as Language);
    
    setIsLoaded(true);
  }, []);

  const toggleFavorite = (id: string) => {
    const newFavs = favorites.includes(id)
      ? favorites.filter(favId => favId !== id)
      : [...favorites, id];
    setFavorites(newFavs);
    localStorage.setItem('vela_favorites', JSON.stringify(newFavs));
  };

  const updateLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('vela_language', lang);
  };

  return (
    <VelaContext.Provider value={{ favorites, toggleFavorite, language, updateLanguage, isLoaded }}>
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
