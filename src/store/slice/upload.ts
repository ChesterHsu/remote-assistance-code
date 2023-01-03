import { createSlice } from '@reduxjs/toolkit';
export const uploadSlice = createSlice({
  name: 'upload',
  initialState: {
    uid: ''
  },
  reducers: {
    setUid: (state, action) => {
      state.uid = action.payload;
    }
  }
});

export const upload = (state) => state.upload;
export const { setUid } = uploadSlice.actions;
export default uploadSlice.reducer;
