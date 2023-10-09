import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  allData: [],
  processedData: [],
  showData: [],
  searchData: [],
  currentUser: {},
  users: [],
  currentPage: 1,
  totalPages: 1,
};

type state = {
  allData: object[];
  processedData: PokeData[];
  showData: object[];
  searchData: any[];
  currentPage: number;
  totalPages: number;
  currentUser: user;
  users: user[];
};

type user = {
  email?: [];
  password?: [];
  picture?: [];
  favorites?: [];
  created?: [];
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
      state.showData = state.searchData.slice(0, 12);
      state.totalPages = Math.ceil(state.processedData.length / 12);
    },
    setNextPage: (state) => {
      if (state.currentPage < state.totalPages) {
        state.currentPage = state.currentPage + 1;
        state.showData = state.searchData.slice(
          (state.currentPage - 1) * 12,
          state.currentPage * 12
        );
      }
    },
    setPrevPage: (state) => {
      if (state.currentPage > 1) {
        state.currentPage = state.currentPage - 1;
        state.showData = state.searchData.slice(
          (state.currentPage - 1) * 12,
          state.currentPage * 12
        );
      }
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
      state.showData = state.searchData.slice(
        (state.currentPage - 1) * 12,
        state.currentPage * 12
      );
    },
    setSearch: (state: state, action) => {
      if (!Number(action.payload)) {
        state.searchData = state.processedData.filter((d) =>
          d.name.includes(action.payload)
        );
      } else {
        state.searchData = state.processedData.filter(
          (d) => d.id === action.payload
        );
      }
      if (action.payload === "") {
        state.searchData = state.processedData;
      }
      state.showData = state.searchData.slice(0, 12);
      state.totalPages = Math.ceil(state.searchData.length / 12);
      state.currentPage = 1;
    },
    setFilter: (state: state, action) => {
      state.searchData = state.processedData.filter(
        (d) => d.types[0].type.name === action.payload
      );
      if (action.payload === "") {
        state.searchData = state.processedData;
      }
      state.showData = state.searchData.slice(0, 12);
      state.totalPages = Math.ceil(state.searchData.length / 12);
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
      state.showData = state.searchData.slice(0, 12);
      state.totalPages = Math.ceil(state.searchData.length / 12);
      state.currentPage = 1;
    },
    setCurrentUser: (state: state, action) => {
      if (
        Boolean(
          state.users.filter((u) => u.email === action.payload.email).length
        )
      ) {
        state.currentUser = state.users.filter(
          (u) => u.email === action.payload.email
        )[0];
      } else {
        state.users = [state.users, action.payload];
        state.currentUser = action.payload;
      }
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
  setCurrentUser,
} = dataSlice.actions;

export default dataSlice.reducer;
