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
  SET_ORDER_BY_ATTACK,
  SET_ORDER_BY_NAME,
  SET_ORIGEN_FILTER,
  SET_TYPE_FILTER,
  NAVIGATE_PREV,
  NAVIGATE_NEXT,
  CURRENT_PAGE,
  CHANGE_POKEMONS_PER_PAGE,
  IS_LOADING
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

  /* ORDENAMIENTO Y FILTRADO */
  allPokemons:[],
  pokemonsOrigen: [],
  pokemonsTypes: [],
  inputSelect: {
    origenFilter: 'AllPokemons',
    typeFilter: 'AllTypes',
    orderByName: 'ascendente',
    orderByAttack: false,
  },

  /* PAGINATION */
  pokemonsPerPage: 12, // # paginación
  currentPage: 1, // actual page

  /* LOADING */
  isLoading:true
};


export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    /*Pokemon actions */
    case GET_POKEMONS:
      return { ...state, 
        pokemons: action.payload,
        allPokemons:action.payload,
        pokemonsOrigen:action.payload,
      };

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
      return { ...state, pokemons: action.payload };
    case SET_INPUT:
      return { ...state, input: action.payload };


      

    /* Logic Orders and filters */
    case FILTER_BY_ORIGEN:
      if (action.payload === "Api") {
        const apipokemons = state.allPokemons.filter((pokemon) => typeof pokemon.id === "number");
        return {
          ...state,
          pokemons: apipokemons,
          pokemonsOrigen: apipokemons
        }
      } 
      if (action.payload === "BD") {
        const createdPokemons = state.allPokemons.filter((pokemon) => typeof pokemon.id === "string");
        return {
          ...state,
          pokemons: createdPokemons,
          pokemonsOrigen:createdPokemons
        }
      }
      return { ...state, 
        pokemons: state.allPokemons, 
        pokemonsOrigen: state.allPokemons
      }
    case FILTER_BY_TYPE:
      const filterByType = state.pokemonsOrigen.filter((pokemon) => {
        if(action.payload === 'AllTypes') return true
        return pokemon.types.some((t) => t.name === action.payload);
      });
      return { ...state, 
        pokemons: filterByType,
        pokemonsTypes:filterByType
      };
    case ORDER_BY_ALPHA:
      const ordered = state.pokemons.sort((a, b) => {
        if (action.payload === "ascendente") return a.name.localeCompare(b.name);
        else if (action.payload === "descendente") return b.name.localeCompare(a.name);
        return 0;
      });
      return {
        ...state,
        pokemons: ordered,
      };
    case ORDER_BY_ATTACK:
      const attack = !state.inputSelect.orderByAttack
        ? state.pokemons.sort((a, b) => b.attack - a.attack)
        : state.pokemons.sort((a, b) => a.attack - b.attack)
      return {
        ...state,
        pokemons: attack,
      };

    /* inputs Orders and filters */
    case SET_ORIGEN_FILTER:
      return { ...state, inputSelect:{...state.inputSelect,origenFilter: action.payload} };

    case SET_TYPE_FILTER:
      return { ...state, inputSelect:{...state.inputSelect,typeFilter: action.payload }};

    case SET_ORDER_BY_NAME:
      return { ...state, inputSelect:{...state.inputSelect,orderByName: action.payload} };

    case SET_ORDER_BY_ATTACK:
      return { 
        ...state, 
        inputSelect: {...state.inputSelect,
          orderByAttack: !state.inputSelect.orderByAttack
        } 
      };




    /*Pagination actions */
    case NAVIGATE_NEXT:
        return{ ...state ,currentPage:state.currentPage + 1 }
    case NAVIGATE_PREV:
        return{ ...state ,currentPage:state.currentPage - 1 }
    case CHANGE_POKEMONS_PER_PAGE:
        return{ ...state ,pokemonsPerPage:action.payload }
    case CURRENT_PAGE:
        return{ ...state ,currentPage:action.payload }


    /* Loading action */
    case IS_LOADING:
        return{ ...state ,isLoading:action.payload }



    default:
      return { ...state };
  }
};



export default rootReducer;
