import { setData } from ".";
import axios from "axios";
import type { AppDispatch } from "../../store";

type PokemonInfo = {
  name: string;
  url: string;
};

type ApiResponse = {
  count: number;
  next: string;
  previous: string | null;
  results: PokemonInfo[];
};

type FullPokemonInfo = {
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
  species: object;
  sprites: {
    front_default: string;
    back_default: string;
  };
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

export const getData = () => {
  return async (dispatch: AppDispatch) => {
    const { data } = await axios.get<ApiResponse>(
      "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      let results = data.results;
      let allPokemon: = [];
    console.log(results);
    results.forEach(async (p) => {
      let pokemonFullInfo = await fetchEveryPokemon(p.url);
      allPokemon.push(pokemonFullInfo);
    });
    async function fetchEveryPokemon(url: string) {
      let { data } = await axios.get(url);
      return data;
    }
    dispatch(setData({ data: allPokemon }));
  };
};
