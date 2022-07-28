import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  user: null,
  loggedIn: false,
  loading: false,
};

// REDUCER + ACTIONS

export const loginSlice = createSlice({
  name: "login",
  initialState: INITIAL_STATE,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.loggedIn = true;
      state.loading = false;
    },
    logout: (state) => {
      state = INITIAL_STATE;
    },
    loading: (state, payload) => {
      state.loading = payload;
    },
  },
});

// selectors
export const selectUser = (state) => state.login.user;
export const selectLoadingUser = (state) => state.login.loading;

// actions
export const { login, loading, logout } = loginSlice.actions;

export default loginSlice.reducer;
