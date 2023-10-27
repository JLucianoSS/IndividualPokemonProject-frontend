
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getPokemons } from '../redux/actions-types'

export const useAllPokemons = () => {
  /* 
  Nota: getPokemons() es una action/function que retorna una promesa, por lo tanto
  puede tardar, debido a ello es que estoy usando el await para que espere mientras que el 
  dispatch asigna todos los pokemons al estado global. De esa manera el isLoading actualiza 
  el estado cuando se resuelve esa promesa.
*/

  const dispatch = useDispatch();
  const { pokemons } = useSelector((state) => state);
  const [isLoading, setIsLoading] = useState(true);

  const getAllPokemons = async () => {
    await dispatch(getPokemons());
    setIsLoading(false);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);


  return {
    pokemons,
    isLoading
  }
};
