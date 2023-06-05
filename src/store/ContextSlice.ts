import { createSlice } from '@reduxjs/toolkit';

const initialState: Array<string> = [];

const contextSlice = createSlice({
    name: 'context',
    initialState,
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },
    },
});

export const { add } = contextSlice.actions;
export default contextSlice.reducer;
