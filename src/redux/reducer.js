import {
  GET_POKEMONS,
  GET_POKEMON_DETAIL_BY_ID,
  CLEAN_DETAIL,
  GET_TYPES,
  ADD_POKEMON,
  NAVIGATE_PREV,
  NAVIGATE_NEXT,
  CURRENT_PAGE,
  CHANGE_POKEMONS_PER_PAGE,
} from "./actions";

const initialState = {
  /* HOME PAGE*/
  pokemons: [], //Guarda todos los pokemons
  pokemonDetail: {}, //Guarda el detalle del pokemon

  /* NEW POKEMON PAGE O FORM */
  types: [], //Guarda los types del pokemon
  createdPokemon: {}, //Guarda la respuesta del pokemon guardado en la bd

  /* PAGINATION */
  pokemonsPerPage: 12, // # paginación
  currentPage: 1, // actual page
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    /*Pokemon actions */
    case GET_POKEMONS:
      return { ...state, pokemons: action.payload };
    case GET_POKEMON_DETAIL_BY_ID:
      return { ...state, pokemonDetail: action.payload };
    case CLEAN_DETAIL:
      return { ...state, pokemonDetail: {} };
    case GET_TYPES:
      return { ...state, types: action.payload };
    case ADD_POKEMON:
      return { ...state, createdPokemon: action.payload };

    /*Pagination actions */
    case NAVIGATE_NEXT:
        return{ ...state ,currentPage:state.currentPage + 1 }
    case NAVIGATE_PREV:
        return{ ...state ,currentPage:state.currentPage - 1 }
    case CHANGE_POKEMONS_PER_PAGE:
        return{ ...state ,pokemonsPerPage:action.payload }
    case CURRENT_PAGE:
        return{ ...state ,currentPage:action.payload }

    default:
      return { ...state };
  }
};

export default rootReducer;
