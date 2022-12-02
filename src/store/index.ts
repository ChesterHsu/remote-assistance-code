import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slice/themeSlice";

import uploadReducer from "./slice/upload";
import toolsReducer from "./slice/tools";

export default configureStore({
    reducer: {
        upload: uploadReducer,
        tools: toolsReducer,
        theme: themeSlice,
    },
});
