
import { Route, Routes } from "react-router-dom";

import {  WelcomePage, NotFoundPage } from "../pokemons/pages";
import { PokemonsRoutes } from "../pokemons/routes/PokemonsRoutes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/*" element={<PokemonsRoutes />} />
      </Routes>
    </>
  );
};
