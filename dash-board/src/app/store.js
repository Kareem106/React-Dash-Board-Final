import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../features/User/UserSlicer";
import { change_token } from "../features/User/UserSlicer";
export const store = configureStore({
  reducer: {
    user: UserReducer,
  },
});
