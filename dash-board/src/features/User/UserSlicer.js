import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
const initialState = {
  token: null,
  validationErr: null,
  loading: false,
};
const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    change_token: (state, action) => {
      state.token = action.payload;
    },
    change_err: (state, action) => {
      state.validationErr = action.payload;
    },
    change_loading: (state) => {
      state.loading = !state.loading;
    },
  },
});

export default UserSlice.reducer;
export const { change_token, change_err, change_loading } = UserSlice.actions;
