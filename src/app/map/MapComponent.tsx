
'use client';

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, ZoomControl } from 'react-leaflet';
import L from 'leaflet';
import { ATTRACTIONS, RESTAURANTS } from '@/lib/data';
import { MapPin, Utensils, Navigation, Info } from 'lucide-react';
import { renderToString } from 'react-dom/server';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

// Fix for default Leaflet icons in Next.js
const attractionIcon = L.divIcon({
  html: renderToString(
    <div className="relative">
      <div className="absolute -inset-2 bg-primary/20 rounded-full animate-ping" />
      <div className="bg-primary p-2 rounded-full border-2 border-white/20 shadow-xl shadow-primary/20">
        <MapPin className="w-4 h-4 text-primary-foreground" />
      </div>
    </div>
  ),
  className: 'custom-div-icon',
  iconSize: [32, 32],
  iconAnchor: [16, 16],
});

const restaurantIcon = L.divIcon({
  html: renderToString(
    <div className="bg-secondary p-2 rounded-full border-2 border-white/20 shadow-xl shadow-secondary/20">
      <Utensils className="w-4 h-4 text-white" />
    </div>
  ),
  className: 'custom-div-icon',
  iconSize: [28, 28],
  iconAnchor: [14, 14],
});

const userIcon = L.divIcon({
  html: renderToString(
    <div className="relative">
      <div className="absolute -inset-3 bg-blue-500/30 rounded-full animate-pulse" />
      <div className="bg-blue-500 w-4 h-4 rounded-full border-2 border-white ring-4 ring-blue-500/20" />
    </div>
  ),
  className: 'custom-div-icon',
  iconSize: [16, 16],
  iconAnchor: [8, 8],
});

function MapHandler({ userCoords }: { userCoords: [number, number] | null }) {
  const map = useMap();
  useEffect(() => {
    if (userCoords) {
      map.flyTo(userCoords, 14);
    }
  }, [userCoords, map]);
  return null;
}

export default function MapComponent() {
  const [userCoords, setUserCoords] = useState<[number, number] | null>(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setUserCoords([pos.coords.latitude, pos.coords.longitude]),
        (err) => console.log('Geolocation denied'),
        { enableHighAccuracy: true }
      );
    }
  }, []);

  const defaultCenter: [number, number] = [-3.725, -38.5]; // Fortaleza Center

  return (
    <MapContainer 
      center={defaultCenter} 
      zoom={13} 
      style={{ height: '100%', width: '100%' }}
      zoomControl={false}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      
      <ZoomControl position="topright" />
      <MapHandler userCoords={userCoords} />

      {/* User Location Marker */}
      {userCoords && (
        <Marker position={userCoords} icon={userIcon}>
          <Popup className="premium-popup">
            <div className="p-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-blue-400">Your Position</p>
            </div>
          </Popup>
        </Marker>
      )}

      {/* Attraction Markers */}
      {ATTRACTIONS.map((a) => (
        <Marker key={a.id} position={[a.coords.lat, a.coords.lng]} icon={attractionIcon}>
          <Popup className="premium-popup">
            <div className="w-56 overflow-hidden rounded-xl">
              <img src={a.imageUrl} alt="" className="w-full h-24 object-cover mb-3" />
              <Badge className="bg-primary/20 text-primary border-0 text-[8px] uppercase tracking-tighter mb-1">
                {a.category}
              </Badge>
              <h3 className="font-headline text-lg text-white mb-2 leading-tight">{a.title}</h3>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <Button asChild className="h-8 bg-white/10 hover:bg-white/20 text-[8px] uppercase font-bold rounded-lg border-0">
                  <Link href={`/attraction/${a.id}`}>Details</Link>
                </Button>
                <Button 
                  onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${a.coords.lat},${a.coords.lng}`, '_blank')}
                  className="h-8 bg-primary text-primary-foreground text-[8px] uppercase font-bold rounded-lg"
                >
                  Go
                </Button>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}

      {/* Restaurant Markers */}
      {RESTAURANTS.map((r) => (
        <Marker key={r.id} position={[r.coords.lat, r.coords.lng]} icon={restaurantIcon}>
          <Popup className="premium-popup">
            <div className="w-48">
              <Badge className="bg-secondary/20 text-secondary border-0 text-[8px] uppercase tracking-tighter mb-1">
                {r.category}
              </Badge>
              <h3 className="font-bold text-white mb-1">{r.name}</h3>
              <p className="text-[10px] text-muted-foreground line-clamp-1 italic mb-3">{r.cuisine}</p>
              <Button asChild className="w-full h-8 bg-secondary/80 hover:bg-secondary text-[8px] uppercase font-bold rounded-lg">
                <Link href={`/restaurant/${r.id}`}>Visit Profile</Link>
              </Button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
