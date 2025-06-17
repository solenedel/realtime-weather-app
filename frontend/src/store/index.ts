// ------------------------- REDUX STORE -------------------------
// This is the main Redux store configuration file, which:
// 1. Creates the Redux store
// 2. Combines all reducers
// 3. Exports TypeScript types we'll need later

import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// RootState is a TypeScript type that represents the entire state of your Redux store
// It will include all the state from all your reducers (in our case, it will include the theme state)
//You'll use this type when you want to access state in your components

// AppDispatch is a TypeScript type that represents the dispatch function for your Redux store
// You'll use this type when you want to dispatch actions from your components

// ------------------------- REDUX STORE -------------------------
