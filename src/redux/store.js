import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { contactReducer } from './contactsSlice';
// import { filterReducer } from './filterSlice';

const rootReducer = combineReducers({
  contacts: [],
  filter: ""
});



export const store = configureStore({
  reducer: {},
});