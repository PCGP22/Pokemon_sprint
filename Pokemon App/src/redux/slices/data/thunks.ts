import { setData, processedData } from ".";
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

type PokeData = {
  name: string;
  url: string;
};



export const getData = () => {
  return async (dispatch: AppDispatch) => {
    const { data } = await axios.get<ApiResponse>(
      "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      
    dispatch(setData({ data: data }));
  };
};


export const processData = (data: any) => {
  return (dispatch: AppDispatch) => {
    dispatch(processedData({ data }));
  }
}

// export const getPokemonById = (id: number) =>{
//   return async (dispatch: AppDispatch) =>{
//     const { data } = await axios(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)

//     dispatch(setData({data}))
//   }
// }