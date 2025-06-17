// ------------------------- REDUX HOOKS -------------------------

// Creates typed versions of the Redux hooks
// Make it easier to use Redux in components

import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './index';

// ----------------------------- REDUX HOOKS -------------------------------

// These are typed versions of useDispatch and useSelector
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();

// useAppDispatch is a typed version of the useDispatch hook
// returns a dispatch function that you can use to send actions to the Redux store

// Think of dispatch like a mail carrier or messenger:
// When you call dispatch(toggleTheme()), you're sending a message (action) to the Redux store
// The store is like a central post office
// The action is like a letter with instructions
// The reducer is like the post office worker who reads the letter and takes action
// So "dispatch" means "to send off" - you're sending off an action to be processed

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// typed version of useSelector hook
// it lets you select (read) data from the redux store

// useAppSelector is how you read/access the current state from any component. It's like:
// A window into your Redux store
// A way to "select" or "pick out" specific pieces of state you need
// Can be used in any component to read the current value

// IMPORTANT: key difference between local state and useAppSelector:
// With useState, each component has its own independent state
// With useAppSelector, all components are looking at the same state in the Redux store
