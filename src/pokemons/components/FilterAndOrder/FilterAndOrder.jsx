
import { useDispatch, useSelector } from 'react-redux'
import { getTypes, filterByOrigen, filterByType , orderByName, orderByAttack, onCurrentPage} from '../../../redux/actions-types'
import { useEffect, useState } from 'react';

export const FilterAndOrder = () => {

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
    
  return (
    <>
      <div>
          <select onChange={handlerFilterByOrigen}>
            <option value="AllPokemons">AllPokemons</option>
            <option value="Api">Api</option>
            <option value="BD">Created</option>
          </select>
        
          <select onChange={handlerFilterByType}>
            <option key={0} value="AllTypes">AllTypes</option>
            {types.map((type) => (<option key={type.ID} value={type.name}>{type.name}</option>))}
          </select>

         {/* Ascendente o descendente */}
          <select onChange={handlerOrderByName}>
            <option value="ascendente">A - Z</option>
            <option value="descendente">Z - A</option>
          </select>

          <button onClick={handlerOrderByAttack}>Attack</button>

      </div>
    </>
  );
};
