import { useEffect, useState } from "react";
import style from "./Form.module.css";
import validate from "./validation";

import { useSelector, useDispatch } from "react-redux"
import { getTypes, addPokemon } from "../../../redux/actions-types";

export const Form = () => {

  const types = useSelector((state) => state.types);
  const createdPokemon = useSelector((state) => state.createdPokemon);
  const dispatch = useDispatch();

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
  
  const [errors, setErrors] = useState({});

  const handleCheckboxChange = (value) => {
    if (newPokemon.types.includes(value)) {
      setNewPokemon({ ...newPokemon, types:newPokemon.types.filter((t) => t !== value) });
    } else {
      if (newPokemon.types.length < 2) {
        setNewPokemon({ ...newPokemon, types:[...newPokemon.types,value] });
      }
    }
  }

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setNewPokemon({ ...newPokemon, [property]: value });
  };

  const  areThereErrors = (objeto) => {
    for (let propiedad in objeto) {
      if (objeto.hasOwnProperty(propiedad) && objeto[propiedad] !== "") {
        return false; 
      }
    }
    return true; // Todas las propiedades tienen el valor ""
  }

  const  convertPropertiesToInteger = (objeto) => {
    const nuevoObjeto = {};
    for (const propiedad in objeto) {
      if ( (typeof objeto[propiedad] === "string") && !isNaN(objeto[propiedad])) {
        nuevoObjeto[propiedad] = parseInt(objeto[propiedad], 10);
      } else {
        nuevoObjeto[propiedad] = objeto[propiedad];
      }
    }
    return nuevoObjeto;
  }
  

  const handleSubmit = (event) => {
    event.preventDefault();
    if(areThereErrors(errors)){
      const newPokemonFinal = convertPropertiesToInteger(newPokemon);
      dispatch(addPokemon(newPokemonFinal));
    }else window.alert("Falta algún campo o no es válido");
  };

  useEffect(() => {
    dispatch(getTypes());
    setErrors(validate(newPokemon))
  },[newPokemon]);

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
        {errors.name && ( <p className={style.errors}>{errors.name}</p>)}
       

        <label>image</label>
        <input
          required
          type="text"
          name="images"
          value={newPokemon.images}
          onChange={handleChange}
          placeholder="Url: .jpg, .jpeg, .png o .gif"
        />
        {errors.images && ( <p className={style.errors}>{errors.images}</p>)}

        <label>hp</label>
        <input
          required 
          type="number"
          step="1"
          name="hp"
          value={newPokemon.hp}
          onChange={handleChange}
        />
        {errors.hp && ( <p className={style.errors}>{errors.hp}</p>)}

        <label>attack</label>
        <input
          required
          type="number"
          name="attack"
          value={newPokemon.attack}
          onChange={handleChange}
        />
        {errors.attack && ( <p className={style.errors}>{errors.attack}</p>)}

        <label>defense</label>
        <input
          required
          type="number"
          name="defense"
          value={newPokemon.defense}
          onChange={handleChange}
        />
        {errors.defense && ( <p className={style.errors}>{errors.defense}</p>)}
        

        <label>speed</label>
        <input
          required
          type="number"
          name="speed"
          value={newPokemon.speed}
          onChange={handleChange}
        />
        {errors.speed && ( <p className={style.errors}>{errors.speed}</p>)}

        <label>height</label>
        <input
          required
          type="number"
          name="height"
          value={newPokemon.height}
          onChange={handleChange}
        />
        {errors.height && ( <p className={style.errors}>{errors.height}</p>)}
        
        <label>weight</label>
        <input
          required
          type="number"
          name="weight"
          value={newPokemon.weight}
          onChange={handleChange}
        />
        {errors.weight && ( <p className={style.errors}>{errors.weight}</p>)}

        <label >Types:</label>
        {errors.types && ( <p className={style.errors}>{errors.types}</p>)}
        {types.map((type) => (
            <>
              <label key={type.ID}>
                <input 
                  type="checkbox" 
                  name={type.name} 
                  value={newPokemon.types[type.ID]} 
                  onChange={() => handleCheckboxChange(type.ID)} 
                  disabled={ newPokemon.types.length === 2 && !(newPokemon.types.includes(type.ID)) }
                />
                {type.name}
              </label>
            </>
          ))}
     
        <button type="submit">Create</button>
      </form>
    </>
  );
};
