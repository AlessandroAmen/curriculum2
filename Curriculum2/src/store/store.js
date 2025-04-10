import { configureStore } from '@reduxjs/toolkit';
import languagesReducer from './languagesSlice';

const store = configureStore({
  reducer: {
    languages: languagesReducer,
  },
});

export default store;