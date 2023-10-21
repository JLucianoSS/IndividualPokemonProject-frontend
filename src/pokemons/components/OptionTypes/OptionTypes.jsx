



export const OptionTypes = ({ newPokemon, types, checkBox, handleChange, }) => {
  return (
    <div>
        {types.map((type) => (
          <>
            <label key={type.ID}>
              <input 
                type="checkbox" 
                name={type.name} 
                value={type.ID} 
                onChange={handleChange} 
                checked={newPokemon.types.includes(type.ID)}
                disabled={ !checkBox && !newPokemon.types.includes(type.ID) }
              />
              {type.name}
            </label>
          </>
        ))}
    </div>
  );
}
