import { useDispatch, useSelector } from "react-redux";
import {
  getTypes,
  filterByOrigen,
  filterByType,
  orderByName,
  orderByAttack,
  onCurrentPage,
  setOrigenFilter,
  setTypeFilter,
  setOrderByName,
  setOrderByAttack
} from "../../redux/actions-types";
import { useEffect } from "react";

export const useFiltersAnsOrder = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);

  const handlerFilterByOrigen = (event) => {
    const origen = event.target.value;
    const selectedValue  = event.target.value;
    dispatch(filterByOrigen(origen));
    dispatch(setOrigenFilter(selectedValue));
    if (origen === "BD") {
      dispatch(onCurrentPage(1));
    }
  };
  const handlerFilterByType = (event) => {
    const type = event.target.value;
    const selectedValue = event.target.value;
    dispatch(filterByType(type));
    dispatch(setTypeFilter(selectedValue));
    dispatch(onCurrentPage(1));
  };
  const handlerOrderByName = (event) => {
    const order = event.target.value;
    const selectedValue = event.target.value;
    dispatch(orderByName(order));
    dispatch(setOrderByName(selectedValue));
  };

  const handlerOrderByAttack = () => {
    dispatch(orderByAttack());
    dispatch(setOrderByAttack());
  };

  useEffect(() => {
    dispatch(getTypes());
  }, []);

  return {
    handlerFilterByOrigen,
    handlerFilterByType,
    handlerOrderByName,
    handlerOrderByAttack,
    types,
  };
};
