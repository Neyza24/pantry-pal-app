import { createSlice } from '@reduxjs/toolkit';



export const ingredientsByCategorySlice = createSlice({
    name: 'ingredientsByCategory',
    initialState: [],
    reducers: {
        ingredientsByCategory: (state, action) => {
            return state.filter(ingredient => ingredient.category == action.payload)
        }
    }
}); 

export const { ingredientsByCategory } = ingredientsByCategorySlice.actions;