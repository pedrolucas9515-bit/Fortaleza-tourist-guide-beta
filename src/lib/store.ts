
'use client';

import { useState, useEffect } from 'react';
import { Language } from './types';

export function useVelaStore() {
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

  return { favorites, toggleFavorite, language, updateLanguage, isLoaded };
}
