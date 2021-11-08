import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './const';

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setSavedGame: (state, action) => {
      if (!state.isLoaded) {
        state.isLoaded = true;
      }
      state.savedState = action.payload;
    },
  },
});

export const { setSavedGame } = gameSlice.actions;

export default gameSlice.reducer;
