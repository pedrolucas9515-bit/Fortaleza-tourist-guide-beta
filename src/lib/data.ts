
import { Attraction, Restaurant, Hotel } from './types';
import placeholderData from '@/app/lib/placeholder-images.json';

const getImg = (id: string) => placeholderData.placeholderImages.find(img => img.id === id)?.imageUrl || placeholderData.placeholderImages.find(img => img.id === 'rest-generic')?.imageUrl || '';

export const HOTELS: Hotel[] = [
  {
    id: 'gran-marquise',
    name: {
      en: 'Hotel Gran Marquise',
      pt: 'Hotel Gran Marquise',
      es: 'Hotel Gran Marquise',
      fr: 'Hôtel Gran Marquise'
    },
    category: 'Luxury',
    rating: 5.0,
    pricePerNight: 850,
    address: {
      en: '3980 Beira Mar Avenue, Mucuripe',
      pt: 'Av. Beira Mar, 3980, Mucuripe',
      es: 'Avenida Beira Mar, 3980, Mucuripe',
      fr: 'Avenue Beira Mar, 3980, Mucuripe'
    },
    description: {
      en: 'The most prestigious luxury hotel in Fortaleza, located in the elegant Mucuripe area with a stunning rooftop pool.',
      pt: 'O hotel de luxo mais prestigiado de Fortaleza, localizado na elegante área do Mucuripe, com uma piscina deslumbrante na cobertura.',
      es: 'El hotel de lujo más prestigioso de Fortaleza, ubicado en la elegante zona de Mucuripe con una impresionante piscina en la azotea.',
      fr: 'L\'hôtel de luxe le plus prestigieux de Fortaleza, situé dans le quartier élégant de Mucuripe avec une superbe piscine sur le toit.'
    },
    amenities: {
      en: ['Spa', 'Rooftop Pool', 'Fitness Center', 'Ocean View'],
      pt: ['Spa', 'Piscina na Cobertura', 'Academia', 'Vista Mar'],
      es: ['Spa', 'Piscina en la Azotea', 'Gimnasio', 'Vista al Mar'],
      fr: ['Spa', 'Piscine sur le toit', 'Salle de sport', 'Vue sur la mer']
    },
    imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/da/c7/9f/caption.jpg?w=900&h=500&s=1',
    coords: { lat: -3.7275, lng: -38.4865 }
  },
  {
    id: 'luzeiros',
    name: { en: 'Hotel Luzeiros', pt: 'Hotel Luzeiros', es: 'Hotel Luzeiros', fr: 'Hôtel Luzeiros' },
    category: 'Luxury',
    rating: 4.8,
    pricePerNight: 620,
    address: { en: '2600 Beira Mar Avenue', pt: 'Av. Beira Mar, 2600', es: 'Avenida Beira Mar, 2600', fr: 'Avenue Beira Mar, 2600' },
    description: {
      en: 'A modern design hotel at Meireles Beach, offering sophisticated rooms and great city views.',
      pt: 'Um hotel de design moderno na Praia do Meireles, oferecendo quartos sofisticados e ótimas vistas da cidade.',
      es: 'Un hotel de diseño moderno en la playa de Meireles, con habitaciones sofisticadas y excelentes vistas de la ciudad.',
      fr: 'Un hôtel au design moderne sur la plage de Meireles, proposant des chambres sophistiquées et de superbes vues sur la ville.'
    },
    amenities: { en: ['Design', 'Pool', 'Fitness', 'WiFi'], pt: ['Design', 'Piscina', 'Academia', 'WiFi'], es: ['Diseño', 'Piscina', 'Gimnasio', 'WiFi'], fr: ['Design', 'Piscine', 'Fitness', 'WiFi'] },
    imageUrl: 'https://picsum.photos/seed/luzeiros/800/600',
    coords: { lat: -3.7252, lng: -38.4958 }
  },
  {
    id: 'praiano',
    name: { en: 'Praiano Hotel', pt: 'Praiano Hotel', es: 'Praiano Hotel', fr: 'Hôtel Praiano' },
    category: 'Beachfront',
    rating: 4.5,
    pricePerNight: 410,
    address: { en: '2800 Beira Mar Avenue', pt: 'Av. Beira Mar, 2800', es: 'Avenida Beira Mar, 2800', fr: 'Avenue Beira Mar, 2800' },
    description: { en: 'Classic beachfront hotel at the heart of the Beira Mar promenade.', pt: 'Hotel clássico à beira-mar no coração do calçadão da Beira Mar.', es: 'Hotel clásico frente al mar en el corazón del paseo de Beira Mar.', fr: 'Hôtel classique en bord de mer au cœur de la promenade Beira Mar.' },
    amenities: { en: ['Ocean View', 'Pool', 'Restaurant'], pt: ['Vista Mar', 'Piscina', 'Restaurante'], es: ['Vista al Mar', 'Piscina', 'Restaurante'], fr: ['Vue mer', 'Piscine', 'Restaurant'] },
    imageUrl: 'https://picsum.photos/seed/praiano/800/600',
    coords: { lat: -3.7255, lng: -38.4942 }
  },
  {
    id: 'villa-mayor',
    name: {
      en: 'Hotel Villa Mayor',
      pt: 'Hotel Villa Mayor',
      es: 'Hotel Villa Mayor',
      fr: 'Hôtel Villa Mayor'
    },
    category: 'Boutique',
    rating: 4.7,
    pricePerNight: 380,
    address: {
      en: '115 Visconde de Mauá Street, Meireles',
      pt: 'Rua Visconde de Mauá, 115, Meireles',
      es: 'Calle Visconde de Mauá, 115, Meireles',
      fr: 'Rue Visconde de Mauá, 115, Meireles'
    },
    description: {
      en: 'A charming historical-style hotel inspired by the architecture of old Fortaleza, located steps away from the Beira Mar.',
      pt: 'Um charmoso hotel de estilo histórico inspirado na arquitetura da antiga Fortaleza, localizado a poucos passos da Beira Mar.',
      es: 'Un encantador hotel de estilo histórico inspirado en la arquitectura de la antigua Fortaleza, ubicado a pocos pasos de Beira Mar.',
      fr: 'Un charmant hôtel de style historique inspiré de l\'architecture du vieux Fortaleza, situé à quelques pas de Beira Mar.'
    },
    amenities: {
      en: ['Garden Pool', 'Free Breakfast', 'Colonial Decor'],
      pt: ['Piscina com Jardim', 'Café da Manhã Grátis', 'Decoração Colonial'],
      es: ['Piscina con Jardín', 'Desayuno Gratis', 'Decoración Colonial'],
      fr: ['Piscine de jardin', 'Petit-déjeuner gratuit', 'Décoration coloniale']
    },
    imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/345279503.jpg?k=e6f43913031c30c3410ff0618b2084cf292deba04382104d7f9f95a1d95915b9&o=',
    coords: { lat: -3.7255, lng: -38.4985 }
  },
  {
    id: 'quality-fortaleza',
    name: {
      en: 'Quality Hotel Fortaleza',
      pt: 'Quality Hotel Fortaleza',
      es: 'Quality Hotel Fortaleza',
      fr: 'Quality Hotel Fortaleza'
    },
    category: 'Business',
    rating: 4.5,
    pricePerNight: 320,
    address: {
      en: '1310 Beira Mar Avenue, Meireles',
      pt: 'Av. Beira Mar, 1310, Meireles',
      es: 'Avenida Beira Mar, 1310, Meireles',
      fr: 'Avenue Beira Mar, 1310, Meireles'
    },
    description: {
      en: 'A premier choice for business travelers, featuring modern meeting facilities and a strategic location in the heart of the business district.',
      pt: 'Uma escolha premium para viajantes de negócios, com instalações modernas para reuniões e localização estratégica no coração do distrito empresarial.',
      es: 'Una opción de primer nivel para viajeros de negocios, con modernas instalaciones para reuniones y una ubicación estratégica en el corazón del distrito de negocios.',
      fr: 'Un choix de premier ordre pour les voyageurs d\'affaires, doté d\'installations de réunion modernes et d\'un emplacement stratégique au cœur du quartier des affaires.'
    },
    amenities: {
      en: ['Business Center', 'High-Speed Wi-Fi', 'Meeting Rooms', 'Gym'],
      pt: ['Centro de Negócios', 'Wi-Fi de Alta Velocidade', 'Salas de Reunião', 'Academia'],
      es: ['Centro de Negocios', 'Wi-Fi de Alta Velocidad', 'Salas de Reunión', 'Gimnasio'],
      fr: ['Centre d\'affaires', 'Wi-Fi haut débit', 'Salles de réunion', 'Salle de sport']
    },
    imageUrl: 'https://www.pacotestravel.com.br/img/pacote/quality-hotel-fortaleza/vista-frontal-156.jpeg',
    coords: { lat: -3.7315, lng: -38.4815 }
  },
  {
    id: 'stop-way-fortaleza',
    name: {
      en: 'Stop Way Hotel Fortaleza',
      pt: 'Stop Way Hotel Fortaleza',
      es: 'Stop Way Hotel Fortaleza',
      fr: 'Stop Way Hotel Fortaleza'
    },
    category: 'Budget',
    rating: 4.2,
    pricePerNight: 210,
    address: {
      en: '1500 Monsenhor Tabosa Avenue, Iracema',
      pt: 'Av. Monsenhor Tabosa, 1500, Iracema',
      es: 'Avenida Monsenhor Tabosa, 1500, Iracema',
      fr: 'Avenue Monsenhor Tabosa, 1500, Iracema'
    },
    description: {
      en: 'Practical and affordable accommodation near Praia de Iracema. Perfect for budget-conscious travelers looking for comfort and location.',
      pt: 'Acomodação prática e acessível perto da Praia de Iracema. Perfeito para viajantes focados em custo-benefício que buscam conforto e localização.',
      es: 'Alojamiento práctico y asequible cerca de Praia de Iracema. Perfecto para viajeros que cuidan su presupuesto y buscan comodidad y ubicación.',
      fr: 'Hébergement pratique et abordable à proximité de Praia de Iracema. Parfait pour les voyageurs soucieux de leur budget à la recherche de confort et d\'emplacement.'
    },
    amenities: {
      en: ['Free Wi-Fi', 'Air Conditioning', 'Breakfast Included'],
      pt: ['Wi-Fi Grátis', 'Ar Condicionado', 'Café da Manhã Incluso'],
      es: ['Wi-Fi Gratis', 'Aire Acondicionado', 'Desayuno Incluido'],
      fr: ['Wi-Fi gratuit', 'Climatisation', 'Petit-déjeuner inclus']
    },
    imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/36/60/e9/fachada.jpg?w=900&h=500&s=1',
    coords: { lat: -3.7235, lng: -38.5115 }
  },
  {
    id: 'seara-praia',
    name: {
      en: 'Seara Praia Hotel',
      pt: 'Seara Praia Hotel',
      es: 'Seara Praia Hotel',
      fr: 'Hôtel Seara Praia'
    },
    category: 'Beachfront',
    rating: 4.6,
    pricePerNight: 450,
    address: {
      en: '3080 Beira Mar Avenue, Meireles',
      pt: 'Av. Beira Mar, 3080, Meireles',
      es: 'Avenida Beira Mar, 3080, Meireles',
      fr: 'Avenue Beira Mar, 3080, Meireles'
    },
    description: {
      en: 'Modern hotel offering high-quality service, a panoramic rooftop, and easy access to the main tourist promenade.',
      pt: 'Hotel moderno que oferece serviço de alta qualidade, cobertura panorâmica e fácil acesso ao principal calçadão turístico.',
      es: 'Hotel moderno que ofrece un servicio de alta calidad, una azotea panorámica y fácil acceso al principal paseo turístico.',
      fr: 'Hôtel moderne offrant un service de haute qualité, un toit panoramique et un accès facile à la principale promenade touristique.'
    },
    amenities: {
      en: ['Pool', 'Sauna', 'Business Center', 'Events Area'],
      pt: ['Piscina', 'Sauna', 'Centro de Negócios', 'Área de Eventos'],
      es: ['Piscina', 'Sauna', 'Centro de Negocios', 'Área de Eventos'],
      fr: ['Piscine', 'Sauna', 'Centre d\'affaires', 'Espace événements']
    },
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpdzG15hMFNj3kjaiKR2efg8tXel_Ss4h5AQ&s',
    coords: { lat: -3.7248, lng: -38.4955 }
  },
  {
    id: 'crocobeach-hotel',
    name: {
      en: 'Crocobeach Hotel',
      pt: 'Crocobeach Hotel',
      es: 'Crocobeach Hotel',
      fr: 'Crocobeach Hôtel'
    },
    category: 'Beachfront',
    rating: 4.7,
    pricePerNight: 350,
    address: {
      en: '3125 Clóvis Arrais Maia Avenue, Praia do Futuro',
      pt: 'Av. Clóvis Arrais Maia, 3125, Praia do Futuro',
      es: 'Avenida Clóvis Arrais Maia, 3125, Praia do Futuro',
      fr: 'Avenue Clóvis Arrais Maia, 3125, Praia du Futur'
    },
    description: {
      en: 'Modern beachfront hotel at Praia do Futuro. Offers the best infrastructure, swimming pools, and exclusive access to the Crocobeach club.',
      pt: 'Hotel moderno à beira-mar na Praia do Futuro. Oferece a melhor infraestrutura, piscinas e acesso exclusivo ao clube Crocobeach.',
      es: 'Hotel moderno frente al mar en Praia do Futuro. Ofrece la mejor infraestructura, piscinas y acceso exclusivo al club Crocobeach.',
      fr: 'Hôtel moderne en bord de mer à Praia do Futuro. Offre la meilleure infrastructure, des piscines et un accès exclusif au club Crocobeach.'
    },
    amenities: {
      en: ['Beach Club Access', 'Outdoor Pool', 'Gym', 'Restaurant'],
      pt: ['Acesso ao Clube de Praia', 'Piscina Externa', 'Academia', 'Restaurante'],
      es: ['Acceso al Club de Playa', 'Piscina al Aire Libre', 'Gimnasio', 'Restaurante'],
      fr: ['Accès au Beach Club', 'Piscine extérieure', 'Salle de sport', 'Restaurant']
    },
    imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/737559957.jpg?k=27c0143d05108ee46061dcdb77836d64ab1ebdffc6092e482a85a0febc972b74&o=',
    coords: { lat: -3.7383, lng: -38.4552 }
  },
  {
    id: 'mareiro',
    name: { en: 'Mareiro Hotel', pt: 'Mareiro Hotel', es: 'Mareiro Hotel', fr: 'Hôtel Mareiro' },
    category: 'Beachfront',
    rating: 4.6,
    pricePerNight: 480,
    address: { en: '2380 Beira Mar Avenue', pt: 'Av. Beira Mar, 2380', es: 'Avenida Beira Mar, 2380', fr: 'Avenue Beira Mar, 2380' },
    description: { en: 'Excellent beachfront location with several pools and tropical gardens.', pt: 'Excelente localização à beira-mar com várias piscinas e jardins tropicais.', es: 'Excelente ubicación frente al mar con varias piscinas y jardines tropicales.', fr: 'Excellent emplacement en bord de mer avec plusieurs piscines et jardins tropicaux.' },
    amenities: { en: ['Tropical Gardens', 'Pools', 'Spa'], pt: ['Jardins Tropicais', 'Piscinas', 'Spa'], es: ['Jardines Tropicales', 'Piscinas', 'Spa'], fr: ['Jardins tropicaux', 'Piscines', 'Spa'] },
    imageUrl: 'https://picsum.photos/seed/mareiro/800/600',
    coords: { lat: -3.7250, lng: -38.4988 }
  },
  {
    id: 'sonata-iracema',
    name: { en: 'Hotel Sonata de Iracema', pt: 'Hotel Sonata de Iracema', es: 'Hotel Sonata de Iracema', fr: 'Hôtel Sonata de Iracema' },
    category: 'Beachfront',
    rating: 4.4,
    pricePerNight: 390,
    address: { en: '1030 Beira Mar Avenue', pt: 'Av. Beira Mar, 1030', es: 'Avenida Beira Mar, 1030', fr: 'Avenue Beira Mar, 1030' },
    description: { en: 'Located at Iracema Beach, famous for its cultural events and historic vibe.', pt: 'Localizado na Praia de Iracema, famoso pelos seus eventos culturais e vibração histórica.', es: 'Situado en la playa de Iracema, famoso por sus eventos culturales y su ambiente histórico.', fr: 'Situé sur la plage d\'Iracema, célèbre pour ses événements culturels et son ambiance historique.' },
    amenities: { en: ['Culture', 'Pool', 'Breakfast'], pt: ['Cultura', 'Piscina', 'Café da Manhã'], es: ['Cultura', 'Piscina', 'Desayuno'], fr: ['Culture', 'Piscine', 'Petit-déjeuner'] },
    imageUrl: 'https://picsum.photos/seed/sonata/800/600',
    coords: { lat: -3.7228, lng: -38.5132 }
  },
  {
    id: 'blue-tree',
    name: { en: 'Blue Tree Towers Fortaleza', pt: 'Blue Tree Towers Fortaleza', es: 'Blue Tree Towers Fortaleza', fr: 'Blue Tree Towers Fortaleza' },
    category: 'Business',
    rating: 4.3,
    pricePerNight: 350,
    address: { en: '2343 Beira Mar Avenue', pt: 'Av. Beira Mar, 2343', es: 'Avenida Beira Mar, 2343', fr: 'Avenue Beira Mar, 2343' },
    description: { en: 'Modern flat-style hotel offering comfort and a great location for long stays.', pt: 'Hotel moderno estilo flat oferecendo conforto e ótima localização para estadias longas.', es: 'Moderno hotel estilo apartamento que ofrece comodidad y una excelente ubicación para estancias largas.', fr: 'Hôtel moderne de style appartement offrant confort et un excellent emplacement pour les longs séjours.' },
    amenities: { en: ['Kitchenette', 'Gym', 'Business'], pt: ['Copa', 'Academia', 'Negócios'], es: ['Cocina', 'Gimnasio', 'Negocios'], fr: ['Kitchenette', 'Salle de sport', 'Affaires'] },
    imageUrl: 'https://picsum.photos/seed/bluetree/800/600',
    coords: { lat: -3.7248, lng: -38.5002 }
  },
  {
    id: 'vila-gale',
    name: { en: 'Vila Galé Fortaleza', pt: 'Vila Galé Fortaleza', es: 'Vila Galé Fortaleza', fr: 'Vila Galé Fortaleza' },
    category: 'Luxury',
    rating: 4.7,
    pricePerNight: 550,
    address: { en: '3430 Dioguinho Avenue', pt: 'Av. Dioguinho, 3430', es: 'Avenida Dioguinho, 3430', fr: 'Avenue Dioguinho, 3430' },
    description: { en: 'A massive beachfront resort at Praia do Futuro with exotic decor.', pt: 'Um resort enorme à beira-mar na Praia do Futuro com decoração exótica.', es: 'Un enorme complejo frente al mar en Praia do Futuro con decoración exótica.', fr: 'Un immense complexe en bord de mer à Praia do Futuro avec un décor exotique.' },
    amenities: { en: ['Resort', 'Spa', 'Pools', 'Beach Service'], pt: ['Resort', 'Spa', 'Piscinas', 'Serviço de Praia'], es: ['Resort', 'Spa', 'Piscinas', 'Servicio de Playa'], fr: ['Resort', 'Spa', 'Piscines', 'Service de plage'] },
    imageUrl: 'https://picsum.photos/seed/vilagale/800/600',
    coords: { lat: -3.7402, lng: -38.4528 }
  },
  {
    id: 'carmel-magna',
    name: { en: 'Carmel Magna Praia Hotel', pt: 'Carmel Magna Praia Hotel', es: 'Carmel Magna Praia Hotel', fr: 'Carmel Magna Praia Hotel' },
    category: 'Luxury',
    rating: 4.6,
    pricePerNight: 580,
    address: { en: '1001 Iracema Avenue', pt: 'Av. Iracema, 1001', es: 'Avenida Iracema, 1001', fr: 'Avenue Iracema, 1001' },
    description: { en: 'Modern and elegant, offering panoramic views of the Iracema coast.', pt: 'Moderno e elegante, oferecendo vistas panorâmicas da costa de Iracema.', es: 'Moderno y elegante, ofrece vistas panorámicas de la costa de Iracema.', fr: 'Moderne et élégant, offrant une vue panoramique sur la côte d\'Iracema.' },
    amenities: { en: ['Modern', 'Pool', 'View'], pt: ['Moderno', 'Piscina', 'Vista'], es: ['Moderno', 'Piscina', 'Vista'], fr: ['Moderne', 'Piscine', 'Vue'] },
    imageUrl: 'https://picsum.photos/seed/carmel/800/600',
    coords: { lat: -3.7225, lng: -38.5142 }
  },
  {
    id: 'ibis-iracema',
    name: { en: 'Ibis Fortaleza Praia de Iracema', pt: 'Ibis Fortaleza Praia de Iracema', es: 'Ibis Fortaleza Praia de Iracema', fr: 'Ibis Fortaleza Praia de Iracema' },
    category: 'Budget',
    rating: 4.1,
    pricePerNight: 240,
    address: { en: '800 Historiador Raimundo Girão Avenue', pt: 'Av. Hist. Raimundo Girão, 800', es: 'Avenida Hist. Raimundo Girão, 800', fr: 'Avenue Hist. Raimundo Girão, 800' },
    description: { en: 'Consistent quality and great value at a prime location.', pt: 'Qualidade consistente e ótimo custo-benefício em uma localização privilegiada.', es: 'Calidad constante y excelente relación calidad-precio en una ubicación privilegiada.', fr: 'Qualité constante et excellent rapport qualité-prix dans un emplacement privilégié.' },
    amenities: { en: ['Standard', 'WiFi', 'Bar'], pt: ['Padrão', 'WiFi', 'Bar'], es: ['Estándar', 'WiFi', 'Bar'], fr: ['Standard', 'WiFi', 'Bar'] },
    imageUrl: 'https://picsum.photos/seed/ibisira/800/600',
    coords: { lat: -3.7222, lng: -38.5158 }
  },
  {
    id: 'ibis-styles',
    name: { en: 'Ibis Styles Fortaleza', pt: 'Ibis Styles Fortaleza', es: 'Ibis Styles Fortaleza', fr: 'Ibis Styles Fortaleza' },
    category: 'Budget',
    rating: 4.2,
    pricePerNight: 230,
    address: { en: '100 Senador Machado Street', pt: 'Rua Sen. Machado, 100', es: 'Calle Sen. Machado, 100', fr: 'Rue Sen. Machado, 100' },
    description: { en: 'Colorful and creatively designed hotel near the beach.', pt: 'Hotel colorido e com design criativo perto da praia.', es: 'Hotel colorido y de diseño creativo cerca de la playa.', fr: 'Hôtel coloré au design créatif près de la plage.' },
    amenities: { en: ['Design', 'Budget', 'Fun'], pt: ['Design', 'Econômico', 'Divertido'], es: ['Diseño', 'Económico', 'Divertido'], fr: ['Design', 'Budget', 'Fun'] },
    imageUrl: 'https://picsum.photos/seed/ibisstyles/800/600',
    coords: { lat: -3.7242, lng: -38.5082 }
  },
  {
    id: 'brasil-tropical',
    name: { en: 'Hotel Brasil Tropical', pt: 'Hotel Brasil Tropical', es: 'Hotel Brasil Tropical', fr: 'Hotel Brasil Tropical' },
    category: 'Beachfront',
    rating: 4.3,
    pricePerNight: 360,
    address: { en: '2323 Beira Mar Avenue', pt: 'Av. Beira Mar, 2323', es: 'Avenida Beira Mar, 2323', fr: 'Avenue Beira Mar, 2323' },
    description: { en: 'Comfortable apartments with fully equipped kitchens and ocean views.', pt: 'Apartamentos confortáveis com cozinhas equipadas e vista para o mar.', es: 'Apartamentos confortables con cocina equipada y vistas al mar.', fr: 'Appartements confortables avec cuisine équipée et vue sur l\'océan.' },
    amenities: { en: ['Kitchen', 'View', 'Pool'], pt: ['Cozinha', 'Vista', 'Piscina'], es: ['Cocina', 'Vista', 'Piscina'], fr: ['Cuisine', 'Vue', 'Piscine'] },
    imageUrl: 'https://picsum.photos/seed/brasil/800/600',
    coords: { lat: -3.7245, lng: -38.5015 }
  },
  {
    id: 'golden-fortaleza',
    name: { en: 'Golden Fortaleza by Intercity', pt: 'Golden Fortaleza by Intercity', es: 'Golden Fortaleza by Intercity', fr: 'Golden Fortaleza by Intercity' },
    category: 'Business',
    rating: 4.4,
    pricePerNight: 390,
    address: { en: '4260 Beira Mar Avenue', pt: 'Av. Beira Mar, 4260', es: 'Avenida Beira Mar, 4260', fr: 'Avenue Beira Mar, 4260' },
    description: { en: 'Prime location for business and leisure with sophisticated facilities.', pt: 'Localização privilegiada para negócios e lazer com instalações sofisticadas.', es: 'Ubicación privilegiada para negocios y ocio con instalaciones sofisticadas.', fr: 'Emplacement privilégié pour les affaires et les loisirs avec des installations sophistiquées.' },
    amenities: { en: ['Pool', 'Sauna', 'Business'], pt: ['Piscina', 'Sauna', 'Negócios'], es: ['Piscina', 'Sauna', 'Negocios'], fr: ['Piscine', 'Sauna', 'Affaires'] },
    imageUrl: 'https://picsum.photos/seed/golden/800/600',
    coords: { lat: -3.7282, lng: -38.4828 }
  }
];

export const RESTAURANTS: Restaurant[] = [
  {
    id: 'coco-bambu',
    name: { en: 'Coco Bambu Beira Mar', pt: 'Coco Bambu Beira Mar', es: 'Coco Bambu Beira Mar', fr: 'Coco Bambu Beira Mar' },
    cuisine: { en: 'Seafood', pt: 'Frutos do Mar', es: 'Mariscos', fr: 'Fruits de mer' },
    category: 'Seafood',
    rating: 4.8,
    address: { en: '3698 Beira Mar Avenue', pt: 'Av. Beira Mar, 3698', es: 'Avenida Beira Mar, 3698', fr: 'Avenue Beira Mar, 3698' },
    openingHours: { en: '11:30 AM - 12:00 AM', pt: '11:30 - 00:00', es: '11:30 - 00:00', fr: '11:30 - 00:00' },
    priceRange: '$$$',
    description: { en: 'The most iconic seafood destination in Fortaleza.', pt: 'O destino de frutos do mar mais icônico de Fortaleza.', es: 'El destino de mariscos más icónico de Fortaleza.', fr: 'La destination de fruits de mer la plus emblématique de Fortaleza.' },
    imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/09/70/a7/35/restaurante-coco-bambu.jpg',
    coords: { lat: -3.7258, lng: -38.4905 }
  },
  {
    id: 'vignoli',
    name: { en: 'Vignoli', pt: 'Vignoli', es: 'Vignoli', fr: 'Vignoli' },
    cuisine: { en: 'Italian & Pizza', pt: 'Italiana e Pizza', es: 'Italiana y Pizza', fr: 'Italien et Pizza' },
    category: 'Italian',
    rating: 4.7,
    address: { en: '600 Virgílio Távora Avenue', pt: 'Av. Virgílio Távora, 600', es: 'Avenida Virgílio Távora, 600', fr: 'Avenue Virgílio Távora, 600' },
    openingHours: { en: '06:00 PM - 11:30 PM', pt: '18:00 - 23:30', es: '18:00 - 23:30', fr: '18:00 - 23:30' },
    priceRange: '$$',
    description: { en: 'Famous for its ultra-thin crispy pizza and cozy Italian atmosphere.', pt: 'Famoso por sua pizza crocante ultrafina e ambiente italiano acolhedor.', es: 'Famoso por su pizza crujiente ultrafina y su acogedor ambiente italiano.', fr: 'Célèbre pour sa pizza croustillante ultra-fine et son atmosphère italienne chaleureuse.' },
    imageUrl: 'https://picsum.photos/seed/vignoli/800/600',
    coords: { lat: -3.7352, lng: -38.4922 }
  },
  {
    id: 'cabana-primo',
    name: { en: 'Cabaña del Primo', pt: 'Cabaña del Primo', es: 'Cabaña del Primo', fr: 'Cabaña del Primo' },
    cuisine: { en: 'Steakhouse', pt: 'Churrascaria', es: 'Parrilla', fr: 'Steakhouse' },
    category: 'Fine Dining',
    rating: 4.9,
    address: { en: '1011 Maria Tomásia Street', pt: 'Rua Maria Tomásia, 1011', es: 'Calle Maria Tomásia, 1011', fr: 'Rue Maria Tomásia, 1011' },
    openingHours: { en: '12:00 PM - 11:00 PM', pt: '12:00 - 23:00', es: '12:00 - 23:00', fr: '12:00 - 23:00' },
    priceRange: '$$$$',
    description: { en: 'Premium Argentinian and Uruguayan steakhouse experience.', pt: 'Experiência de churrascaria premium argentina e uruguaia.', es: 'Experiencia de parrilla argentina y uruguaya premium.', fr: 'Expérience de steakhouse haut de gamme argentin et uruguayen.' },
    imageUrl: 'https://picsum.photos/seed/cabana/800/600',
    coords: { lat: -3.7388, lng: -38.4915 }
  },
  {
    id: 'geppos',
    name: { en: 'Geppos Restaurante', pt: 'Geppos Restaurante', es: 'Geppos Restaurante', fr: 'Restaurant Geppos' },
    cuisine: { en: 'Italian & Seafood', pt: 'Italiana e Frutos do Mar', es: 'Italiana y Mariscos', fr: 'Italien et Fruits de mer' },
    category: 'Fine Dining',
    rating: 4.6,
    address: { en: 'Jardim Open Mall, Meireles', pt: 'Jardim Open Mall, Meireles', es: 'Jardim Open Mall, Meireles', fr: 'Jardim Open Mall, Meireles' },
    openingHours: { en: '11:30 AM - 11:30 PM', pt: '11:30 - 23:30', es: '11:30 - 23:30', fr: '11:30 - 23:30' },
    priceRange: '$$$',
    description: { en: 'Elegant dining at Meireles with a diverse menu.', pt: 'Jantar elegante no Meireles com um menu diversificado.', es: 'Cena elegante en Meireles com um menú diversificado.', fr: 'Dîner élégant à Meireles avec un menu varié.' },
    imageUrl: 'https://picsum.photos/seed/geppos/800/600',
    coords: { lat: -3.7312, lng: -38.4962 }
  },
  {
    id: 'colher-pau',
    name: { en: 'Colher de Pau', pt: 'Colher de Pau', es: 'Colher de Pau', fr: 'Colher de Pau' },
    cuisine: { en: 'Regional Brazilian', pt: 'Regional Brasileira', es: 'Regional Brasileña', fr: 'Régional Brésilien' },
    category: 'Brazilian Food',
    rating: 4.5,
    address: { en: '112 Ana Bilhar Street', pt: 'Rua Ana Bilhar, 112', es: 'Calle Ana Bilhar, 112', fr: 'Rue Ana Bilhar, 112' },
    openingHours: { en: '11:00 AM - 11:00 PM', pt: '11:00 - 23:00', es: '11:00 - 23:00', fr: '11:00 - 23:00' },
    priceRange: '$$',
    description: { en: 'Traditional Ceará food in a rustic, welcoming setting.', pt: 'Comida tradicional do Ceará em um ambiente rústico e acolhedor.', es: 'Comida tradicional de Ceará en un ambiente rústico y acogedor.', fr: 'Cuisine traditionnelle du Ceará dans un cadre rustique et accueillant.' },
    imageUrl: 'https://picsum.photos/seed/colher/800/600',
    coords: { lat: -3.7298, lng: -38.4952 }
  },
  {
    id: 'ryori',
    name: { en: 'Ryori', pt: 'Ryori', es: 'Ryori', fr: 'Ryori' },
    cuisine: { en: 'Japanese', pt: 'Japonesa', es: 'Japonesa', fr: 'Japonais' },
    category: 'Fine Dining',
    rating: 4.8,
    address: { en: 'Shopping Buganvília, Meireles', pt: 'Shopping Buganvília, Meireles', es: 'Shopping Buganvília, Meireles', fr: 'Shopping Buganvília, Meireles' },
    openingHours: { en: '12:00 PM - 11:30 PM', pt: '12:00 - 23:30', es: '12:00 - 23:30', fr: '12:00 - 23:30' },
    priceRange: '$$$$',
    description: { en: 'Fortaleza\'s top destination for sophisticated Japanese cuisine.', pt: 'O principal destino de Fortaleza para a culinária japonesa sofisticada.', es: 'El principal destino de Fortaleza para la cocina japonesa sofisticada.', fr: 'La destination phare de Fortaleza pour une cuisine japonaise sophistiquée.' },
    imageUrl: 'https://picsum.photos/seed/ryori/800/600',
    coords: { lat: -3.7342, lng: -38.4982 }
  },
  {
    id: 'moleskine',
    name: { en: 'Moleskine Gastrobar', pt: 'Moleskine Gastrobar', es: 'Moleskine Gastrobar', fr: 'Moleskine Gastrobar' },
    cuisine: { en: 'Contemporary & Bar', pt: 'Contemporânea e Bar', es: 'Contemporánea y Bar', fr: 'Contemporain et Bar' },
    category: 'Nightlife',
    rating: 4.7,
    address: { en: '542 Professor Dias da Rocha Street', pt: 'Rua Prof. Dias da Rocha, 542', es: 'Calle Prof. Dias da Rocha, 542', fr: 'Rue Prof. Dias da Rocha, 542' },
    openingHours: { en: '05:00 PM - 01:00 AM', pt: '17:00 - 01:00', es: '17:00 - 01:00', fr: '17:00 - 01:00' },
    priceRange: '$$$',
    description: { en: 'Vibrant gastrobar with creative cocktails and modern dishes.', pt: 'Gastrobar vibrante com coquetéis criativos e pratos modernos.', es: 'Gastrobar vibrante con cócteles creativos y platos modernos.', fr: 'Gastrobar animé avec des cocktails créatifs et des plats modernes.' },
    imageUrl: 'https://picsum.photos/seed/moleskine/800/600',
    coords: { lat: -3.7362, lng: -38.4932 }
  },
  {
    id: 'santa-grelha',
    name: { en: 'Santa Grelha', pt: 'Santa Grelha', es: 'Santa Grelha', fr: 'Santa Grelha' },
    cuisine: { en: 'Premium Steakhouse', pt: 'Churrascaria Premium', es: 'Parrilla Premium', fr: 'Steakhouse Premium' },
    category: 'Fine Dining',
    rating: 4.9,
    address: { en: '1130 Tibúrcio Cavalcante Street', pt: 'Rua Tibúrcio Cavalcante, 1130', es: 'Calle Tibúrcio Cavalcante, 1130', fr: 'Rue Tibúrcio Cavalcante, 1130' },
    openingHours: { en: '12:00 PM - 11:30 PM', pt: '12:00 - 23:30', es: '12:00 - 23:30', fr: '12:00 - 23:30' },
    priceRange: '$$$$',
    description: { en: 'High-end grill house offering the best cuts in the city.', pt: 'Casa de grelhados de luxo que oferece os melhores cortes da cidade.', es: 'Parrilla de lujo que ofrece los mejores cortes de la ciudad.', fr: 'Grill house haut de gamme proposant les meilleures coupes de la ville.' },
    imageUrl: 'https://picsum.photos/seed/santagrelha/800/600',
    coords: { lat: -3.7382, lng: -38.5012 }
  },
  {
    id: 'cantinho-frango',
    name: { en: 'Cantinho do Frango', pt: 'Cantinho do Frango', es: 'Cantinho do Frango', fr: 'Cantinho do Frango' },
    cuisine: { en: 'Regional & Barbecue', pt: 'Regional e Grelhados', es: 'Regional y Parrilla', fr: 'Régional et Barbecue' },
    category: 'Brazilian Food',
    rating: 4.8,
    address: { en: '1335 Torres Câmara Street', pt: 'Rua Torres Câmara, 1335', es: 'Calle Torres Câmara, 1335', fr: 'Rue Torres Câmara, 1335' },
    openingHours: { en: '10:00 AM - 10:00 PM', pt: '10:00 - 22:00', es: '10:00 - 22:00', fr: '10:00 - 22:00' },
    priceRange: '$$',
    description: { en: 'Cultural spot famous for its roasted chicken and extensive beer list.', pt: 'Ponto cultural famoso pelo seu frango assado e extensa carta de cervejas.', es: 'Lugar cultural famoso por su pollo asado y su extensa carta de cervezas.', fr: 'Lieu culturel célèbre pour son poulet rôti et sa longue carte de bières.' },
    imageUrl: 'https://picsum.photos/seed/frango/800/600',
    coords: { lat: -3.7358, lng: -38.5088 }
  },
  {
    id: 'picanha-cowboy',
    name: { en: 'Picanha do Cowboy', pt: 'Picanha do Cowboy', es: 'Picanha do Cowboy', fr: 'Picanha do Cowboy' },
    cuisine: { en: 'Steakhouse', pt: 'Churrascaria', es: 'Parrilla', fr: 'Steakhouse' },
    category: 'Brazilian Food',
    rating: 4.5,
    address: { en: 'Dom Luís Avenue, 665', pt: 'Av. Dom Luís, 665', es: 'Avenida Dom Luís, 665', fr: 'Avenue Dom Luís, 665' },
    openingHours: { en: '11:00 AM - 12:00 AM', pt: '11:00 - 00:00', es: '11:00 - 00:00', fr: '11:00 - 00:00' },
    priceRange: '$$',
    description: { en: 'Classic picanha destination with a family-friendly vibe.', pt: 'Destino clássico para picanha com um ambiente familiar.', es: 'Destino clásico de picanha con un ambiente familiar.', fr: 'Destination classique pour la picanha avec une ambiance familiale.' },
    imageUrl: 'https://picsum.photos/seed/cowboy/800/600',
    coords: { lat: -3.7332, lng: -38.4902 }
  },
  {
    id: 'la-bella-italia',
    name: { en: 'La Bella Italia', pt: 'La Bella Italia', es: 'La Bella Italia', fr: 'La Bella Italia' },
    cuisine: { en: 'Authentic Italian', pt: 'Italiana Autêntica', es: 'Italiana Auténtica', fr: 'Italien Authentique' },
    category: 'Italian',
    rating: 4.7,
    address: { en: '1000 Almirante Barroso Avenue', pt: 'Av. Alm. Barroso, 1000', es: 'Avenida Alm. Barroso, 1000', fr: 'Avenue Alm. Barroso, 1000' },
    openingHours: { en: '06:30 PM - 11:30 PM', pt: '18:30 - 23:30', es: '18:30 - 23:30', fr: '18:30 - 23:30' },
    priceRange: '$$$',
    description: { en: 'True Italian flavors in the heart of Praia de Iracema.', pt: 'Sabores italianos verdadeiros no coração da Praia de Iracema.', es: 'Verdaderos sabores italianos en el corazón de Praia de Iracema.', fr: 'De vraies saveurs italiennes au cœur de Praia de Iracema.' },
    imageUrl: 'https://picsum.photos/seed/bella/800/600',
    coords: { lat: -3.7225, lng: -38.5122 }
  },
  {
    id: 'balcone-resto',
    name: { en: 'Balcone Restô', pt: 'Balcone Restô', es: 'Balcone Restô', fr: 'Balcone Restô' },
    cuisine: { en: 'Contemporary Italian', pt: 'Italiana Contemporânea', es: 'Italiana Contemporánea', fr: 'Italien Contemporain' },
    category: 'Italian',
    rating: 4.6,
    address: { en: '1000 Historiador Raimundo Girão Avenue', pt: 'Av. Hist. Raimundo Girão, 1000', es: 'Avenida Hist. Raimundo Girão, 1000', fr: 'Avenue Hist. Raimundo Girão, 1000' },
    openingHours: { en: '06:00 PM - 11:00 PM', pt: '18:00 - 23:00', es: '18:00 - 23:00', fr: '18:00 - 23:00' },
    priceRange: '$$',
    description: { en: 'Modern Italian dishes with a focus on fresh ingredients.', pt: 'Pratos italianos modernos com foco em ingredientes frescos.', es: 'Platos italianos modernos centrados en ingredientes frescos.', fr: 'Plats italiens modernes mettant l\'accent sur les ingrédients frais.' },
    imageUrl: 'https://picsum.photos/seed/balcone/800/600',
    coords: { lat: -3.7228, lng: -38.5108 }
  },
  {
    id: 'varanda-tropical',
    name: { en: 'Varanda Tropical', pt: 'Varanda Tropical', es: 'Varanda Tropical', fr: 'Varanda Tropical' },
    cuisine: { en: 'Regional & Seafood', pt: 'Regional e Frutos do Mar', es: 'Regional y Mariscos', fr: 'Régional et Fruits de mer' },
    category: 'Beach Restaurants',
    rating: 4.4,
    address: { en: 'Beira Mar Avenue, 2300', pt: 'Av. Beira Mar, 2300', es: 'Avenida Beira Mar, 2300', fr: 'Avenue Beira Mar, 2300' },
    openingHours: { en: '11:00 AM - 11:00 PM', pt: '11:00 - 23:00', es: '11:00 - 23:00', fr: '11:00 - 23:00' },
    priceRange: '$$',
    description: { en: 'Casual ocean-view dining with local specialties.', pt: 'Jantar casual com vista para o mar e especialidades locais.', es: 'Cena informal con vistas al mar y especialidades locales.', fr: 'Dîner décontracté avec vue sur l\'océan et spécialités locales.' },
    imageUrl: 'https://picsum.photos/seed/varanda/800/600',
    coords: { lat: -3.7248, lng: -38.5008 }
  },
  {
    id: 'parrileiro',
    name: { en: 'Parrileiro', pt: 'Parrileiro', es: 'Parrileiro', fr: 'Parrileiro' },
    cuisine: { en: 'Uruguayan Grill', pt: 'Grelhados Uruguaios', es: 'Parrilla Uruguaya', fr: 'Grill Uruguayen' },
    category: 'Fine Dining',
    rating: 4.7,
    address: { en: 'Dom Luís Avenue, 1100', pt: 'Av. Dom Luís, 1100', es: 'Avenida Dom Luís, 1100', fr: 'Avenue Dom Luís, 1100' },
    openingHours: { en: '12:00 PM - 11:00 PM', pt: '12:00 - 23:00', es: '12:00 - 23:00', fr: '12:00 - 23:00' },
    priceRange: '$$$',
    description: { en: 'Authentic South American grilling techniques and cuts.', pt: 'Técnicas e cortes de grelhados autênticos da América do Sul.', es: 'Técnicas y cortes de parrilla sudamericanos auténticos.', fr: 'Techniques et coupes de grillades sud-américaines authentiques.' },
    imageUrl: 'https://picsum.photos/seed/parrileiro/800/600',
    coords: { lat: -3.7348, lng: -38.4892 }
  },
  {
    id: 'santa-clara',
    name: {
      en: 'Santa Clara Organic Coffee',
      pt: 'Santa Clara Café Orgânico',
      es: 'Santa Clara Café Orgánico',
      fr: 'Café Bio Santa Clara'
    },
    cuisine: {
      en: 'Specialty Coffee & Snacks',
      pt: 'Cafés Especiais e Lanches',
      es: 'Cafés Especiales y Aperitivos',
      fr: 'Cafés de spécialité et collations'
    },
    category: 'Cafés',
    rating: 4.9,
    address: {
      en: '81 Dragão do Mar Street',
      pt: 'R. Dragão do Mar, 81',
      es: 'Calle Dragão do Mar, 81',
      fr: 'Rue Dragão do Mar, 81'
    },
    openingHours: {
      en: '08:00 AM - 10:00 PM',
      pt: '08:00 - 22:00',
      es: '08:00 - 22:00',
      fr: '08h00 - 22h00'
    },
    priceRange: '$',
    description: {
      en: 'Located in the Dragão do Mar cultural center, serving award-winning organic coffee from the mountains of Ceará.',
      pt: 'Localizado no centro cultural Dragão do Mar, servindo cafés orgânicos premiados das serras do Ceará.',
      es: 'Ubicado en el centro cultural Dragão do Mar, sirve cafés orgánicos galardonados de las montañas de Ceará.',
      fr: 'Situé dans le centre culturel Dragão do Mar, servant un café biologique primé des montagnes du Ceará.'
    },
    imageUrl: 'https://www.3coracoes.com.br/wp-content/uploads/2019/06/cafeteria-santa-clara-fortaleza-cine-sao-luiz-1024x683.jpg',
    coords: { lat: -3.7219, lng: -38.5209 }
  },
  {
    id: 'lo-restaurante',
    name: {
      en: "L'Ô Restaurant",
      pt: "L'Ô Restaurante",
      es: "L'Ô Restaurante",
      fr: "L'Ô Restaurant"
    },
    cuisine: {
      en: 'Contemporary European',
      pt: 'Europeia Contemporânea',
      es: 'Europea Contemporánea',
      fr: 'Européenne Contemporaine'
    },
    category: 'Fine Dining',
    rating: 4.9,
    address: {
      en: '217 Pessoa Anta Avenue',
      pt: 'Av. Pessoa Anta, 217',
      es: 'Avenida Pessoa Anta, 217',
      fr: 'Avenue Pessoa Anta, 217'
    },
    openingHours: {
      en: '07:00 PM - 11:30 PM',
      pt: '19:00 - 23:30',
      es: '19:00 - 23:30',
      fr: '19h00 - 23h30'
    },
    priceRange: '$$$$',
    description: {
      en: 'Sophisticated venue featuring a modern menu with French and Italian influences in a stunning architectural setting.',
      pt: 'Local sofisticado com um menu moderno de influências francesas e italianas em um ambiente arquitetônico deslumbrante.',
      es: 'Lugar sofisticado con un menú moderno de influencias francesas e italianas en un entorno arquitectónico impresionante.',
      fr: 'Lieu sophistiqué doté d\'un menu moderne aux influences françaises et italiennes dans un cadre architectural époustouflant.'
    },
    imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/6a/ab/ea/salao-principal.jpg?w=900&h=500&s=1',
    coords: { lat: -3.7205, lng: -38.5215 }
  },
  {
    id: 'cantinho-faustino',
    name: {
      en: 'Faustino Corner',
      pt: 'Cantinho do Faustino',
      es: 'Rincón de Faustino',
      fr: 'Le Coin de Faustino'
    },
    cuisine: {
      en: 'Regional Brazilian',
      pt: 'Regional Brasileira',
      es: 'Regional Brasileña',
      fr: 'Régional Brésilien'
    },
    category: 'Brazilian Food',
    rating: 4.6,
    address: {
      en: '736 Tibúrcio Cavalcante Street',
      pt: 'R. Tibúrcio Cavalcante, 736',
      es: 'Calle Tibúrcio Cavalcante, 736',
      fr: 'Rue Tibúrcio Cavalcante, 736'
    },
    openingHours: {
      en: '11:00 AM - 11:00 PM',
      pt: '11:00 - 23:00',
      es: '11:00 - 23:00',
      fr: '11h00 - 23h00'
    },
    priceRange: '$$',
    description: {
      en: 'A classic local spot famous for "Carne de Sol" (sun-dried meat) and traditional side dishes in a cozy atmosphere.',
      pt: 'Um local clássico famoso pela Carne de Sol e acompanhamentos tradicionais em um ambiente acolhedor.',
      es: 'Un lugar clásico famoso por su Carne de Sol y acompañamientos tradicionales en un ambiente acogedor.',
      fr: 'Un lieu classique célèbre pour sa Carne de Sol et ses accompaniments traditionnels dans une ambiance chaleureuse.'
    },
    imageUrl: 'https://cms-blog.saipos.com/4Cantinho-do-Faustino-SAIPOS-Sistema-para-Restaurantes.jpg',
    coords: { lat: -3.7285, lng: -38.5085 }
  }
];

export const ATTRACTIONS: Attraction[] = [
  {
    id: 'iracema',
    title: { en: 'Iracema Beach', pt: 'Praia de Iracema', es: 'Playa de Iracema', fr: 'Plage d\'Iracema' },
    description: { en: 'Iconic beach known for its bohemian spirit and sunset views.', pt: 'Praia icônica conhecida por seu espírito boêmio e vista do pôr do sol.', es: 'Playa icónica conocida por su espíritu bohemio y vistas al atardecer.', fr: 'Plage emblématique connue pour son esprit bohème et ses vues sur le coucher du soleil.' },
    address: { en: 'Iracema Beach, Fortaleza - CE', pt: 'Praia de Iracema, Fortaleza - CE', es: 'Playa de Iracema, Fortaleza - CE', fr: 'Plage d\'Iracema, Fortaleza - CE' },
    openingHours: { en: 'Open 24h', pt: 'Aberto 24h', es: 'Abierto 24h', fr: 'Ouvert 24h' },
    rating: 4.7,
    category: 'Beaches',
    imageUrl: getImg('iracema'),
    coords: { lat: -3.7208, lng: -38.5173 },
    nearbyRestaurantIds: ['lo-restaurante', 'la-bella-italia']
  },
  {
    id: 'porto-dunas',
    title: { en: 'Porto das Dunas', pt: 'Porto das Dunas', es: 'Porto das Dunas', fr: 'Porto das Dunas' },
    description: { en: 'Home to Beach Park, featuring high dunes and crystal clear waters.', pt: 'Lar do Beach Park, com dunas altas e águas cristalinas.', es: 'Hogar de Beach Park, con dunas altas y aguas cristalinas.', fr: 'Siège du Beach Park, avec de hautes dunes et des eaux cristallines.' },
    address: { en: 'Aquiraz, Metropolitan Area', pt: 'Aquiraz, Região Metropolitana', es: 'Aquiraz, Área Metropolitana', fr: 'Aquiraz, Zone métropolitaine' },
    openingHours: { en: 'Open 24h', pt: 'Aberto 24h', es: 'Abierto 24h', fr: 'Ouvert 24h' },
    rating: 4.9,
    category: 'Beaches',
    imageUrl: getImg('porto-dunas'),
    coords: { lat: -3.8392, lng: -38.3912 },
    nearbyRestaurantIds: []
  },
  {
    id: 'meireles',
    title: { en: 'Meireles Beach', pt: 'Praia do Meireles', es: 'Playa de Meireles', fr: 'Plage de Meireles' },
    description: { en: 'The most developed tourist area, famous for its craft market.', pt: 'A área turística mais desenvolvida, famosa por sua feirinha de artesanato.', es: 'La zona turística más desarrollada, famosa por su mercado artesanal.', fr: 'Le quartier touristique le plus développé, célèbre pour son marché artisanal.' },
    address: { en: 'Beira Mar Avenue, Meireles', pt: 'Av. Beira Mar, Meireles', es: 'Avenida Beira Mar, Meireles', fr: 'Avenue Beira Mar, Meireles' },
    openingHours: { en: 'Open 24h', pt: 'Aberto 24h', es: 'Abierto 24h', fr: 'Ouvert 24h' },
    rating: 4.8,
    category: 'Beaches',
    imageUrl: getImg('meireles'),
    coords: { lat: -3.7252, lng: -38.4982 },
    nearbyRestaurantIds: ['geppos', 'ryori', 'colher-pau']
  },
  {
    id: 'mucuripe',
    title: { en: 'Mucuripe Beach', pt: 'Praia do Mucuripe', es: 'Playa de Mucuripe', fr: 'Plage de Mucuripe' },
    description: { en: 'Famous for its traditional jangada boats and the fresh fish market.', pt: 'Famosa pelas suas jangadas tradicionais e pelo mercado de peixes frescos.', es: 'Famosa por sus tradicionales jangadas y su mercado de pescado fresco.', fr: 'Célèbre pour ses jangadas traditionnelles et son marché aux poissons frais.' },
    address: { en: 'Beira Mar Avenue, Mucuripe', pt: 'Av. Beira Mar, Mucuripe', es: 'Avenida Beira Mar, Mucuripe', fr: 'Avenue Beira Mar, Mucuripe' },
    openingHours: { en: 'Open 24h', pt: 'Aberto 24h', es: 'Abierto 24h', fr: 'Ouvert 24h' },
    rating: 4.7,
    category: 'Beaches',
    imageUrl: getImg('mucuripe'),
    coords: { lat: -3.7272, lng: -38.4862 },
    nearbyRestaurantIds: ['coco-bambu']
  },
  {
    id: 'futuro',
    title: { en: 'Future Beach', pt: 'Praia do Futuro', es: 'Playa del Futuro', fr: 'Plage du Futur' },
    description: { en: 'Best infrastructure for swimming, with famous mega-barracas.', pt: 'Melhor infraestrutura para banho, com as famosas mega-barracas.', es: 'Mejor infraestructura para el baño, con las famosas mega-barracas.', fr: 'Meilleure infrastructure pour la baignade, avec les célèbres méga-barracas.' },
    address: { en: 'Clóvis Arrais Maia Avenue', pt: 'Av. Clóvis Arrais Maia', es: 'Avenida Clóvis Arrais Maia', fr: 'Avenue Clóvis Arrais Maia' },
    openingHours: { en: 'Open 24h', pt: 'Aberto 24h', es: 'Abierto 24h', fr: 'Ouvert 24h' },
    rating: 4.8,
    category: 'Beaches',
    imageUrl: getImg('futuro'),
    coords: { lat: -3.7383, lng: -38.4552 },
    nearbyRestaurantIds: []
  },
  {
    id: 'sabiaguaba',
    title: { en: 'Sabiaguaba Beach', pt: 'Praia da Sabiaguaba', es: 'Playa de Sabiaguaba', fr: 'Plage de Sabiaguaba' },
    description: { en: 'A wild, preserved beach where the river meets the sea.', pt: 'Uma praia selvagem e preservada onde o rio encontra o mar.', es: 'Una playa salvaje y preservada donde el río se une al mar.', fr: 'Une plage sauvage et préservée où le fleuve rencontre la mer.' },
    address: { en: 'Sabiaguaba, Fortaleza', pt: 'Sabiaguaba, Fortaleza', es: 'Sabiaguaba, Fortaleza', fr: 'Sabiaguaba, Fortaleza' },
    openingHours: { en: 'Open 24h', pt: 'Aberto 24h', es: 'Abierto 24h', fr: 'Ouvert 24h' },
    rating: 4.6,
    category: 'Beaches',
    imageUrl: getImg('sabiaguaba'),
    coords: { lat: -3.7782, lng: -38.4412 },
    nearbyRestaurantIds: []
  },
  {
    id: 'mercado',
    title: { en: 'Central Market', pt: 'Mercado Central', es: 'Mercado Central', fr: 'Marché Central' },
    description: { en: 'A massive hub for local crafts and traditional Ceará lace.', pt: 'Um enorme centro de artesanato local e rendas tradicionais do Ceará.', es: 'Un enorme centro de artesanía local y encaje tradicional de Ceará.', fr: 'Un immense centre d\'artisanat local et de dentelle traditionnelle du Ceará.' },
    address: { en: '199 Alberto Nepomuceno Avenue', pt: 'Av. Alberto Nepomuceno, 199', es: 'Avenida Alberto Nepomuceno, 199', fr: 'Avenue Alberto Nepomuceno, 199' },
    openingHours: { en: '08:00 AM - 06:00 PM', pt: '08:00 - 18:00', es: '08:00 - 18:00', fr: '08h00 - 18h00' },
    rating: 4.6,
    category: 'Culture',
    imageUrl: getImg('mercado'),
    coords: { lat: -3.7231, lng: -38.5255 },
    nearbyRestaurantIds: ['santa-clara', 'lo-restaurante']
  },
  {
    id: 'museu-foto',
    title: { en: 'Photography Museum', pt: 'Museu da Fotografia', es: 'Museu de la Fotografía', fr: 'Musée de la Photographie' },
    description: { en: 'One of Brazil\'s most important private collections of photography.', pt: 'Uma das mais importantes coleções particulares de fotografia do Brasil.', es: 'Una de las colecciones privadas de fotografía más importantes de Brasil.', fr: 'L\'une des plus importantes collections privées de photographies du Brésil.' },
    address: { en: '545 Frederico Borges Street', pt: 'Rua Frederico Borges, 545', es: 'Calle Frederico Borges, 545', fr: 'Rue Frederico Borges, 545' },
    openingHours: { en: '12:00 PM - 08:00 PM', pt: '12:00 - 20:00', es: '12:00 - 20:00', fr: '12h00 - 20h00' },
    rating: 4.9,
    category: 'Culture',
    imageUrl: getImg('museu-foto'),
    coords: { lat: -3.7312, lng: -38.4882 },
    nearbyRestaurantIds: ['moleskine']
  },
  {
    id: 'museu-ceara',
    title: { en: 'Ceará Museum', pt: 'Museu do Ceará', es: 'Museu de Ceará', fr: 'Musée du Ceará' },
    description: { en: 'Historic palace showcasing the state\'s history and culture.', pt: 'Palácio histórico que mostra a história e a cultura do estado.', es: 'Palacio histórico que muestra la historia y la cultura del estado.', fr: 'Palais historique retraçant l\'histoire et la culture de l\'État.' },
    address: { en: 'Senador Alencar Street, 348', pt: 'Rua Sen. Alencar, 348', es: 'Calle Sen. Alencar, 348', fr: 'Rue Sen. Alencar, 348' },
    openingHours: { en: '09:00 AM - 05:00 PM', pt: '09:00 - 17:00', es: '09:00 - 17:00', fr: '09h00 - 17h00' },
    rating: 4.7,
    category: 'Historical Places',
    imageUrl: getImg('museu-ceara'),
    coords: { lat: -3.7262, lng: -38.5262 },
    nearbyRestaurantIds: []
  },
  {
    id: 'mis-ce',
    title: { en: 'Image and Sound Museum', pt: 'Museu da Imagem e do Som', es: 'Museo de Imagen y Sonido', fr: 'Musée de l\'Image et du Son' },
    description: { en: 'High-tech cultural space for digital art and local heritage.', pt: 'Espaço cultural de alta tecnologia para arte digital e patrimônio local.', es: 'Espacio cultural de alta tecnología para el arte digital y el patrimonio local.', fr: 'Espace culturel high-tech dédié à l\'art numérique et au patrimoine local.' },
    address: { en: '441 Barão de Studart Avenue', pt: 'Av. Barão de Studart, 441', es: 'Avenida Barão de Studart, 441', fr: 'Avenue Barão de Studart, 441' },
    openingHours: { en: '10:00 AM - 08:00 PM', pt: '10:00 - 20:00', es: '10:00 - 20:00', fr: '10h00 - 20h00' },
    rating: 4.8,
    category: 'Culture',
    imageUrl: getImg('mis-ce'),
    coords: { lat: -3.7342, lng: -38.5022 },
    nearbyRestaurantIds: []
  },
  {
    id: 'passeio-publico',
    title: { en: 'Passeio Público', pt: 'Passeio Público', es: 'Passeio Público', fr: 'Passeio Público' },
    description: { en: 'Fortaleza\'s oldest square, with centuries-old trees and history.', pt: 'A praça mais antiga de Fortaleza, com árvores centenárias e história.', es: 'La plaza más antigua de Fortaleza, com árvores centenárias e história.', fr: 'La plus ancienne place de Fortaleza, avec des arbres centenaires et chargée d\'histoire.' },
    address: { en: 'Alberto Nepomuceno Avenue', pt: 'Av. Alberto Nepomuceno', es: 'Avenida Alberto Nepomuceno', fr: 'Avenue Alberto Nepomuceno' },
    openingHours: { en: '06:00 AM - 08:00 PM', pt: '06:00 - 20:00', es: '06:00 - 20:00', fr: '06h00 - 20h00' },
    rating: 4.6,
    category: 'Historical Places',
    imageUrl: getImg('passeio-publico'),
    coords: { lat: -3.7222, lng: -38.5262 },
    nearbyRestaurantIds: []
  },
  {
    id: 'iracema-guardia',
    title: { en: 'Guardian Iracema Statue', pt: 'Iracema Guardiã', es: 'Iracema Guardiana', fr: 'Iracema Gardienne' },
    description: { en: 'The most iconic monument of Fortaleza at Praia de Iracema.', pt: 'O monumento mais icônico de Fortaleza na Praia de Iracema.', es: 'El monumento más icónico de Fortaleza en la playa de Iracema.', fr: 'Le monument le plus emblématique de Fortaleza sur la plage d\'Iracema.' },
    address: { en: 'Aterro de Iracema', pt: 'Aterro da Praia de Iracema', es: 'Aterro de Iracema', fr: 'Aterro d\'Iracema' },
    openingHours: { en: 'Open 24h', pt: 'Aberto 24h', es: 'Abierto 24h', fr: 'Ouvert 24h' },
    rating: 4.8,
    category: 'Historical Places',
    imageUrl: getImg('iracema-guardia'),
    coords: { lat: -3.7202, lng: -38.5132 },
    nearbyRestaurantIds: []
  },
  {
    id: 'jardim-japones',
    title: { en: 'Japanese Garden', pt: 'Jardim Japonês', es: 'Jardín Japonés', fr: 'Jardin Japonais' },
    description: { en: 'A peaceful Zen space overlooking the Meireles coast.', pt: 'Um espaço Zen tranquilo com vista para a costa do Meireles.', es: 'Un tranquilo espacio Zen con vistas a la costa de Meireles.', fr: 'Un espace Zen paisible surplombant la côte de Meireles.' },
    address: { en: 'Beira Mar Avenue, Meireles', pt: 'Av. Beira Mar, Meireles', es: 'Avenida Beira Mar, Meireles', fr: 'Avenue Beira Mar, Meireles' },
    openingHours: { en: '08:00 AM - 10:00 PM', pt: '08:00 - 22:00', es: '08:00 - 22:00', fr: '08h00 - 22h00' },
    rating: 4.7,
    category: 'Parks',
    imageUrl: getImg('jardim-japones'),
    coords: { lat: -3.7272, lng: -38.4882 },
    nearbyRestaurantIds: ['coco-bambu']
  },
  {
    id: 'tja',
    title: { en: 'José de Alencar Theater', pt: 'Theatro José de Alencar', es: 'Teatro José de Alencar', fr: 'Théâtre José de Alencar' },
    description: { en: 'Art Nouveau landmark and architectural treasure of Fortaleza.', pt: 'Marco do Art Nouveau e tesouro arquitetônico de Fortaleza.', es: 'Hito del Art Nouveau y tesoro arquitectónico de Fortaleza.', fr: 'Monument Art nouveau et trésor architectural de Fortaleza.' },
    address: { en: '696 Liberato Barroso Street', pt: 'Rua Liberato Barroso, 696', es: 'Calle Liberato Barroso, 696', fr: 'Rue Liberato Barroso, 696' },
    openingHours: { en: '09:00 AM - 05:00 PM', pt: '09:00 - 17:00', es: '09:00 - 17:00', fr: '09h00 - 17h00' },
    rating: 4.9,
    category: 'Culture',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Theatro_Jos%C3%A9_de_Alencar_-_Fortaleza%2C_Cear%C3%A1.jpg',
    coords: { lat: -3.7288, lng: -38.5305 },
    nearbyRestaurantIds: []
  },
  {
    id: 'belchior',
    title: { en: 'Belchior Cultural Center', pt: 'Centro Cultural Belchior', es: 'Centro Cultural Belchior', fr: 'Centre Culturel Belchior' },
    description: { en: 'Dedicated to Ceará\'s music and artistic heritage.', pt: 'Dedicado à música e ao patrimônio artístico do Ceará.', es: 'Dedicado a la música y al patrimonio artístico de Ceará.', fr: 'Dédié à la musique et au patrimoine artistique du Ceará.' },
    address: { en: '440 Pacatuba Street', pt: 'Rua dos Pacatuba, 440', es: 'Calle Pacatuba, 440', fr: 'Rue Pacatuba, 440' },
    openingHours: { en: '10:00 AM - 09:00 PM', pt: '10:00 - 21:00', es: '10:00 - 21:00', fr: '10h00 - 21h00' },
    rating: 4.7,
    category: 'Culture',
    imageUrl: 'https://www.ipatrimonio.org/wp-content/uploads/2019/04/Fortaleza-Centro-Cultural-Belchior-Imagem-Governo-do-Estado.jpg',
    coords: { lat: -3.7215, lng: -38.5155 },
    nearbyRestaurantIds: []
  },
  {
    id: 'estoril',
    title: { en: 'Estoril', pt: 'Estoril', es: 'Estoril', fr: 'Estoril' },
    description: { en: 'Historic building at Iracema Beach, heart of the local nightlife.', pt: 'Edifício histórico na Praia de Iracema, coração da vida noturna local.', es: 'Edificio histórico en la playa de Iracema, corazón de la vida nocturna local.', fr: 'Bâtiment historique sur la plage d\'Iracema, cœur de la vie nocturne locale.' },
    address: { en: '397 Tabajaras Street', pt: 'Rua dos Tabajaras, 397', es: 'Calle Tabajaras, 397', fr: 'Rue Tabajaras, 397' },
    openingHours: { en: '09:00 AM - 06:00 PM', pt: '09:00 - 18:00', es: '09:00 - 18:00', fr: '09h00 - 18h00' },
    rating: 4.6,
    category: 'Culture',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Estoril_Fortaleza_2025.jpg',
    coords: { lat: -3.7212, lng: -38.5185 },
    nearbyRestaurantIds: []
  },
  {
    id: 'coco',
    title: { en: 'Cocó Park', pt: 'Parque do Cocó', es: 'Parque de Cocó', fr: 'Parc du Cocó' },
    description: { en: 'A vast ecological park protecting the Cocó River mangrove.', pt: 'Um vasto parque ecológico que protege o manguezal do Rio Cocó.', es: 'Un vasto parque ecológico que protege el manglar del río Cocó.', fr: 'Un vaste parc écologique protégeant la mangrove de la rivière Cocó.' },
    address: { en: 'Padre Antônio Tomás Avenue', pt: 'Av. Padre Antônio Tomás', es: 'Avenida Padre Antônio Tomás', fr: 'Avenue Padre Antônio Tomás' },
    openingHours: { en: '05:30 AM - 10:00 PM', pt: '05:30 - 22:00', es: '05:30 - 22:00', fr: '05h30 - 22h00' },
    rating: 4.7,
    category: 'Parks',
    imageUrl: getImg('coco'),
    coords: { lat: -3.7468, lng: -38.4835 },
    nearbyRestaurantIds: ['cantinho-faustino']
  },
  {
    id: 'beiramar',
    title: { en: 'Beira Mar Avenue', pt: 'Avenida Beira Mar', es: 'Avenida Beira Mar', fr: 'Avenue Beira Mar' },
    description: { en: 'Traditional tourist promenade and sunset hub.', pt: 'Passeio turístico tradicional e hub de pôr do sol.', es: 'Paseo turístico tradicional y centro de atardeceres.', fr: 'Promenade touristique traditionnelle et point de vue sur le coucher du soleil.' },
    address: { en: 'Beira Mar Avenue', pt: 'Av. Beira Mar, Fortaleza', es: 'Avenida Beira Mar, Fortaleza', fr: 'Avenue Beira Mar, Fortaleza' },
    openingHours: { en: 'Open 24h', pt: 'Aberto 24h', es: 'Abierto 24h', fr: 'Ouvert 24h' },
    rating: 4.8,
    category: 'Beaches',
    imageUrl: getImg('beiramar'),
    coords: { lat: -3.7258, lng: -38.4905 },
    nearbyRestaurantIds: ['coco-bambu']
  },
  {
    id: 'catedral',
    title: { en: 'Metropolitan Cathedral', pt: 'Catedral Metropolitana', es: 'Catedral Metropolitana', fr: 'Cathédrale Métropolitaine' },
    description: { en: 'Stunning neo-gothic cathedral inspired by Cologne.', pt: 'Deslumbrante catedral neogótica inspirada em Colônia.', es: 'Impresionante catedral neogótica inspirada en Colonia.', fr: 'Superbe cathédrale néogothique inspirée de Cologne.' },
    address: { en: 'Metropolitana Square, Centro', pt: 'Praça da Sé, Centro', es: 'Plaza de la Sé, Centro', fr: 'Place de la Sé, Centre' },
    openingHours: { en: '08:00 AM - 06:00 PM', pt: '08:00 - 18:00', es: '08:00 - 18:00', fr: '08h00 - 18h00' },
    rating: 4.8,
    category: 'Historical Places',
    imageUrl: getImg('catedral'),
    coords: { lat: -3.7235, lng: -38.5265 },
    nearbyRestaurantIds: ['mercado']
  }
];
