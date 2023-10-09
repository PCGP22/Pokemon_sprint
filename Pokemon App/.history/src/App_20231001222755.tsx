import { Route, Routes } from "react-router";
import { useEffect, useState } from "react";
import LandingPage from "./components/LandingPage.tsx";
import HomePage from "./components/HomePage.tsx";
import { getData } from "./redux/slices/data/thunks.tsx";
import type { RootState } from "./redux/store.js";
import { useAppSelector, useAppDispatch } from "./redux/hooks";

// import axios from "axios";
// type PokemonInfo = {
//   name: string;
//   url: string;
// };

// type GetUsersResponse = {
//   count: number;
//   next: string;
//   previous: string | null;
//   results: PokemonInfo[];
// };

let allPokemon: object[] = [];

function App() {
  const [data, setData] = useState<object[]>([]);
  const [aux, setAux] = useState(false);

  const pokeData = useAppSelector((state) => state);

  useEffect(() => {
    getData();
  }, [aux]);

  if (!data.length) {
    setTimeout(() => setAux(!aux), 100);
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage data={data} />} />
        <Route path="/login" element="/login" />
        <Route path="/register" element="/register" />
        <Route path="/pokedex" element="" />
        <Route path="/create_pokemon" element="" />
        <Route path="/favorites" element="" />
      </Routes>
    </>
  );
}

export default App;
