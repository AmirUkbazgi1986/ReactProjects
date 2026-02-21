import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  error: null,
  loading: false,
  hasSubmitted: false,
};

const nameSlice = createSlice({
  name: "emailChecker",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    submit: (state) => {
      state.loading = true;
      state.error = null;
      state.hasSubmitted = true;
    },
    success: (state) => {
      state.loading = false;
      state.error = null;
    },
    setError: (state) => {
      state.loading = false;
      state.error = "Invalid email or password!";
    },
  },
});

export const { setEmail, setPassword, submit, success, setError } =
  nameSlice.actions;
export default nameSlice.reducer;
