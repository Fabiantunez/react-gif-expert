import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    // categories.push(newCategory)

    if (categories.includes(newCategory)) return; // Si la categoria ya existe no haga nada, pero si existe lo va insertar

    setCategories([newCategory, ...categories]); //Esta es una forma de insertar una nueva cat, desestrecturo igual que el ej de abajo
    //setCategories( cat => [ ...cat, 'Valorant']);
  };

  return (
    <>
      
      <h1>GifExpertApp</h1>

      <AddCategory
        
        onNewCategory={(value) => onAddCategory(value)} //tenemos un argumento donde se lo enviamos a una func => cod limpio seria solo onAddCategory
      />


        {categories.map((category) => 
          (
            <GifGrid 
            key={ category }
            category={ category }/>
          )
        )} 
      
     
    </>
  );
};
