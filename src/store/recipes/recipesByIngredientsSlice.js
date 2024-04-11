import { createSlice } from '@reduxjs/toolkit';

export const recipesByIngredientsSlice = createSlice({
    name: 'recipesByIngredients',
    initialState: {
        counter: 1
    },
    reducers: {
        increment: (state, /* action */ ) => {
            state.counter += 1;
        },
    }
}); 

export const { increment } = recipesByIngredientsSlice.actions;