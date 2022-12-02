import { createSlice } from "@reduxjs/toolkit";

export const toolsSlice = createSlice({
    name: "tools",
    initialState: {
        themeName: ''
    },
    reducers: {
        setThemeName: (state, action) => {
            state.themeName = action.payload
        }
    },
});

export const tools = (state) => state.tools;
export const { setThemeName } = toolsSlice.actions;
export default toolsSlice.reducer;
