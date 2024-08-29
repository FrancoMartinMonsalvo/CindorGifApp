// useFetchGifs.js
import { useEffect, useState } from "react";
import { getGif } from "../../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGif(category);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, [category]); // Asegúrate de que se ejecute cuando cambie la categoría

  return {
    images,
    isLoading
  };
};
