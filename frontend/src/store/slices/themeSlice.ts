// ------------------------- THEME SLICE -------------------------

// This is a slice of the Redux store that manages the theme state
// 1. Defines the shape of our theme state
// 2. Defines the reducers that can modify the state
// 3. Exports the reducer function and the actions

// in Redux, a slice is a collection of Redux reducer logic and actions for a single feature of an app
// each slice manages a specific part of your state
// ie. themeSlice, userSlice, weatherSlice, etc.
// All state in a slice should be related to the same feature
// You can have as many state properties as needed
// You can have multiple actions to modify different parts of the state

import { createSlice } from '@reduxjs/toolkit';

// define interface of the theme state
interface ThemeState {
  mode: 'light' | 'dark';
}

// set initial state
const initialState: ThemeState = {
  mode: 'light',
};

// create the slice
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
  },
});

// export the action and the reducer
export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;

// differences between useState and Redux

// useState is local to a component
// Redux state is global and can be accessed by any component

// useState gives you one setter function
// Reduc gives multiple actions (like toggleTheme) that can modify state

// Redux state changes are tracked and can be debugged with Redux Dev Tools
// Redux state changes are predictable and follow a strict pattern
