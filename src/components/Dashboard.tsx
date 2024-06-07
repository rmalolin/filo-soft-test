import { useFavoritesStore } from '../store/useFavoritesStore';

import Card from './Card';

const Dashboard = () => {
  const { favorites } = useFavoritesStore();

  return (
    <>
      {favorites.length > 0 && <h2>Favorites:</h2>}

      <div className='dashboard-list'>
        {favorites.map(fav => (
          <Card key={fav.id} photo={fav} />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
