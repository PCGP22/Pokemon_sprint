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

export const getData = () => {
  return async (dispatch: AppDispatch) => {
    let allPokemon: object[] = [];
    const { data } = await axios.get<ApiResponse>(
      "https://pokeapi.co/api/v2/pokemon?limit=151"
    );
    let results = data.results;
    console.log(results);
    results.map(async (p) => {
      let pokemonFullInfo:object = await fetchEveryPokemon(p.url);
      allPokemon.push(pokemonFullInfo);
    });
    async function fetchEveryPokemon(url: string) {
      let { data } = await axios.get(url);
      return data;
    }
    dispatch(setData({ data: allPokemon }));
  };
};
