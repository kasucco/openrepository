// src/redux/modules/counterSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  reviews: [
    {
      id: 1,
      title: "책1 제목",
      content: "책1 내용",
    },
    {
      id: 2,
      title: "책2 제목",
      content: "책2 내용",
    },
    {
      id: 3,
      title: "책3 제목",
      content: "책3 내용",
    },
  ],
  isLoading: false,
  error: null,
  review: {},
};

export const __getReviews = createAsyncThunk(
  "book/getReviews",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(
        "https://hanghae-react-week3.herokuapp.com/reviews"
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __createReviews = createAsyncThunk(
  "book/createReviews",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(
        "https://hanghae-react-week3.herokuapp.com/reviews",
        payload
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteReviews = createAsyncThunk(
  "book/deleteReviews",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.delete(
        `https://hanghae-react-week3.herokuapp.com/reviews/${payload}`
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updateReviews = createAsyncThunk(
  "book/updateReviews",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.patch(
        `https://hanghae-react-week3.herokuapp.com/reviews/${payload.id}`,
        payload
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addReview: (state, action) => {
      return {
        ...state,
        reviews: [action.payload, ...state.reviews],
      };
    },
    deleteReview: (state, action) => {
      return state.reviews.filter((item) => item.id !== action.payload);
    },

    selectReview: (state, action) => {
      return {
        ...state,
        review: state.reviews.find((item) => {
          if (item.id == Number(action.payload)) {
            return item;
          }
        }),
      };
    },
  },
  extraReducers: {
    [__getReviews.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getReviews.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.reviews = action.payload;
    },
    [__getReviews.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__createReviews.fulfilled]: (state, { payload }) => {
      state.isLoading = true;
      state.reviews.push(payload);
    },
    [__deleteReviews.fulfilled]: (state, action) => {
      state.isLoading = true;
      state.reviews = state.reviews.filter((item) => {
        return item.id !== action.payload;
      });
    },
    [__updateReviews.fulfilled]: (state, { payload }) => {
      state.isLoading = true;
      console.log(payload);
      state.reviews.push(payload);
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addReview, deleteReview, selectReview } = bookSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default bookSlice.reducer;