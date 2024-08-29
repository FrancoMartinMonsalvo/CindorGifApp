// FavoriteCollection.jsx
import React, { useContext } from 'react';
import { FavoritesContext } from '../GifApp';

export const FavoriteCollection = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <h2>Mis favoritos</h2>
      <div className="card-grid">
        {favorites.map((gif) => (
          <div key={gif.id} className="card">
            <img src={gif.url} alt={gif.title} />
            <p>{gif.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
