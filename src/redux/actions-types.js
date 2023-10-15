import axios from 'axios';

import { GET_POKEMONS, GET_POKEMON_DETAIL_BY_ID, CLEAN_DETAIL } from './actions'


export const getPokemons = () => {
    return async function(dispatch){
        try {
            const { data } = await axios.get('http://localhost:3001/api/pokemons');
            dispatch({ type:GET_POKEMONS, payload:data });
        } catch (error) {
            console.log(error.message);
        }
    }
};

export const getPokemonDetailById = (id) => {
    return async function(dispatch){
        try {
            const { data } = await axios.get(`http://localhost:3001/api/pokemon/${id}`);
            dispatch({ type:GET_POKEMON_DETAIL_BY_ID, payload:data });
        } catch (error) {
            console.log(error.message);
        }
    }
};

export const cleanDetail = () => {
    return { type: CLEAN_DETAIL };
};

