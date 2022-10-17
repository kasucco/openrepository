// src/redux/modules/replySlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = { reply: ["안녕하세요"] };

const replySlice = createSlice({
  name: "reply",
  initialState,
  reducers: {
    // addReply: (state, action) => {
    //   {
    //     [...state.reply, action.payload];
    //   }
    // },
    deleteReply: (state, action) => {
      state.filter((item) => {
        if (state.id !== action.payload.id) {
          return item;
        }
      });
    },
    // editReply: (state, action) => {},
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addReply, deleteReply } = replySlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default replySlice.reducer;
