import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../redux/actions-types";


/* 
  Nota: getPokemons() es una action/function que retorna una promesa, por lo tanto
  puede tardar, debido a ello es que estoy usando el await para que espere mientras que el 
  dispatch asigna todos los pokemons al estado global. De esa manera el isLoading actualiza 
  el estado cuando se resuelve esa promesa.
*/

export const useHomePage = () => {

  const input = useSelector((state) => state.input);
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  /*Esta es una funcion axiliar, porque useEffect no permite usar async await */
  const getAllPokemons = async() => {
    await dispatch(getPokemons()); 
    setIsLoading(false)
    console.log(pokemons);
  }

  /* Renderizado de los pokemons/cards */
  /* Se ejecuta una ves cuando el componente se monta */
  useEffect(() => {
   getAllPokemons();
  }, []);

  /* Se ejecuta cada ves el estado global input cambia*/
  useEffect(() => {
    if(input.length === 0){
      // setIsLoading(false)
      getAllPokemons();
    }
  }, [input]);

  return {
    pokemons,
    isLoading
  }
}
