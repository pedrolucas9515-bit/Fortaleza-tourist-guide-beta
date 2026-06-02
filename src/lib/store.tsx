'use client';

import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
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
    isLoaded
  }), [favorites, toggleFavorite, language, updateLanguage, isLoaded]);

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
