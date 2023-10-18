import { useForm } from "../../hooks/useForm";
import { OptionTypes } from "../../components";
import style from "./Form.module.css";

export const Form = () => {
  const {
    newPokemon,
    errors,
    types,
    checkBox,
    handleChange,
    handleSubmit,
    cleanFields,
  } = useForm();

  return (
    <>
      <form className={style.container} onSubmit={handleSubmit}>
        <label>name</label>
        <input
          required
          type="text"
          name="name"
          value={newPokemon.name}
          onChange={handleChange}
          placeholder="Ejm: Ultrapikachu"
        />
        {errors.name && <p className={style.errors}>{errors.name}</p>}

        <label>image</label>
        <input
          required
          type="text"
          name="images"
          value={newPokemon.images}
          onChange={handleChange}
          placeholder="Url: .jpg, .jpeg, .png o .gif"
        />
        {errors.images && <p className={style.errors}>{errors.images}</p>}

        <label>hp</label>
        <input
          required
          type="number"
          step="1"
          name="hp"
          value={newPokemon.hp}
          onChange={handleChange}
        />
        {errors.hp && <p className={style.errors}>{errors.hp}</p>}

        <label>attack</label>
        <input
          required
          type="number"
          name="attack"
          value={newPokemon.attack}
          onChange={handleChange}
        />
        {errors.attack && <p className={style.errors}>{errors.attack}</p>}

        <label>defense</label>
        <input
          required
          type="number"
          name="defense"
          value={newPokemon.defense}
          onChange={handleChange}
        />
        {errors.defense && <p className={style.errors}>{errors.defense}</p>}

        <label>speed</label>
        <input
          required
          type="number"
          name="speed"
          value={newPokemon.speed}
          onChange={handleChange}
        />
        {errors.speed && <p className={style.errors}>{errors.speed}</p>}

        <label>height</label>
        <input
          required
          type="number"
          name="height"
          value={newPokemon.height}
          onChange={handleChange}
        />
        {errors.height && <p className={style.errors}>{errors.height}</p>}

        <label>weight</label>
        <input
          required
          type="number"
          name="weight"
          value={newPokemon.weight}
          onChange={handleChange}
        />
        {errors.weight && <p className={style.errors}>{errors.weight}</p>}

        <label>Types:</label>
        {errors.types && <p className={style.errors}>{errors.types}</p>}
        <OptionTypes
          newPokemon={newPokemon}
          types={types}
          checkBox={checkBox}
          handleChange={handleChange}
        />
        <a href="#" onClick={cleanFields}>
          Limpiar campos
        </a>

        <button type="submit">Create</button>
      </form>
    </>
  );
};
