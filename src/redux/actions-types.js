import axios from "axios";

import {
  GET_POKEMONS,
  GET_POKEMON_DETAIL_BY_ID,
  CLEAN_DETAIL,
  GET_TYPES,
  ADD_POKEMON,
  GET_POKEMON,
  SET_INPUT,
  FILTER_BY_ORIGEN,
  FILTER_BY_TYPE,
  ORDER_BY_ALPHA,
  ORDER_BY_ATTACK,
  NAVIGATE_NEXT,
  NAVIGATE_PREV,
  CHANGE_POKEMONS_PER_PAGE,
  CURRENT_PAGE,
  IS_LOADING
} from "./actions";

export const getPokemons = () => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get("http://localhost:3001/api/pokemons");
      dispatch({ type: GET_POKEMONS, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getPokemonDetailById = (id) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/api/pokemon/${id}`
      );
      dispatch({ type: GET_POKEMON_DETAIL_BY_ID, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};

/* getTypes se usa en el componente Form.jsx */
export const getTypes = () => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`http://localhost:3001/api/types`);
      dispatch({ type: GET_TYPES, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
};

/* Añadir pokemon mediante el componente Form.jsx */
export const addPokemon = (pokemon) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(`http://localhost:3001/api/pokemon`, {
        ...pokemon,
      });
      dispatch({ type: ADD_POKEMON, payload: data });
      window.alert("Pokemon creado");
    } catch (error) {
      window.alert(error.response.data.message);
    }
  };
};


/*------------------------------------------------------------------------------------------- */
/* Trae un pokemon por name mediante el searchBar */
export const getPokemon = (name) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`http://localhost:3001/api/pokemon/?name=${name}`);      
      dispatch({ type: GET_POKEMON, payload: data });
    } catch (error) {
      // dispatch({ type: GET_POKEMON, payload: error.response.data });
      console.log(error.message);
      window.alert(error.response.data.message);
    }
  };
};

/* ESTADO AUXILIAR PARA ESCUCHAR los cambios dEL INPUT DEL SEARCH */
export const setInput = (valor) => {
  return { type: SET_INPUT, payload: valor };
};
/*------------------------------------------------------------------------------------------- */

/* Filtrados y ordenamientos */
/* Nota: "Origen" de la api o de la bd */
export const filterByOrigen = (origen) => {
  return { type: FILTER_BY_ORIGEN, payload: origen };
};
export const filterByType = (type) => {
  return { type: FILTER_BY_TYPE, payload: type };
};
export const orderByName = (order) => {
  return { type: ORDER_BY_ALPHA, payload: order };
};
export const orderByAttack = () => {
  return { type: ORDER_BY_ATTACK};
};



/* Paginación  */
// export const getPokemonsPerpage = (pokemons) => {
//   return { type: GET_POKEMONS_PER_PAGE, payload:pokemons };
// };
export const onNavigatePrev = () => {
  return { type: NAVIGATE_PREV };
};
export const onNavigateNext = () => {
  return { type: NAVIGATE_NEXT };
};
export const onChangePokemonsPerPage = (page) => {
  return { type: CHANGE_POKEMONS_PER_PAGE, payload: page };
};
export const onCurrentPage = (page) => {
  return { type: CURRENT_PAGE, payload: page };
};


/* Loading  */
export const setLoading = (state) => {
  return { type: IS_LOADING, payload: state };
};
