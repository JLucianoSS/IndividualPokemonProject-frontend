
import { useSelector } from "react-redux";
import { Card, PaginationButtons } from "../../components";

export const Cards = ({ pokemons }) => {
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


  if (pokemons[0].message) {
    return <div>{pokemons[0].message}</div>;
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
      {pokemons.length === 1 ? ( <div className="cards">
          {pokemons.map((pokemon) => (
            <Card
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              images={pokemon.images}
            />
          ))}
        </div>) : ( <div className="cards">
          {visiblePokemons.map((pokemon) => (
            <Card
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              images={pokemon.images}
            />
          ))}
        </div>)}
       
    </>
  );
};


/*Nota: uso pokemons[0] porque el servidor me responde(en caso de error) 
con un objeto con una propiedad message con el mensaje del error  */