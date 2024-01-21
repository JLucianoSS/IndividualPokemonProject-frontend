
import { useDispatch } from "react-redux";
import { getPokemons, setLoading, setOrderByAttack, setOrderByName,setOrigenFilter,setTypeFilter } from "../../redux/actions-types";
import { useState } from "react";

export const useHome = () => {
  const dispatch = useDispatch();
  const [loading, setLoadingState] = useState(false);

  const loadData = async () => {
    setLoadingState(true);

    await dispatch(getPokemons());
    dispatch(setLoading(false));
    setLoadingState(false);
  };

  const handleReload = () => {
    loadData();
    dispatch(setOrigenFilter("AllPokemons"));
    dispatch(setTypeFilter("AllTypes")); 
    dispatch(setOrderByName("ascendente")); 
    dispatch(setOrderByAttack(false)); 
    
  };

  return {
    loading,
    loadData,
    handleReload
  }
};
