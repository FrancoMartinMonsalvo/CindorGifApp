import React, { useContext } from 'react';
import { FavoritesContext } from './FavoritesContext';

export const FavoriteButton = ({ id, title, url }) => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  const isFavorite = favorites.some(favGif => favGif.id === id);

  return (
    <button className="fav-item" onClick={() => toggleFavorite({ id, title, url })}>
      {isFavorite ? '🖤' : '🤍'}
    </button>
  );
};
