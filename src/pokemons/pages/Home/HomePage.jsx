
import { Cards, FilterAndOrder, ReloadButton } from "../../components";

export const HomePage = ({pokemons, isLoading}) => {
  return (
    <>
      <ReloadButton />
      <FilterAndOrder />
      { !isLoading ? (<Cards pokemons={pokemons}/>)  
        : (<p>Cargando...</p>)
     }
    </>
  );
};
