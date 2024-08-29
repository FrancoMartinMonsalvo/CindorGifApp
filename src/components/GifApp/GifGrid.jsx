import { GifGridItem } from '../GifApp';
import { useFetchGifs } from "../../hooks/SearchGif/useFetchGifs";


export const GifGrid = ({ category }) => {
  const {images, isLoading} = useFetchGifs(category);

  return (
    <>
      <h3> {category} </h3>
      { isLoading && (<h2> Cargando </h2>)}
      <div className="card-grid">
        {
          images?.map( ( img  ) => (
            <GifGridItem key={img.id}
                         { ... img }
            />  
          ))
        }
      </div>
    </>
  )
}
