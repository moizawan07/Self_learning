import { createSlice } from "@reduxjs/toolkit";
import {
  addKeyToStorage,
  deleteKeyFromStorage,
} from "../../helpers/asyncStorage";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    isAuthenticated: "",
  },
  reducers: {
    login(state, action) {
      console.log("called login");
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.token = "";
      state.isAuthenticated = "";
    },
  },
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
