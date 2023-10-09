import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allData: [],
  processedData: [],
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

type PokeData = {
  name: string;
  url: string;
};

type Fetching = {
  data?: any;
};

// const increment: = (state, action) => state + action.payload,
export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Fetching>) => {
      state.allData = action.payload.data.results;
      async function processData() {
        console.log(state.allData);
        let copyCat: PokeData[] = state.allData;
        copyCat.forEach(async (d) => {
          let allpokemoninfo: never = await axios(d.url);
          state.processedData = [...state.processedData, allpokemoninfo];
        });
      }
      processData();
      state.showData = state.processedData.slice(0, 10);
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
