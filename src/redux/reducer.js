import { GET_POKEMONS, GET_POKEMON_DETAIL_BY_ID,CLEAN_DETAIL, GET_TYPES, ADD_POKEMON } from "./actions";

const initialState = {
  pokemons: [],
  pokemonDetail: {},
  types:[],
  createdPokemon:{}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return { ...state, pokemons:action.payload };
    case GET_POKEMON_DETAIL_BY_ID:
      return { ...state, pokemonDetail:action.payload };
    case CLEAN_DETAIL:
      return { ...state,pokemonDetail:{} };
    case GET_TYPES:
      return { ...state,types:action.payload };
    case ADD_POKEMON:
      return { ...state,createdPokemon:action.payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
