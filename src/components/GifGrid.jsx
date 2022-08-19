


import {GifItem} from "./GifItem";

import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

    
  
  

    const { images, isLoading } = useFetchGifs( category )
    

   

  return (
    <>
        <h3>{ category }</h3>
        {
          isLoading && ( <h2>Cargando...</h2> )  // si isLoading esta en false ya no continua haciendo las demas evaluaciones
        }


        <div className="card-grid">
          {
            images.map( ( image ) => (
              <GifItem
              key={ image.id }
              { ...image }
              //tambien lo puedo hacer asi
              //title= { image.title }
              //url= { image.url }
              />
            ))
          }
          
        </div>
    </>
  );
}


