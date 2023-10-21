
import { Route, Routes, useLocation } from "react-router-dom";
import { AboutPage, DetailPage, HomePage, NewPokemonPage, NotFoundPage } from "../pages";
import { NavBar } from "../components";

export const PokemonsRoutes = () => {

  const location = useLocation();
  return (
    <>
      {location.pathname === "/home" && (<NavBar />)}
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/newpokemon" element={<NewPokemonPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
