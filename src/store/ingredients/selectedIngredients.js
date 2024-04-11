import { createSlice } from '@reduxjs/toolkit';


export const selectedIngredientsSlice = createSlice({
    name: 'selectedIngredients',
    initialState: [],
    reducers: {
        addIngredient: (state, action) => {
            state.push(action.payload)
        },
        removeIngredient: (state, action) => {
            const { id } = action.payload;
            return state.filter(ingredient => ingredient.id !== id);
        },
    }
}); 

export const { addIngredient, removeIngredient, clearListSelected } = selectedIngredientsSlice.actions;