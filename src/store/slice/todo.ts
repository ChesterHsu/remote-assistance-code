import { createSlice } from "@reduxjs/toolkit";
export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        testtttt: '23423423423423423'
    },
    reducers: {
    },
});

export const selectTodo = (state) => state.todo;
export default todoSlice.reducer;
