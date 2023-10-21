
import { Cards } from "../../components";
import { useHomePage } from "../../hooks/useHomePage";

export const HomePage = () => {

  const { pokemons, isLoading } = useHomePage();

  return (
    <>
      { !isLoading ?  
      <Cards pokemons={pokemons} />
        : (<p>Cargando...</p>)
     }
    </>
  );
};
