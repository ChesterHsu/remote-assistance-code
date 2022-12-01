import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice/todo";

export default configureStore({
    reducer: {
        todo: todoReducer,
    },
});
