import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';

const filterInitialState = '';

const filterSlise = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    changeFilter(state, action) {
      return (state = action.payload);
    },
  },
  extraReducers: builder =>
    builder.addCase(logOut.fulfilled, state => (state = '')),
});

export const { changeFilter } = filterSlise.actions;
export const filterReducer = filterSlise.reducer;
