import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allData: [],
  showData: [],
  currentPage: 1,
  totalPages: 1,
};

// type state = {
//   allData: object[];
//   showData: object[];
//   currentPage: number;
//   totalPages: number;
// };

type Fetching = {
  data?: any;
};

// const increment: = (state, action) => state + action.payload,
async function fetchEveryPokemon(url: string) {
  let { data } = await axios.get(url);
  return data;
}

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

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Fetching>) => {
      action.payload.data.forEach(async (p) => {
        let pokemonFullInfo = await fetchEveryPokemon(p.url);
        state.allData.push(pokemonFullInfo);
      });
      state.showData = state.allData.slice(0, 10);
      state.totalPages = Math.ceil(state.allData.length / 10);
    },
    setNextPage: (state) => {
      if (state.currentPage < state.totalPages) {
        state.currentPage = state.currentPage + 1;
        state.showData = state.allData.slice(
          (state.currentPage - 1) * 10,
          state.currentPage * 20
        );
      }
    },
    setPrevPage: (state) => {
      if (state.currentPage > 1) {
        state.currentPage = state.currentPage - 1;
        state.showData = state.allData.slice(
          (state.currentPage - 1) * 10,
          state.currentPage * 20
        );
      }
    },
  },
});

export const { setData, setNextPage, setPrevPage } = dataSlice.actions;

export default dataSlice.reducer;
