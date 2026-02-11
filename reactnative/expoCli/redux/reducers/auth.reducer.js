import { createSlice } from "@reduxjs/toolkit";
import { addKeyToStorage } from "../../helpers/asyncStorage";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    isAuthenticated: "",
  },
  reducers: {
    login(state, action) {
      state.token = action.payload;
      state.isAuthenticated = true;
      addKeyToStorage("token", action.payload);
    },
    logout(state) {
      state.token = "";
      state.isAuthenticated = "";
    },
  },
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
