import { Offer } from '../types/offer';

const AMSTERDAM_LOCATION = {
  latitude: 52.370216,
  longitude: 4.895168,
  zoom: 10,
};

export const offers: Offer[] = [
  {
    id: '1',
    title: 'Beautiful & luxurious studio at great location',
    type: 'Apartment',
    price: 120,
    isFavorite: true,
    isPremium: true,
    rating: 4.8,
    previewImage: 'img/apartment-01.jpg',
    city: { name: 'Amsterdam', location: AMSTERDAM_LOCATION },
    location: { latitude: 52.3909553943508, longitude: 4.85309666406198, zoom: 8 }
  },
  {
    id: '2',
    title: 'Wood and stone place',
    type: 'Room',
    price: 80,
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'img/room.jpg',
    city: { name: 'Amsterdam', location: AMSTERDAM_LOCATION },
    location: { latitude: 52.3609553943508, longitude: 4.85309666406198, zoom: 8 }
  },
  {
    id: '3',
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 132,
    isFavorite: true,
    isPremium: false,
    rating: 4.5,
    previewImage: 'img/apartment-02.jpg',
    city: { name: 'Amsterdam', location: AMSTERDAM_LOCATION },
    location: { latitude: 52.3909553943508, longitude: 4.929309666406198, zoom: 8 }
  },
  {
    id: '4',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: 180,
    isFavorite: false,
    isPremium: true,
    rating: 5,
    previewImage: 'img/apartment-03.jpg',
    city: { name: 'Amsterdam', location: AMSTERDAM_LOCATION },
    location: { latitude: 52.3809553943508, longitude: 4.939309666406198, zoom: 8 }
  }
];
