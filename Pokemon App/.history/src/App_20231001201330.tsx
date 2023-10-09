import { Route, Routes } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import LandingPage from "./components/LandingPage.tsx";
import HomePage from "./components/HomePage.tsx";

type PokemonInfo = {
  name: string;
  url: string;
};

type GetUsersResponse = {
  count: number;
  next: string;
  previous: string | null;
  results: PokemonInfo[];
};

function App() {
  const [data, setData] = useState<object[]>([]);
  let allPokemon: object[] = [];

  async function fetchAllPokemon() {
    const { data } = await axios.get<GetUsersResponse>(
      "https://pokeapi.co/api/v2/pokemon?limit=151"
    );
    data.results.map(async (p) => {
      let pokemonFullInfo = await fetchEveryPokemon(p.url);
      allPokemon.push(pokemonFullInfo);
    });
  }

  async function fetchEveryPokemon(url: string) {
    let { data } = await axios.get(url);
    return data;
  }

  useEffect(() => {
    fetchAllPokemon();
    setData(allPokemon);
  }, []);

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
