import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import validate from "../components/Form/validation";
import { getTypes, addPokemon } from "../../redux/actions-types";
import { areThereErrors } from "../utils/areThereErrors";


export const useForm = () => {
  const types = useSelector((state) => state.types);
  const dispatch = useDispatch();


  const [errors, setErrors] = useState({});
  const [checkBox, setCheckBox] = useState(true);
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

  const cleanFields = () => {
    setNewPokemon({
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
    setCheckBox(true);
  };

  const handleChange = (event) => {
    const { type, name, checked, value } = event.target;
    if (type === "checkbox") {
      if (checked) {
        setNewPokemon({
          ...newPokemon,
          types: [...newPokemon.types, parseInt(value)],
        });
      } else {
        setNewPokemon({
          ...newPokemon,
          types: newPokemon.types.filter((type) => type !== parseInt(value)),
        });
      }
    } else {
      const parsedValue =
        name === "hp" ||
        name === "attack" ||
        name === "defense" ||
        name === "speed" ||
        name === "height" ||
        name === "weight"
          ? parseInt(value, 10)
          : value;
      setNewPokemon({ ...newPokemon, [name]: parsedValue });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(areThereErrors(errors)){
        dispatch(addPokemon(newPokemon));
    }else window.alert("Falta algún campo o no es válido");
  };

  /*Ciclo de vida de Form.jsx */
  useEffect(() => {
    dispatch(getTypes());
  },[]);

  useEffect(() => {
    setErrors(validate(newPokemon));
    if (newPokemon.types.length >= 2) {
      setCheckBox(false);
    } else {
      setCheckBox(true);
    }
  }, [newPokemon]);

  return {
    newPokemon,
    errors,
    types,
    checkBox,
    handleChange,
    handleSubmit,
    cleanFields
  };
};


