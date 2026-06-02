'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, Theme } from './types';

interface VelaContextType {
  favorites: string[];
  toggleFavorite: (id: string) => void;
  language: Language;
  updateLanguage: (lang: Language) => void;
  theme: Theme;
  updateTheme: (theme: Theme) => void;
  isLoaded: boolean;
}

const VelaContext = createContext<VelaContextType | undefined>(undefined);

export function VelaProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [language, setLanguage] = useState<Language>('en');
  const [theme, setTheme] = useState<Theme>('dark');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedFavs = localStorage.getItem('vela_favorites');
    const savedLang = localStorage.getItem('vela_language');
    const savedTheme = localStorage.getItem('vela_theme');
    
    if (savedFavs) setFavorites(JSON.parse(savedFavs));
    if (savedLang) setLanguage(savedLang as Language);
    if (savedTheme) setTheme(savedTheme as Theme);
    
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const root = document.documentElement;
      const themeClasses = ['theme-dark', 'theme-ocean', 'theme-emerald', 'theme-purple', 'theme-sunset', 'theme-tropical'];
      root.classList.remove(...themeClasses);
      root.classList.add(`theme-${theme}`);
    }
  }, [theme, isLoaded]);

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

  const updateTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('vela_theme', newTheme);
  };

  return (
    <VelaContext.Provider value={{ favorites, toggleFavorite, language, updateLanguage, theme, updateTheme, isLoaded }}>
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
