import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    colors: {
        svgFill: "#445155",
    },
    darkMode: false,
};

function setNowTheme(theme : string) {
    localStorage.setItem('now-theme', theme)
}

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setDarkTheme(state) {
            state.colors.svgFill = "#445155";
            state.darkMode = true;
            setNowTheme('dark')
        },
        setLightTheme(state) {
            state.colors.svgFill = "#445155";
            state.darkMode = false;
            setNowTheme('light')

        },
    },
});
export const theme = (state: { theme: any; }) => state.theme;
export const { setDarkTheme, setLightTheme } = themeSlice.actions;
export default themeSlice.reducer;
