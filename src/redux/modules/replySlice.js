// src/redux/modules/replySlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = { reply: ["안녕하세요"], id: 12321 };

const replySlice = createSlice({
  name: "replies",
  initialState,
  reducers: {
    addReply: (state, action) => {
      return { ...state, reply: [...state.reply, action.payload] };
    },

    deleteReply: (state, action) => {
      state.reply.filter((item) => {
        if (state.id !== action.payload.id) {
          console.log(action.payload.id);
          return item;
        }
      });
    },

    editReply: (state, action) => {},
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addReply, deleteReply } = replySlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default replySlice.reducer;
