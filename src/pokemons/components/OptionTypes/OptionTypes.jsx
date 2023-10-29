import style from "./Options.module.css";

export const OptionTypes = ({ newPokemon, types, checkBox, handleChange }) => {
  return (
    <>
      <label>Types:</label>
      <div className={style.container_options}>
        {types.map((type) => (
          <>
            <label key={type.ID}>
              <input
                className={style.checkboxLabel}
                type="checkbox"
                name={type.name}
                value={type.ID}
                onChange={handleChange}
                checked={newPokemon.types.includes(type.ID)}
                disabled={!checkBox && !newPokemon.types.includes(type.ID)}
              />
              {type.name}
            </label>
          </>
        ))}
      </div>
    </>
  );
};
