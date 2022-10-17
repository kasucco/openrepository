// src/redux/modules/counterSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviews: [
    {
      id: 1,
      title: "영화1 제목",
      content: "영화1 내용",
    },
    {
      id: 2,
      title: "영화2 제목",
      content: "영화2 내용",
    },
    {
      id: 3,
      title: "영화3 제목",
      content: "영화3 내용",
    },
  ],
  review: {
    id: 0,
    title: "",
    content: "",
  },
};

const bookSlice = createSlice({
  name: "bookreview",
  initialState,
  reducers: {
    addReview: (state, action) => {
      return {
        ...state,
        reviews: [action.payload, ...state.reviews],
      };
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addReview } = bookSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default bookSlice.reducer;
