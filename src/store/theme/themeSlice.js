import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    mode: 'light'
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        },
    }
}); 

export const { toggleTheme } = themeSlice.actions;