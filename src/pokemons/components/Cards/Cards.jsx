
import { useSelector } from "react-redux";
import { Card, PaginationButtons } from "../../components"


export const Cards = ( { pokemons } ) => {

  /* 
  - El estado global ya viene por props como "pokemons" */
  const pokemonsPerPage = useSelector((state) => state.pokemonsPerPage);
  const currentPage = useSelector((state) => state.currentPage);

  /*Logica de la paginación */
  const totalPages = Math.ceil(pokemons.length / pokemonsPerPage);
  const pages = [...Array(totalPages + 1).keys()].slice(1);
  const indexOfLastPage = currentPage * pokemonsPerPage;
  const indexOfFirstPage = indexOfLastPage - pokemonsPerPage;
  const visiblePokemons = pokemons.slice(indexOfFirstPage, indexOfLastPage);


  return (

    <>

      {/* Implementacion del paginado */}
      <PaginationButtons pages={pages} currentPage={currentPage} totalPages={totalPages}/>

      {/* Muestra los pokemons en forma de cards */}
      <div className='cards'>
          {
            visiblePokemons.map( (pokemon) => (
              <Card 
                key={pokemon.id}
                id={pokemon.id} 
                name={pokemon.name}
                images={pokemon.images}
              />
            ) )
          }
      </div>

    </>
  )
}
