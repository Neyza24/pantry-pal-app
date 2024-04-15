import { createSlice } from '@reduxjs/toolkit';

import { selectSearchTerm } from './searchTerm';
import { dataIngredients } from '../../mock/ingredients';
import { selectCategory } from './categorySlice';


const initialState = {
    ingredients: dataIngredients,
};

export const allIngredientsSlice = createSlice({
    name: 'allIngredients',
    initialState,
    reducers: {
    }
});

export const { ingredientsByCategory } = allIngredientsSlice.actions;
export const selectedIngredients = state => state.allIngredients.ingredients;


export const selectFilteredAllIngredients =  (state) => {
    const allIngredients = selectedIngredients(state);
    const searchTerm = selectSearchTerm(state);
    const category = selectCategory(state);

    return allIngredients?.filter((ingredient) => ingredient.name.toLowerCase().includes(searchTerm.toLowerCase()) && (category === 'All ingredients' || ingredient.category === category))
}
