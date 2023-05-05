import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("login", async (formData) => {
  const response = await axios.post(
    "https://nafes.app/cv_task/api/login.php",
    formData,
    {
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
    }
  );
  console.log("login");
  if (response.data.status === true) {
    localStorage.setItem("state", "true");

  }
  console.log(response.data);
  return response.data;
});

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userData: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userData = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default authSlice;
