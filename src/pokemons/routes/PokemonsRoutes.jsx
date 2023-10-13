
import { Route, Routes } from "react-router-dom";
import { AboutPage, DetailPage, HomePage, NewPokemonPage, NotFoundPage } from "../pages";
import { NavBar } from "../components";

export const PokemonsRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/newpokemon" element={<NewPokemonPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
