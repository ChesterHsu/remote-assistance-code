import React from 'react'
import { Provider } from "react-redux";
import RemoteAssistanceRoute from './router'
import '@css/index.scss'
import store from "@/store";

function App () {
    return(
        <Provider store={ store }>
            <RemoteAssistanceRoute />
        </Provider>
    )
}

export default App
