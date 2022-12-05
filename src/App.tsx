import React from 'react'
import RemoteAssistanceRoute from './router'
import '@css/index.scss'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setDarkTheme, setLightTheme } from "@/store/slice/themeSlice";
import { theme } from '@/store/slice/themeSlice'
import { ThemeProvider } from "styled-components";


function App () {
    const dispatch = useDispatch();

    const themeValue = useSelector(theme);

    const setDark = () => {
        dispatch(setDarkTheme());
    };

    const setLight = () => {
        dispatch(setLightTheme());
    };

    return(
        <div>
            <ThemeProvider theme={ themeValue }>
                <RemoteAssistanceRoute />
            </ThemeProvider>
        </div>
    )
}

export default App
