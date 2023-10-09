import { Route, Routes } from "react-router";
import { useEffect, useState } from "react";
import LandingPage from "./components/LandingPage.tsx";
import HomePage from "./components/HomePage.tsx";
import { getData } from "./redux/slices/data/thunks.tsx";
import { useAppSelector } from "./redux/hooks.tsx";

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

function App() {
  const [data, setData] = useState<object[]>([]);
  const [aux, setAux] = useState(false);

  let allPokemon = useAppSelector((state) => state.dataReducer.showData);
  console.log(allPokemon);

  useEffect(() => {
    getData();
  }, [aux]);

  useEffect(() => {
    setData(allPokemon);
  }, [allPokemon]);

  if (!data.length) {
    setTimeout(() => setAux(!aux), 1000);
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
