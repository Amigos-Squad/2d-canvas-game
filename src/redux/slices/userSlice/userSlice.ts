import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILoginForm, IRegistrationForm, PasswordForm } from '@/modules';
import { AVATAR_LINK, initialState } from './const';
import { converter } from '@/utils';
import { IUser } from '@/models';

const setAvatarUrl = (avatarUrl: string | null) => {
  let avatar = '';

  if (avatarUrl) {
    avatar = `${AVATAR_LINK}${avatarUrl}`;
  }

  return avatar;
};

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
    toggleTheme: () => {},
    setLoadStatus: (state, action) => {
      state.isLoaded = action.payload;
    },
    setUser: (state, action) => {
      if (!state.isLoaded) {
        state.isLoaded = true;
      }
      state.user = converter.convertSnakeToCamelCase(action.payload);
      state.userAvatar = setAvatarUrl(action.payload.avatar);
    },
    setTheme: (state, action) => {
      if (!state.isLoaded) {
        state.isLoaded = true;
      }
      state.theme = action.payload;
    },
    setUserAvatar: (state, action) => {
      state.userAvatar = setAvatarUrl(action.payload);
    },
  },
});

export const {
  signIn,
  signUp,
  signOut,
  setUser,
  toggleTheme,
  setTheme,
  loadUser,
  updateProfile,
  updatePassword,
  updateAvatar,
  setUserAvatar,
  setLoadStatus,
} = userSlice.actions;

export default userSlice.reducer;
