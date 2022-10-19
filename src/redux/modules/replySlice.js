// src/redux/modules/replySlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const initialState = {
//   replies: [],
//   isLoading: false,
//   error: null,
// };

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

export const __postReplies = createAsyncThunk(
  "replies/postReplies",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await axios.post("http://localhost:3001/replies", payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteReplies = createAsyncThunk(
  "replies/deleteReplies",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.delete(
        `http://localhost:3001/replies/${payload}`
      );
      //payload를 return 해야 아래 reducer에서 값을 받아 쓸 수 있음.
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __patchReplies = createAsyncThunk(
  "replies/patchReplies",
  async (payload, thunkAPI) => {
    console.log("패치 페이로드", payload);
    console.log(payload.itemId);
    try {
      const data = await axios.patch(
        `http://localhost:3001/replies/${payload.itemId}`,
        { reply: payload.editValue }
      );

      //payload를 return 해야 아래 reducer에서 값을 받아 쓸 수 있음.
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
    //겟
    [__getReplies.fulfilled]: (state, action) => {
      state.isLoading = true;
      console.log("get", action.payload);
      state.replies = action.payload;
    },
    //포스트
    [__postReplies.fulfilled]: (state, action) => {
      state.isLoading = true;
      state.replies.push(action.payload);
    },
    //풀필드
    [__deleteReplies.fulfilled]: (state, action) => {
      // console.log("action.payload", action.payload);
      // console.log("action", action);
      state.replies = state.replies.filter((item) => {
        // console.log(action.payload);
        // payload에 담아주지 않았기 때문에 id는 메타에 담겨서 내려옴
        return item.id !== action.meta.arg;
      });
    },
    [__patchReplies.fulfilled]: (state, action) => {},
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default replySlice.reducer;
