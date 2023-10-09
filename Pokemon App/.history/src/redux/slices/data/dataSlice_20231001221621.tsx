import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allData: [],
  showData: [],
  currentPage: 1,
  totalPages: 1,
};

type state = {
  allData: any;
  showData: object[];
  currentPage: number;
  totalPages: number;
};

export const dataSlice = createSlice({
  name: "Data",
  initialState,
  reducers: {
    setData: (state: state, action) => {
      state.allData = action.payload.data;
      state.showData = state.allData.slice(0, 10);
      state.totalPages = Math.ceil(state.allData.length / 10);
    },
    setNextPage: (state: state) => {
      if (state.currentPage < state.totalPages) {
        state.currentPage = state.currentPage + 1;
        state.showData = state.allData.slice(
          (state.currentPage - 1) * 10,
          state.currentPage * 20
        );
      }
    },
    setPrevPage: (state: state) => {
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
