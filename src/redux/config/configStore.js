// src/redux/modules/config/configStore.js

import { configureStore } from "@reduxjs/toolkit";
/**
 * import 해온 것은 slice.reducer 입니다.
 */
import reply from "../modules/replySlice";
import book from "../modules/bookSlice";

const store = configureStore({
  reducer: { reply: reply, book: book },
  devTools: process.env.NODE_ENV === "development",
});

export default store;
