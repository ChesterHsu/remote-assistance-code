import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    colors: {
        svgFill: "#445155",
    },
    darkMode: false,
};

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setDarkTheme(state) {
            state.colors.svgFill = "#445155";
            state.darkMode = true;
        },
        setLightTheme(state) {
            state.colors.svgFill = "#445155";
            state.darkMode = false;
        },
    },
});
export const theme = (state) => state.theme;
export const { setDarkTheme, setLightTheme } = themeSlice.actions;
export default themeSlice.reducer;
