// src/redux/modules/replySlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//서버 초깃값
// const initialState = [{ reply: "Hi", id: id }];

const initialState = {
  replies: [],
  isLoading: false,
  error: null,
};

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

const replySlice = createSlice({
  name: "replies",
  initialState,
  reducers: {
    addReply: (state, action) => {
      return [...state.reply, action.payload];
    },
    deleteReply: (state, action) => {
      state.filter((item) => {
        return state.filter((item) => item.id !== action.payload);
      });
    },
  },
  extraReducers: {
    [__getReplies.pending]: (state) => {
      state.isLoading = true;
    },
    [__getReplies.fulfilled]: (state, action) => {
      state.isLoading = true;
    },
    [__getReplies.pending]: (state, action) => {
      state.isLoading = true;
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addReply, deleteReply, editReply } = replySlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default replySlice.reducer;
