import { createSlice } from '@reduxjs/toolkit';


export const initialState = {
    loading: false,
    hasError: false,
    recipes: [],
    currentRecipes: []
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
            state.currentRecipes = action.payload.slice(0,7);
        },
        getRecipesError: (state) => {
            state.hasError = true;
        },
        showCurrentRecipes: (state) => {
            state.currentRecipes = state.recipes.slice(7,14);
        }
    }
});

export const { getRecipes, getRecipesSuccess, getRecipesError, showCurrentRecipes } = recipesSlice.actions;