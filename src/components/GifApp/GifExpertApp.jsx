import { useState } from "react";
import { AddCategory, GifGrid, FavoriteCollection, FavoritesProvider } from '../GifApp';

export const GifExpertApp = ({ favoritesOnly = false }) => {
  const [categories, setCategories] = useState(['Sun Wukong']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <FavoritesProvider>
      {/* Input de búsqueda al principio */}
      <AddCategory onNewCategory={onAddCategory} />

      {favoritesOnly ? (
        <FavoriteCollection />
      ) : (
        <>
          {categories.map((category) => (
            <GifGrid key={category} category={category} />
          ))}
        </>
      )}
    </FavoritesProvider>
  );
};
