import { createSelector, createSlice } from '@reduxjs/toolkit';

// import { selectSearchTerm } from './searchTerm';
import { dataIngredients } from '../../mock/ingredients';
// import { selectCategory } from './categorySlice';


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
const selectedIngredients = state => state.allIngredients.ingredients;
const selectSearchTerm = state => state.searchTerm.term;
const selectCategory = state => state.category.selectedCategory;

export const selectFilteredAllIngredients = createSelector([selectedIngredients, selectSearchTerm, selectCategory], (ingredients, term, selectedCategory) => {
    return ingredients?.filter((ingredient) => ingredient.name.toLowerCase().includes(term.toLowerCase()) && (selectedCategory === 'All ingredients' || ingredient.category === selectedCategory))
})



