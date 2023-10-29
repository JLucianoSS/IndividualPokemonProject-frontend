import { useFiltersAnsOrder } from "../../hooks/useFiltersAnsOrder";
import style from "./Filter.module.css";

export const FilterAndOrder = () => {
  const {
    handlerFilterByOrigen,
    handlerFilterByType,
    handlerOrderByName,
    handlerOrderByAttack,
    types,
  } = useFiltersAnsOrder();

  return (
    <>
      <div className={style.containers}>
        <select className={style.custom_select} onChange={handlerFilterByOrigen}>
          <option value="AllPokemons">AllPokemons</option>
          <option value="Api">Api</option>
          <option value="BD">Created</option>
        </select>

        <select className={style.custom_select} onChange={handlerFilterByType}>
          <option key={0} value="AllTypes">
            AllTypes
          </option>
          {types.map((type) => (
            <option key={type.ID} value={type.name}>
              {type.name}
            </option>
          ))}
        </select>

        {/* Ascendente o descendente */}
        <select className={style.custom_select} onChange={handlerOrderByName}>
          <option value="ascendente">A - Z</option>
          <option value="descendente">Z - A</option>
        </select>

        <button className={style.container_button} onClick={handlerOrderByAttack}>Attack</button>
      </div>
    </>
  );
};
