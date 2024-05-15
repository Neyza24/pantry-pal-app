import { createSlice } from '@reduxjs/toolkit';


export const initialState = {
    recipeById: {},
    loading: false,
    hasError: false
}

export const recipeByIdSlice = createSlice({
    name: 'recipeById',
    initialState,
    reducers: {
        getRecipeById: (state) => {
            state.loading = true;
        },
        getRecipeByIdSuccess: (state, action) => {
            state.loading = false;
            state.recipeById = action.payload;
        },
        getRecipeByIdError: (state) => {
            state.hasError = true;
        }
    }
}); 

export const { getRecipeById, getRecipeByIdSuccess, getRecipeByIdError } = recipeByIdSlice.actions;