import { useForm } from "../../hooks/useForm";
import { OptionTypes } from "../../components";
import { areThereErrors } from "../../utils/areThereErrors";
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
    <div className={style.container_form}>
      <form className={style.form} onSubmit={handleSubmit}>
        {/* <label>name</label> */}
        <input
          className={style.custom_input}
          type="text"
          name="name"
          value={newPokemon.name}
          onChange={handleChange}
          placeholder="Name"
        />
        {errors.name ? <p className={style.errors}>{errors.name}</p> : <div className={style.space}></div>}

        {/* <label>image</label> */}
          <input
            className={style.custom_input}
            type="text"
            name="images"
            value={newPokemon.images}
            onChange={handleChange}
            placeholder="Image:url"
          />
          {newPokemon.images && errors.images==="" ? <img className={style.preview_img} src={newPokemon.images} alt="preview" /> : ""}
        {errors.images ? <p className={style.errors}>{errors.images}</p> : <div className={style.space}></div>}

        <div className={style.stats}>
          <div className={style.stat}>
            <label>hp:</label>
            <input
              className={style.custom_input}
              type="number"
              step="1"
              name="hp"
              value={newPokemon.hp}
              onChange={handleChange}
            />
          </div>

          {errors.hp ? <p className={style.errors}>{errors.hp}</p> : <div className={style.space}></div>}

          <div className={style.stat}>
            <label>attack:</label>
            <input
              className={style.custom_input}
              type="number"
              name="attack"
              value={newPokemon.attack}
              onChange={handleChange}
            />
          </div>

          {errors.attack ? <p className={style.errors}>{errors.attack}</p> : <div className={style.space}></div>}

          <div className={style.stat}>
            <label>defense:</label>
            <input
              className={style.custom_input}
              type="number"
              name="defense"
              value={newPokemon.defense}
              onChange={handleChange}
            />
          </div>
          {errors.defense ? <p className={style.errors}>{errors.defense}</p> : <div className={style.space}></div>}

          <div className={style.stat}>
            <label>speed:</label>
            <input
              className={style.custom_input}
              type="number"
              name="speed"
              value={newPokemon.speed}
              onChange={handleChange}
            />
          </div>
          {errors.speed ? <p className={style.errors}>{errors.speed}</p> : <div className={style.space}></div>}

          <div className={style.stat}>
            <label>height:</label>
            <input
              className={style.custom_input}
              type="number"
              name="height"
              value={newPokemon.height}
              onChange={handleChange}
            />
          </div>
          {errors.height ? <p className={style.errors}>{errors.height}</p> : <div className={style.space}></div>}

          <div className={style.stat}>
            <label>weight:</label>
            <input
              className={style.custom_input}
              type="number"
              name="weight"
              value={newPokemon.weight}
              onChange={handleChange}
            />
          </div>
          {errors.weight ? <p className={style.errors}>{errors.weight}</p> : <div className={style.space}></div>}
        </div>

        <OptionTypes
          newPokemon={newPokemon}
          types={types}
          checkBox={checkBox}
          handleChange={handleChange}
        />
        {errors.types ? <p className={style.errors}>{errors.types}</p> : <div className={style.space}></div>}

        <a className={style.cleanLink} onClick={cleanFields}>
          Clean Fields
        </a>

        <button
          className={`${style.createButton} ${!areThereErrors(errors) ? style.disabledButton : ''}`}
          disabled={!areThereErrors(errors)}
          type="submit"
        >
          Create
        </button>

      </form>
    </div>
  );
};
