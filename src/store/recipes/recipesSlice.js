import { createSlice } from '@reduxjs/toolkit';


export const initialState = {
    loading: false,
    hasError: false,
    recipes: []
}

export const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        getRecipes: (state) => {
            state.loading = true;
        },
        getRecipesSuccess: (state, action) => {
            state.loading = false;
            state.recipes = action.payload;
        },
        getRecipesError: (state) => {
            state.hasError = true;
        }
    }
});

export const { getRecipes, getRecipesSuccess, getRecipesError } = recipesSlice.actions;