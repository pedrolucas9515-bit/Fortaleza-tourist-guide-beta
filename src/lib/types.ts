
export type Category = 'Beaches' | 'Restaurants' | 'Culture' | 'Parks' | 'Historical Places' | 'Nightlife';

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  address: string;
  imageUrl: string;
}

export interface Attraction {
  id: string;
  title: string;
  description: string;
  address: string;
  openingHours: string;
  rating: number;
  category: Category;
  imageUrl: string;
  coords: {
    lat: number;
    lng: number;
  };
  nearbyRestaurants: Restaurant[];
}

export type Language = 'en' | 'pt' | 'es' | 'fr';
