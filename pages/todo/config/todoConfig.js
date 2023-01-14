import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";

export const getData = createAsyncThunk("todo/getData", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
  return res.data.slice(0, 10);
});

// Export hooks for usage in functional components
export const postData = createAsyncThunk(
  "todo/postData",
  async ({ title, status }) => {
    const res = await axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        status,
      })
      .then((res) => {
        console.log(res.data);
        alert(
          "ID : " +
            res.data.id +
            " title : " +
            res.data.title +
            " status : " +
            res.data.status
        );
      });
    return res.data;
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: [],
    status: null,
  },

  extraReducers: {
    [getData.pending]: (state, action) => {
      state.status = "loading";
    },
    [getData.fulfilled]: (state, action) => {
      state.status = "success";
      state.todo = action.payload;
    },
    [getData.rejected]: (state, action) => {
      state.status = "Failed";
    },
    [postData.pending]: (state, action) => {
      state.status = "loading";
    },
    [postData.fulfilled]: (state, action) => {
      state.status = "success";
      state.todo = action.payload;
    },
    [postData.rejected]: (state, action) => {
      state.status = "Failed";
    },
  },
});

export const getTodo = createApi({
  reducerPath: "todoAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/todos",
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
    }),
  }),
});

export const { useGetTodosQuery } = getTodo;

export default todoSlice.reducer;
