import React from 'react'
import RemoteAssistanceRoute from './router'
import '@css/index.scss'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setDarkTheme, setLightTheme } from "@/store/slice/themeSlice";
import { ThemeProvider } from "styled-components";


function App () {
    const dispatch = useDispatch();
    // @ts-ignore
    const theme = useSelector((state) => state.theme);

    const setDark = () => {
        dispatch(setDarkTheme());
    };

    const setDefault = () => {
        dispatch(setLightTheme());
    };

    return(
        <ThemeProvider theme={ theme }>
            <RemoteAssistanceRoute />
        </ThemeProvider>
    )
}

export default App
