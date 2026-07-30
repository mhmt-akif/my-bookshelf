import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profileImage: null,
  favoriteGenres: ["1", "4"],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setProfileImage: (state, action) => {
      state.profileImage = action.payload;
    },
    setFavoriteGenres: (state, action) => {
      state.favoriteGenres = action.payload;
    },
  },
});

export const { setProfileImage, setFavoriteGenres } = userSlice.actions;

export default userSlice.reducer;
