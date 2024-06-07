import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { Photo } from '../types/Photo';

interface PhotosState {
  favorites: Photo[];
  toggleFavorite: (photo: Photo) => void;
}

export const useFavoritesStore = create<PhotosState>()(
  persist(
    set => ({
      favorites: [],
      toggleFavorite: photo =>
        set(state => {
          const isFavorite = state.favorites.some(item => item.id === photo.id);
          const newPhotos = isFavorite
            ? state.favorites.filter(item => item.id !== photo.id)
            : [...state.favorites, photo];

          return { favorites: newPhotos };
        })
    }),
    { name: 'favorites' }
  )
);
