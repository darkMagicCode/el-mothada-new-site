import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserCourseList = createAsyncThunk("getUserCourseList", async (id) => {
  const response = await axios.get(
    `https://nafes.app/cv_task/api/course_list.php?userId=${id}`,
    {
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
    }
  );
  console.log("login");

  console.log(response.data);
  return response.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userCourseList: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserCourseList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserCourseList.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userCourseList = action.payload.courseList;
      })
      .addCase(getUserCourseList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default userSlice;
