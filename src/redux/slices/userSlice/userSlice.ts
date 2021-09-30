import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILoginForm, IRegistrationForm } from '@/modules';
import { initialState } from './const';

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (_, action: PayloadAction<ILoginForm>) => {},
    signUp: (_, action: PayloadAction<IRegistrationForm>) => {},
    loadUser: () => {},
    signOut: () => {},
    setUser: (state, action) => {
      if (!state.isLoaded) {
        state.isLoaded = true;
      }
      state.user = action.payload;
    },
  },
});

export const { signIn, signUp, signOut, setUser, loadUser } = userSlice.actions;

export default userSlice.reducer;
