import { Card, PaginationButtons } from "../../components";
import { useCards } from "../../hooks/useCards";
import style from "./Cards.module.css";

export const Cards = ({ pokemons }) => {
  const { pages, currentPage, totalPages, pokemonListToRender } =
    useCards(pokemons);

  if (pokemonListToRender.length === 0) {
    return (
      <div className={style.message_container}>
        <p className={`${style.message_box} ${style.message_text}`}>No hay pokemones para mostrar</p>
      </div>
    );
  }

  return (
    <div className={style.container}>
      {/* Implementacion del paginado */}
      <div className={style.container_pagination}>
        <PaginationButtons
          pages={pages}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>

      {/* Muestra los pokemons en forma de cards */}
      <div className={style.container_cards}>
        {pokemonListToRender.map((pokemon) => (
          <Card
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            images={pokemon.images}
            types={pokemon.types}
          />
        ))}
      </div>

      <PaginationButtons
        pages={pages}
        currentPage={currentPage}
        totalPages={totalPages}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

/*Nota: uso pokemons[0] porque el servidor me responde(en caso de error) 
con un objeto con una propiedad message con el mensaje del error  */