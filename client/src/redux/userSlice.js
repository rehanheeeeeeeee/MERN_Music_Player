import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload.user;
    },
    removeUser: (state) => {
      state.user = {};
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export const selectUser = (state) => {
  return state.user.user;
};

export default userSlice.reducer;
