import React, { createContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext({
  favorites: [],
  toggleFavorite: () => {},
});

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Cargar los favoritos desde localStorage
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Validar los favoritos y filtrar los que no tienen id, title, o url
    const validFavorites = storedFavorites.filter(favGif => favGif.id && favGif.title && favGif.url);

    // Actualizar el estado y localStorage con los favoritos válidos
    setFavorites(validFavorites);
    localStorage.setItem('favorites', JSON.stringify(validFavorites));
  }, []);

  const toggleFavorite = (id) => {
    const updatedFavorites = favorites.includes(id)
      ? favorites.filter(favId => favId !== id)
      : [...favorites, id];

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
