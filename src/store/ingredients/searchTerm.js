import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    term: '',
}

export const searchTermSlice = createSlice({
    name: 'searchTerm',
    initialState,
    reducers: {
        setSearchTerm: (state, action) => {state.term = action.payload},
        clearSearchTerm: (state) => {
            state.term = ''
        }
    }
});

export const { setSearchTerm, clearSearchTerm } = searchTermSlice.actions;

export const selectSearchTerm = state => state.searchTerm.term;