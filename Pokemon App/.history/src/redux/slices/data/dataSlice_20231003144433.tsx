import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
  allData: [],
  processedData: [],
  showData: [],
  searchData: [],
  currentPage: 1,
  totalPages: 1,
};

type state = {
  allData: object[];
  processedData: PokeData[];
  showData: object[];
  searchData: object[];
  currentPage: number;
  totalPages: number;
};

type PokeData = {
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

// const increment: = (state, action) => state + action.payload,

// async function processData(state: any) {
//   let copyCat: PokeData[] = state.allData;
//   copyCat.forEach(async (d) => {
//     let allpokemoninfo: never = await axios(d.url);
//     state.processedData = [...state.processedData, allpokemoninfo];
//     state.showData = state.processedData.slice(0, 10);
//   });
// }

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
      state.showData = state.searchData;
      state.totalPages = Math.ceil(state.searchData.length / 10);
      state.currentPage = 1;
    },
    setOrder: (state, action) => {
      if (action.payload === "AB") {
        state.searchData = state.processedData.sort((a, b) => a - b);
      } else if (action.payload === "BA") {
        state.searchData = state.searchData.sort((a, b) => b - a);
      }
      state.showData = state.searchData;
      state.totalPages = Math.ceil(state.searchData.length / 10);
      state.currentPage = 1;
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
} = dataSlice.actions;

export default dataSlice.reducer;
