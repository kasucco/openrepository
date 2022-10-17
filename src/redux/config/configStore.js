// src/redux/modules/config/configStore.js

import { configureStore } from '@reduxjs/toolkit';
/**
 * import 해온 것은 slice.reducer 입니다.
 */
import counter from '../modules/bookSlice';

const store = configureStore({
  reducer: { counter: counter },
});

export default store;