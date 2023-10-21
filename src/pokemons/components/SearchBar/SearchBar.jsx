import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon, setInput} from "../../../redux/actions-types"

export const SearchBar = () => {


  const input = useSelector((state) => state.input);
  const distpatch = useDispatch();

  const handleChange = (event) => {
    const { value } = event.target;
    distpatch(setInput(value))
  };

  const handleClick = () => {
    distpatch(getPokemon(input)) //trae el pokemon escrito por el input
  };


  return (
    <>
      <input
        type="search"
        placeholder="pikachu"
        name="name"
        value={input}
        onChange={handleChange}
      />
      <button disabled={input ===""} onClick={handleClick}>Search</button>
    </>
  );
};
