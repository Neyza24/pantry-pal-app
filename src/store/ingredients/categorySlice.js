import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    selectedCategory: 'All ingredients'
}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setSelectCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
    }
}); 

export const { setSelectCategory } = categorySlice.actions;

export const selectCategory = state => state.category.selectedCategory;