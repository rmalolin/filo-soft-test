import { forwardRef, useMemo } from 'react';

import { useFavoritesStore } from '../store/useFavoritesStore';
import { Photo } from '../types/Photo';

interface CardProps {
  photo: Photo;
}

const Card = forwardRef<HTMLDivElement, CardProps>(({ photo }, ref) => {
  const { favorites, toggleFavorite } = useFavoritesStore();

  const isFavorite = useMemo(
    () => favorites.some(fav => fav.id === photo.id),
    [favorites, photo.id]
  );

  return (
    <div className='list-item' ref={ref}>
      <img src={photo.thumbnailUrl} alt={photo.title} />
      <p>
        <span className='bold'>ID:</span> {photo.id}
      </p>
      <p>
        <span className='bold'>Title:</span> {photo.title}
      </p>
      <button onClick={() => toggleFavorite(photo)}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
});

Card.displayName = 'Card';
export default Card;
