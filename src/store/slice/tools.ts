import { createSlice } from '@reduxjs/toolkit';

export const toolsSlice = createSlice({
  name: 'tools',
  initialState: {},
  reducers: {}
});

export const tools = (state) => state.tools;
export const {} = toolsSlice.actions;
export default toolsSlice.reducer;
