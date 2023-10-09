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