// src/redux/modules/config/configStore.js

import { configureStore } from "@reduxjs/toolkit";
/**
 * import 해온 것은 slice.reducer 입니다.
 */
<<<<<<< HEAD
import replies from "../modules/replySlice";

const store = configureStore({
  reducer: { replies: replies },
=======
import reply from "../modules/replySlice";
import book from "../modules/bookSlice";

const store = configureStore({
  reducer: { reply: reply, book: book },
>>>>>>> main
});

export default store;
