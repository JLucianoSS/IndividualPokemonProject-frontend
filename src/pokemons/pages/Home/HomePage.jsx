
import { Cards, FilterAndOrder, ProgressLoading, ReloadButton } from "../../components";
import { useHome } from "../../hooks/useHome";
import style from "./Home.module.css";
import img from "../../../assets/loading.gif";

export const HomePage = ({ pokemons, isLoading}) => {
  
  const { handleReload, loading} = useHome();


  const pokeloading1 = (
    <div className={style.container_loading}>
      <img
        className={style.loading}
        src={img}
        alt="loading"
      />
      <ProgressLoading isLoading={ isLoading }/>
    </div>
  );
  const pokeloading2 = (
    <div className={style.container_loading}>
      <img
        className={style.loading}
        src={img}
        alt="loading"
      />
    </div>
  );



  return (
    <div className={style.home_container}>
      <div className={style.home_options}>
        <FilterAndOrder />
        <ReloadButton onClick={handleReload} />
      </div>

      {loading ? (
        pokeloading2
      ) : !isLoading ? (
        <Cards pokemons={pokemons} />
      ) : (
        pokeloading1
      )}
    </div>
  );
};
