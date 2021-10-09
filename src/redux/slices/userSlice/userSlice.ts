import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILoginForm, IRegistrationForm, PasswordForm } from '@/modules';
import { initialState } from './const';
import { converter } from '@/utils';
import { IUser } from '@/models';

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (_, action: PayloadAction<ILoginForm>) => {},
    signUp: (_, action: PayloadAction<IRegistrationForm>) => {},
    updateProfile: (_, action: PayloadAction<IUser>) => {},
    updatePassword: (_, action: PayloadAction<PasswordForm>) => {},
    updateAvatar: (_, action: PayloadAction<FormData>) => {},
    loadUser: () => {},
    signOut: () => {},
    setUser: (state, action) => {
      if (!state.isLoaded) {
        state.isLoaded = true;
      }
      state.user = converter.convertSnakeToCamelCase(action.payload);
    },
  },
});

export const {
  signIn,
  signUp,
  signOut,
  setUser,
  loadUser,
  updateProfile,
  updatePassword,
  updateAvatar,
} = userSlice.actions;

export default userSlice.reducer;
