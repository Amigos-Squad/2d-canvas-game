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
    oauthSignIn: (_, action: PayloadAction<string>) => {},
    signUp: (_, action: PayloadAction<IRegistrationForm>) => {},
    updateProfile: (_, action: PayloadAction<IUser>) => {},
    updatePassword: (_, action: PayloadAction<PasswordForm>) => {},
    updateAvatar: (_, action: PayloadAction<FormData>) => {},
    loadUser: () => {},
    signOut: () => {},
    setLoadStatus: (state, action) => {
      state.isLoaded = action.payload;
    },
    setUser: (state, action) => {
      if (!state.isLoaded) {
        state.isLoaded = true;
      }

      if (action.payload) {
        state.user = converter.convertSnakeToCamelCase(action.payload);
        state.userAvatar = setAvatarUrl(action.payload.avatar);
      } else {
        state.user = undefined;
        state.userAvatar = undefined;
      }
    },
    setUserAvatar: (state, action) => {
      state.userAvatar = setAvatarUrl(action.payload);
    },
  },
});

export const {
  signIn,
  oauthSignIn,
  signUp,
  signOut,
  setUser,
  loadUser,
  updateProfile,
  updatePassword,
  updateAvatar,
  setUserAvatar,
  setLoadStatus,
} = userSlice.actions;

export default userSlice.reducer;
