import React from "react";

/* El nombre de nustros Custom React Hooks debe comenzar con "use" */
function useLocalStorage(itenName, initialValue) {
    const [error, setError] = React.useState(false);
    /* bandera para cambiar los estados de carga */
    const [loading, setLoading] = React.useState(true);
    
    /* React Hook Oficial (useState) */
    const [item, setItem] = React.useState(initialValue);
    
    /* Simula el tiempo de espera o error al consumir una API */
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itenName)
          let parsedItem;
          
          /* Local Storage solo almacena valores de tipo String */
          if (!localStorageItem) {
            localStorage.setItem(itenName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
          setItem(parsedItem);
          /* Indicamos que ya paso la espera*/
          setLoading(false);
          
        } catch (error) {
          setError(error);
        }
      }, 3000);
    });
  
    /* No se agrega dentro del efect ya que nos permite actualizar la información */
    /* Si la agregamos la información se mostrara en cada recarga y no cuando el usuario de click */
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itenName, stringifiedItem);
        /* Para que el usuario no necesite recargar la página para ver los cambios */
        setItem(newItem);
        
      } catch (error) {
        setError(error);
      }
    };
  
    /* Si el React Hook retorna más de una variable se recomienda cambiar array por object */
    return { 
      item,
      saveItem,
      loading,
      error,
    };
  }

  export {useLocalStorage};