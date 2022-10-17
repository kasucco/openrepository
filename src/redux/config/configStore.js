// src/redux/modules/config/configStore.js

import { configureStore } from "@reduxjs/toolkit";
/**
 * import 해온 것은 slice.reducer 입니다.
 */
import reply from "../modules/replySlice";

const store = configureStore({
  reducer: { reply: reply },
});

export default store;
