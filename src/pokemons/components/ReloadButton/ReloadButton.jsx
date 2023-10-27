import { useDispatch } from "react-redux";
import { getPokemons } from "../../../redux/actions-types";

export const ReloadButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getPokemons());
  };
  return <button onClick={handleClick}>Reload</button>;
};
