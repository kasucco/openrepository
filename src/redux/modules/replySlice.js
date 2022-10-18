// src/redux/modules/replySlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const initialState = {
//   replies: [],
//   isLoading: false,
//   error: null,
// };

const initialState = {
  replies: [
    {
      reply: "Hi",
      id: 12312312,
    },
    {
      reply: "21321",
      id: 1666087897863,
    },
    {
      reply: "21321",
      id: 1666087910852,
    },
  ],
  isLoading: false,
  error: null,
};

export const __postReplies = createAsyncThunk(
  "replies/postReplies",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post("http://localhost:3001/replies", payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getReplies = createAsyncThunk(
  "replies/getReplies",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/replies");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteReplies = createAsyncThunk(
  "replies/deleteReplies",
  async (payload, thunkAPI) => {
    // console.log(payload);
    try {
      const data = await axios.delete(
        `http://localhost:3001/replies/${payload}`
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const replySlice = createSlice({
  name: "reply",
  initialState,
  reducers: {},
  extraReducers: {
    [__getReplies.pending]: (state) => {
      state.isLoading = true;
    },
    [__getReplies.fulfilled]: (state, action) => {
      state.isLoading = true;
      state.replies = action.payload;
    },
    [__getReplies.rejected]: (state) => {
      state.isLoading = false;
    },
    //
    [__postReplies.pending]: (state) => {
      state.isLoading = true;
    },
    [__postReplies.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.replies = action.payload;
    },
    [__postReplies.rejected]: (state, action) => {
      state.isLoading = false;
      //
    },
    [__deleteReplies.fulfilled]: (state, action) => {
      // console.log(action.meta.arg);
      state.replies = state.replies.filter((item) => {
        // console.log(action.payload);
        // 이게 왜?..
        return item.id !== action.meta.arg;
      });
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addReply, deleteReply, editReply, fetchReply } =
  replySlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default replySlice.reducer;
