

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getPokemonDetailById,cleanDetail,} from "../../redux/actions-types";

export const useDetailPage = () => {
  const { id } = useParams();

  const pokemonDetail = useSelector((state) => state.pokemonDetail);
  const distpatch = useDispatch();

  useEffect(() => {
    distpatch(getPokemonDetailById(id));
    console.log(id);
    return () => {
      distpatch(cleanDetail());
    };
  }, [id]);

  return {
    pokemonDetail
  }
};
