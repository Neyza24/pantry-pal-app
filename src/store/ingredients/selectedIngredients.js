import { createSlice } from '@reduxjs/toolkit';




export const selectedIngredientsSlice = createSlice({
    name: 'selectedIngredients',
    initialState: [],
    reducers: {
        addIngredient: (state, action) => {
            state.push(action.payload);

        },
        removeIngredient: (state, action) => {
            const { id } = action.payload;
            return state.filter(ingredient => ingredient.id !== id);
        },
        removeAllIngredients: (state) => {
            state.length = 0;
        },
        ingredientToggled: (state, action) => {
            const { id } = action.payload;
            const ingredient = state[id]
            ingredient.isSelected = !ingredient.isSelected
        },
    }
}); 

export const { addIngredient, removeIngredient, removeAllIngredients, ingredientToggled } = selectedIngredientsSlice.actions;


