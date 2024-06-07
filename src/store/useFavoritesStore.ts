import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { Photo } from '../types/Photo';

interface FavoritesState {
  favorites: Photo[];
  toggleFavorite: (photo: Photo) => void;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    set => ({
      favorites: [],
      toggleFavorite: photo =>
        set(state => {
          const isFavorite = state.favorites.some(item => item.id === photo.id);
          const newFavorites = isFavorite
            ? state.favorites.filter(item => item.id !== photo.id)
            : [...state.favorites, photo];

          return { favorites: newFavorites };
        })
    }),
    { name: 'favorites' }
  )
);
