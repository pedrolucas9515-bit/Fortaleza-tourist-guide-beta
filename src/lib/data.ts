
import { Attraction } from './types';
import placeholderData from '@/app/lib/placeholder-images.json';

const getImg = (id: string) => placeholderData.placeholderImages.find(img => img.id === id)?.imageUrl || '';

const baseRestaurants = [
  {
    id: 'res-1',
    name: 'Coco Bambu Beira Mar',
    cuisine: 'Seafood',
    rating: 4.8,
    address: 'Av. Beira Mar, 3698',
    imageUrl: getImg('restaurant-1')
  },
  {
    id: 'res-2',
    name: 'Canteiros',
    cuisine: 'Brazilian Regional',
    rating: 4.6,
    address: 'Rua Carlos Vasconcelos, 747',
    imageUrl: getImg('restaurant-2')
  }
];

export const ATTRACTIONS: Attraction[] = [
  {
    id: 'iracema',
    title: 'Praia de Iracema',
    description: 'Iconic beach known for its bohemian spirit, sunset views, and the Iracema Guardiã statue.',
    address: 'Praia de Iracema, Fortaleza - CE',
    openingHours: 'Open 24h',
    rating: 4.7,
    category: 'Beaches',
    imageUrl: getImg('iracema'),
    coords: { lat: -3.7208, lng: -38.5173 },
    nearbyRestaurants: baseRestaurants
  },
  {
    id: 'futuro',
    title: 'Praia do Futuro',
    description: 'The most popular beach for swimming, famous for its massive "mega-barracas" offering full infrastructure.',
    address: 'Av. Clóvis Arrais Maia, Fortaleza - CE',
    openingHours: 'Open 24h',
    rating: 4.8,
    category: 'Beaches',
    imageUrl: getImg('futuro'),
    coords: { lat: -3.7383, lng: -38.4552 },
    nearbyRestaurants: baseRestaurants
  },
  {
    id: 'beiramar',
    title: 'Beira Mar',
    description: 'The main seaside promenade, perfect for walking, jogging, and visiting the traditional fish market.',
    address: 'Av. Beira Mar, Fortaleza - CE',
    openingHours: 'Open 24h',
    rating: 4.9,
    category: 'Beaches',
    imageUrl: getImg('beiramar'),
    coords: { lat: -3.7251, lng: -38.4988 },
    nearbyRestaurants: baseRestaurants
  },
  {
    id: 'mercado',
    title: 'Mercado Central',
    description: 'A massive multi-story market filled with local crafts, lace, cashews, and traditional Ceará souvenirs.',
    address: 'Av. Alberto Nepomuceno, 199',
    openingHours: '08:00 - 18:00',
    rating: 4.6,
    category: 'Culture',
    imageUrl: getImg('mercado'),
    coords: { lat: -3.7231, lng: -38.5255 },
    nearbyRestaurants: baseRestaurants
  },
  {
    id: 'dragao',
    title: 'Centro Dragão do Mar',
    description: 'The main cultural hub of the city, featuring cinemas, theaters, a planetarium, and museums.',
    address: 'R. Dragão do Mar, 81',
    openingHours: '09:00 - 22:00',
    rating: 4.8,
    category: 'Culture',
    imageUrl: getImg('dragao'),
    coords: { lat: -3.7219, lng: -38.5209 },
    nearbyRestaurants: baseRestaurants
  },
  {
    id: 'ponte',
    title: 'Ponte dos Ingleses',
    description: 'Also known as the Metal Bridge, it is one of the best spots to watch the sunset over the Atlantic.',
    address: 'R. dos Pacajús, 1',
    openingHours: 'Temporarily Closed for Reno',
    rating: 4.5,
    category: 'Historical Places',
    imageUrl: getImg('ponte'),
    coords: { lat: -3.7198, lng: -38.5178 },
    nearbyRestaurants: baseRestaurants
  },
  {
    id: 'coco',
    title: 'Parque do Cocó',
    description: 'A vast ecological park protecting the Cocó River mangrove, offering trails and boat tours.',
    address: 'Av. Padre Antônio Tomás, s/n',
    openingHours: '05:30 - 22:00',
    rating: 4.7,
    category: 'Parks',
    imageUrl: getImg('coco'),
    coords: { lat: -3.7468, lng: -38.4835 },
    nearbyRestaurants: baseRestaurants
  },
  {
    id: 'catedral',
    title: 'Catedral Metropolitana',
    description: 'An imposing neo-gothic cathedral inspired by the Cologne Cathedral in Germany.',
    address: 'Praça da Sé, s/n - Centro',
    openingHours: '08:00 - 12:00, 14:00 - 18:00',
    rating: 4.7,
    category: 'Historical Places',
    imageUrl: getImg('catedral'),
    coords: { lat: -3.7239, lng: -38.5264 },
    nearbyRestaurants: baseRestaurants
  },
  {
    id: 'fortaleza',
    title: 'Fortaleza de N. S. da Assunção',
    description: 'The historic military fort where the city of Fortaleza was founded.',
    address: 'Av. Alberto Nepomuceno, s/n',
    openingHours: '09:00 - 12:00, 14:00 - 17:00',
    rating: 4.6,
    category: 'Historical Places',
    imageUrl: getImg('fortaleza'),
    coords: { lat: -3.7225, lng: -38.5250 },
    nearbyRestaurants: baseRestaurants
  }
];
