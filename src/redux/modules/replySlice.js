// src/redux/modules/replySlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const replySlice = createSlice({
  name: "replies",
  initialState,
  reducers: {
    addReply: (state, action) => {
      return [...state, action.payload];
    },

    deleteReply: (state, action) => {
      state.filter((item) => {
        // console.log(action.payload);
        // console.log(item.id);
        // return item.id !== action.payload;
        // return item.reply;
      });
    },

    editReply: (state, action) => {},
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addReply, deleteReply } = replySlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default replySlice.reducer;
