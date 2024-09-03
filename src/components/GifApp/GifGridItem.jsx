// GifGridItem.jsx
import Proptypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { FavoriteButton } from '../GifApp';

export const GifGridItem = ({ title, url, id }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favoritesFromLocalStorage = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favoritesFromLocalStorage.includes(id));
  }, [id]);

  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
      <FavoriteButton id={id} title={title} url={url} />
    </div>
  );
};

GifGridItem.proptypes = {
  title: Proptypes.string.isRequired,
  url: Proptypes.string.isRequired,
}
