import { createSlice } from "@reduxjs/toolkit";
export const todoSlice = createSlice({
    name: "upload",
    initialState: {
        uid: ''
    },
    reducers: {
        setUid: (state, action) => {
            state.uid = action.payload
        }
    },
});

export const upload = (state) => state.upload;
export const { setUid } = todoSlice.actions;
export default todoSlice.reducer;
