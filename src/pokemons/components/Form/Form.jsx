import { useState } from "react";
import style from "./Form.module.css";
import validate from "./validation";

export const Form = () => {
  const [newPokemon, setNewPokemon] = useState({
    name: "",
    images: "",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    types: [],
  });
  
  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setNewPokemon({ ...newPokemon, [property]: value });
    setErrors(validate({ ...newPokemon, [property]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newPokemon);
  };

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
        />
        {errors.name && ( <p className={style.errors}>{errors.name}</p>)}
       

        <label>image(url)</label>
        <input
          required
          type="text"
          name="images"
          value={newPokemon.images}
          onChange={handleChange}
        />
        {errors.images && ( <p className={style.errors}>{errors.images}</p>)}

        <label>hp</label>
        <input
          required
          type="number"
          name="hp"
          value={newPokemon.hp}
          onChange={handleChange}
        />

        <label>attack</label>
        <input
          required
          type="number"
          name="attack"
          value={newPokemon.attack}
          onChange={handleChange}
        />

        <label>defense</label>
        <input
          required
          type="number"
          name="defense"
          value={newPokemon.defense}
          onChange={handleChange}
        />

        <label>speed</label>
        <input
          required
          type="number"
          name="speed"
          value={newPokemon.speed}
          onChange={handleChange}
        />

        <label>height</label>
        <input
          required
          type="number"
          name="height"
          value={newPokemon.height}
          onChange={handleChange}
        />
        
        <label>weight</label>
        <input
          required
          type="number"
          name="weight"
          value={newPokemon.weight}
          onChange={handleChange}
        />

        <label>types</label>
        <select name="types" onChange={handleChange} multiple required>
          <option value="10">fire</option>
          <option value="6">rock</option>
        </select>

        <button type="submit">Create</button>
      </form>
    </>
  );
};
