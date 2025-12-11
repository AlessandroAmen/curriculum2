import { configureStore } from '@reduxjs/toolkit';
import languagesReducer from './languagesSlice';
import languageReducer from './languageSlice';

const store = configureStore({
  reducer: {
    languages: languagesReducer,
    language: languageReducer,
  },
});

export default store;