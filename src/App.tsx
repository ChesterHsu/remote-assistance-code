import React from 'react'
import RemoteAssistanceRoute from './router'
import '@css/index.scss'
import { useSelector} from "react-redux";
import { theme } from '@/store/slice/themeSlice'
import { ThemeProvider } from "styled-components";
import { getTheme } from "@/tools/getTheme";
import { isDark } from "@/tools/judge";



function App () {
    /**
     * 取得預設Theme模式
     * **/
    const themeValue = useSelector(theme);

    getTheme()

    const themeClassName = isDark() ? 'dark' : 'light'

    return(
        <div className={ themeClassName }>
            <ThemeProvider theme={ themeValue }>
                <RemoteAssistanceRoute />
            </ThemeProvider>
        </div>
    )
}

export default App
