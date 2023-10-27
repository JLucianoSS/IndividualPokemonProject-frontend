
import { useSelector } from "react-redux";

export const useCards = (pokemons) => {

    /* 
  - El estado global ya viene por props como "pokemons" */
  // const { pokemons } = useSelector((state) => state);

  const pokemonsPerPage = useSelector((state) => state.pokemonsPerPage);
  const currentPage = useSelector((state) => state.currentPage);

  /*Logica de la paginación */
  const totalPages = Math.ceil(pokemons.length / pokemonsPerPage);
  const pages = [...Array(totalPages + 1).keys()].slice(1);
  const indexOfLastPage = currentPage * pokemonsPerPage;
  const indexOfFirstPage = indexOfLastPage - pokemonsPerPage;
  const visiblePokemons = pokemons.slice(indexOfFirstPage, indexOfLastPage);

  const pokemonListToRender = pokemons.length === 1 ? pokemons : visiblePokemons;


  return {
    pages,
    currentPage,
    totalPages,
    pokemonListToRender,
  }
  
}
