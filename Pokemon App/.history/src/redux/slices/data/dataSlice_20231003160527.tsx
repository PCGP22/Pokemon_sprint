import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allData: [],
  processedData: [],
  showData: [],
  searchData: [],
  currentPage: 1,
  totalPages: 1,
  currentPokemon: {},
};

type state = {
  allData: object[];
  processedData: PokeData[];
  showData: object[];
  searchData: any[];
  currentPage: number;
  totalPages: number;
  currentPokemon: any;
};

type PokeData = {
  id: number;
  name: string;
  types: [
    {
      type: {
        name: string;
      };
    }
  ];
  url: string;
};

type Fetching = {
  data?: any;
};

async function fetchFlavorText(state: state, id: number) {
  const { data } = await axios(
    `https://pokeapi.co/api/v2/pokemon-species/${id}/`
  );
  state.currentPokemon.flavorText = data.flavor_text_entries[0];
}

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Fetching>) => {
      state.allData = action.payload.data.results;
    },
    processedData: (state, action: PayloadAction<any>) => {
      state.processedData = action.payload.data;
      state.searchData = state.processedData;
      state.showData = state.searchData.slice(0, 10);
      state.totalPages = Math.ceil(state.processedData.length / 10);
    },
    setNextPage: (state) => {
      if (state.currentPage < state.totalPages) {
        state.currentPage = state.currentPage + 1;
        state.showData = state.searchData.slice(
          (state.currentPage - 1) * 10,
          state.currentPage * 10
        );
      }
    },
    setPrevPage: (state) => {
      if (state.currentPage > 1) {
        state.currentPage = state.currentPage - 1;
        state.showData = state.searchData.slice(
          (state.currentPage - 1) * 10,
          state.currentPage * 10
        );
      }
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
      state.showData = state.searchData.slice(
        (state.currentPage - 1) * 10,
        state.currentPage * 10
      );
    },
    setSearch: (state: state, action) => {
      state.searchData = state.processedData.filter((d) =>
        d.name.includes(action.payload)
      );
      if (action.payload === "") {
        state.searchData = state.processedData;
      }
      state.showData = state.searchData.slice(0, 10);
      state.totalPages = Math.ceil(state.searchData.length / 10);
      state.currentPage = 1;
    },
    setFilter: (state: state, action) => {
      state.searchData = state.processedData.filter(
        (d) => d.types[0].type.name === action.payload
      );
      if (action.payload === "") {
        state.searchData = state.processedData;
      }
      state.showData = state.searchData.slice(0, 10);
      state.totalPages = Math.ceil(state.searchData.length / 10);
      state.currentPage = 1;
    },
    setOrder: (state: state, action) => {
      if (action.payload === "AB") {
        state.searchData = state.searchData.sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
      } else if (action.payload === "BA") {
        state.searchData = state.searchData.sort((a, b) => {
          if (a.name < b.name) return 1;
          if (a.name > b.name) return -1;
          return 0;
        });
      } else if (action.payload === "12") {
        state.searchData = state.searchData.sort((a, b) => {
          if (a.id < b.id) return -1;
          if (a.id > b.id) return 1;
          return 0;
        });
      } else if (action.payload === "21") {
        state.searchData = state.searchData.sort((a, b) => {
          if (a.id < b.id) return 1;
          if (a.id > b.id) return -1;
          return 0;
        });
      }
      state.showData = state.searchData.slice(0, 10);
      state.totalPages = Math.ceil(state.searchData.length / 10);
      state.currentPage = 1;
    },
    setCurrentPokemon: (state: state, action) => {
      state.currentPokemon = state.processedData.filter(
        (p) => p.id == action.payload
      );
      fetchFlavorText(state, action.payload);
    },
  },
});

export const {
  setData,
  setNextPage,
  setPrevPage,
  processedData,
  setCurrentPage,
  setSearch,
  setFilter,
  setOrder,
  setCurrentPokemon,
} = dataSlice.actions;

export default dataSlice.reducer;
