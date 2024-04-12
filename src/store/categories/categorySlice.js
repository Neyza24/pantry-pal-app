import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    selectedCategory: 'All ingredients'
}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        selectCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
    }
}); 

export const { selectCategory } = categorySlice.actions;