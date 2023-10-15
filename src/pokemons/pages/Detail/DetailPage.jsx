import { useDetailPage } from "../../hooks/useDetailPage";

export const DetailPage = () => {
  
  const { pokemonDetail } = useDetailPage();
  const { types } = pokemonDetail;

  return (
    <div>
      {pokemonDetail.name ? (
        <>
          <h1>{pokemonDetail.name}</h1>
          <img src={pokemonDetail.images} alt={pokemonDetail.name} />
          <h3>HP: {pokemonDetail.hp}</h3>
          <h3>ATTACK: {pokemonDetail.attack}</h3>
          <h3>DEFENSE: {pokemonDetail.defense}</h3>
          <h3>SPEED: {pokemonDetail.speed}</h3>
          <h3>HEIGHT: {pokemonDetail.height}</h3>
          <h3>WEIGHT: {pokemonDetail.weight}</h3>
          <h3>Types:</h3>
          {
            types.map((p) => (<p key={p.name}>-{p.name}</p>))
          }
        </>
      ) : (<h3>Cargando...</h3>)}
    </div>
  );
};
