import { Route, Routes } from "react-router";
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

type PokemonFullInfo = {
  abilities: object[];
  base_experience: number;
  forms: object[];
  game_indices: object[];
  height: number;
  held_items: [] | object[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: object[];
  name: string;
  order: number;
  past_types: [] | object[];
  species: PokemonInfo;
  sprites: object;
  stats: object[];
  types: [
    {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }
  ];
  weight: number;
};

function App() {
  let allPokemon: object[] = [];

  async function fetchAllPokemon() {
    const { data } = await axios.get<GetUsersResponse>(
      "https://pokeapi.co/api/v2/pokemon?limit=151"
    );
    data.results.map((p) => {
      let pokemonFullInfo = fetchEveryPokemon(p.url);
      allPokemon.push(pokemonFullInfo);
    });
  }

  async function fetchEveryPokemon(url: string) {
    let { data } = await axios.get(url);
    return data;
  }

  fetchAllPokemon();

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage data={allPokemon} />} />
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
