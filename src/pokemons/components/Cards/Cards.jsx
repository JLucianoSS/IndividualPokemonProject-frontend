

import { Card, PaginationButtons } from "../../components";
import { useCards } from "../../hooks/useCards";

export const Cards = ({pokemons}) => {

  const { pages,currentPage,totalPages, pokemonListToRender } = useCards(pokemons);

  if (pokemonListToRender.length === 0) {
    return <div>No hay pokemons para mostrar</div>;
  }
  
  return (
    <>
      {/* Implementacion del paginado */}
      <PaginationButtons
        pages={pages}
        currentPage={currentPage}
        totalPages={totalPages}
      />

      {/* Muestra los pokemons en forma de cards */}

      {pokemonListToRender.map((pokemon) => (
        <Card
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          images={pokemon.images}
          types={pokemon.types}
        />
      ))}
    </>
  );
};


/*Nota: uso pokemons[0] porque el servidor me responde(en caso de error) 
con un objeto con una propiedad message con el mensaje del error  */