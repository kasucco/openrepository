// src/redux/modules/config/configStore.js

import { configureStore } from "@reduxjs/toolkit";
/**
 * import 해온 것은 slice.reducer 입니다.
 */
import replies from "../modules/replySlice";

const store = configureStore({
  reducer: { replies: replies },
});

export default store;
