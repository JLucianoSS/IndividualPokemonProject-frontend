import { GET_POKEMONS, GET_POKEMON_DETAIL_BY_ID,CLEAN_DETAIL } from "./actions";

const initialState = {
  pokemons: [],
  pokemonDetail: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return { ...state, pokemons: action.payload };
    case GET_POKEMON_DETAIL_BY_ID:
      return { ...state, pokemonDetail: action.payload };
    case CLEAN_DETAIL:
      return {
        ...state,
        pokemonDetail: {},
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
