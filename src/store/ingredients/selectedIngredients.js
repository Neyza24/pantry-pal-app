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
        toogleStyle: (state, action) => {
            const {id, isSelected} = action.payload;
            const ingredient = state.find(ing => ing.id === id);
            if(ingredient) {
                ingredient.isSelected = isSelected;
            }
        }
    }
}); 

export const { addIngredient, removeIngredient, toogleStyle  } = selectedIngredientsSlice.actions;


