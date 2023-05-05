import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./loginReducer";
import { userSlice } from "./userReducer";

const Store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    user: userSlice.reducer,

  },
});

export default Store;
