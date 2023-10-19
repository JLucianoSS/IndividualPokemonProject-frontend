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

  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  /*Esta es una funcion axiliar, porque useEffect no permite usar async await */
  const getAllPokemons = async() => {
    await dispatch(getPokemons()); 
    setIsLoading(false)
    console.log(pokemons);
    
  }

  /*Cuando el componente se monta, renderiza todos los pokemons/cards */
  useEffect(() => {
    getAllPokemons();
  }, [dispatch]);

  return {
    pokemons,
    isLoading
  }
}
