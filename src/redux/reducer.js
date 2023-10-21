import {
  GET_POKEMONS,
  GET_POKEMON_DETAIL_BY_ID,
  CLEAN_DETAIL,
  GET_TYPES,
  ADD_POKEMON,
  GET_POKEMON,
  SET_INPUT,
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
  createdPokemon: {}, //Guarda la respuesta del pokemon ingresado a la bd

  /* SEARCH BAR */
  input:"",

  /* PAGINATION */
  pokemonsPerPage: 12, // # paginación
  currentPage: 1, // actual page
};


export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    /*Pokemon actions */
    case GET_POKEMONS:
      return { ...state, pokemons: action.payload };

    /*Pokemon detail */
    case GET_POKEMON_DETAIL_BY_ID:
      return { ...state, pokemonDetail: action.payload };
    case CLEAN_DETAIL:
      return { ...state, pokemonDetail: {} };

    /*Pokemon form */
    case GET_TYPES:
      return { ...state, types: action.payload };
    case ADD_POKEMON:
      return { ...state, createdPokemon: action.payload };

    /*Pokemon search */
    case GET_POKEMON:
      return { ...state, pokemons: [action.payload] };
    case SET_INPUT:
      return { ...state, input: action.payload };

    /*Pagination actions */
    // case GET_POKEMONS_PER_PAGE:
    //     return{ ...state ,pokemons:action.payload }
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
