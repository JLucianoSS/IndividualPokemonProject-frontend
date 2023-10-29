import { useDetailPage } from "../../hooks/useDetailPage";
import { BackButton, StatBar } from "../../components";
import { capitalizeFirstLetter } from "../../utils/capitalized";
import loading from "../../../assets/loading.gif";
import style from "./Detail.module.css";

export const DetailPage = () => {
  const { pokemonDetail } = useDetailPage();
  const { types } = pokemonDetail;

  return (
    <div className={style.container_detail}>
      <BackButton />

      {pokemonDetail.name ? (
        <div className={style.container_detail_pokemon}>
          <div className={style.container_title}>
            <div className={style.container_id_title_type}>
              <h1 className={isNaN(pokemonDetail.id) ? style.id : style.id_2}>
                #{pokemonDetail.id}
              </h1>
              <div className={style.container_title_and_type}>
                <h1 className={style.name}>
                  {capitalizeFirstLetter(pokemonDetail.name)}
                </h1>
                <div className={style.container_types}>
                  {types.map((p) => (
                    <h3 key={p.name}>{p.name}</h3>
                  ))}
                </div>
              </div>
            </div>

            <img src={pokemonDetail.images} alt={pokemonDetail.name} />
          </div>


          <div className={style.container_info}>
            <h1>Basic Stats </h1>
            <div className={style.container_stats}>
              <h3>Hp:</h3>
              <div className={style.stat}>
                <StatBar stat={pokemonDetail.hp} />
                <p>{pokemonDetail.hp}</p>
              </div>
              <h3>Attack:</h3>
              <div className={style.stat}>
                <StatBar stat={pokemonDetail.attack} />
                <p>{pokemonDetail.attack}</p>
              </div>
              <h3>Defense:</h3>
              <div className={style.stat}>
                <StatBar stat={pokemonDetail.defense} />
                <p>{pokemonDetail.defense}</p>
              </div>
              <h3>Speed:</h3>
              <div className={style.stat}>
                <StatBar stat={pokemonDetail.speed} />
                <p>{pokemonDetail.speed}</p>
              </div>
            </div>
            <div className={style.container_features}>
              <h3>Altura: {pokemonDetail.height / 10}m</h3>
              <h3>Peso: {pokemonDetail.weight / 10}kg</h3>
            </div>
          </div>
        </div>
      ) : (
        <div className={style.container_loading}>
          <img className={style.loading} src={loading} alt="loading" />
        </div>
      )}
    </div>
  );
};
