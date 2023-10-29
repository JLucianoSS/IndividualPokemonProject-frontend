

import { useDispatch, useSelector } from "react-redux";
import { getPokemon, setInput} from "../../redux/actions-types"

export const useSearchBar = () => {
  
    const input = useSelector((state) => state.input);
  const distpatch = useDispatch();

  const handleChange = (event) => {
    const { value } = event.target;
    distpatch(setInput(value))
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  const handleClick = () => {
    distpatch(getPokemon(input)) //trae el pokemon escrito por el input
    distpatch(setInput(""))
  };

  return {
    handleChange,
    handleKeyPress,
    input
  }
}
