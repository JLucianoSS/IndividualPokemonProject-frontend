

import { useDispatch, useSelector } from 'react-redux'
import { getTypes, filterByOrigen, filterByType , orderByName, orderByAttack, onCurrentPage} from '../../redux/actions-types'
import { useEffect } from 'react';

export const useFiltersAnsOrder = () => {

    const dispatch = useDispatch()
    const types = useSelector((state) => state.types);


    const handlerFilterByOrigen = (event) =>{
      const origen = event.target.value;
      dispatch(filterByOrigen(origen));
      if (origen === 'BD'){
        dispatch(onCurrentPage(1));
      }
    }
    const handlerFilterByType = (event) =>{
      const type = event.target.value;
      dispatch(filterByType(type));
      dispatch(onCurrentPage(1));
    }
    const handlerOrderByName = (event) =>{
      const order = event.target.value;
      dispatch(orderByName(order));
    }

    const handlerOrderByAttack = () =>{
      dispatch(orderByAttack());
    }


    useEffect(() => {
      dispatch(getTypes());
    }, [])
    
    return {
        handlerFilterByOrigen,
        handlerFilterByType,
        handlerOrderByName,
        handlerOrderByAttack, 
        types,
    }


}
