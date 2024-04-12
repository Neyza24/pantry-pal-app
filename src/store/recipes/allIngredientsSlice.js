import { createSlice } from '@reduxjs/toolkit';

import { selectSearchTerm } from './searchTerm';
import { dataIngredients } from '../../mock/ingredients';


const initialState = dataIngredients;

export const allIngredientsSlice = createSlice({
    name: 'allIngredients',
    initialState,
    reducers: {
    }
});

export const { ingredientsByCategory } = allIngredientsSlice.actions;
export const selectedIngredients = state => state.allIngredients;


export const selectFilteredAllIngredients = (state) => {
    const allIngredients = selectedIngredients(state);
    const searchTerm = selectSearchTerm(state);

    return allIngredients?.filter((ingredient) => ingredient.name.toLowerCase().includes(searchTerm.toLowerCase()))
}

// const selectedCategory = useSelector(state => state.category);
    // const searchValue = useSelector(state => state.searchTerm);

    // const ingredients = useSelector(state => {
    //     const initialData = state.allIngredients
    //     const filterByCategory = initialData.filter(ingredient =>
    //         ingredient.category === selectedCategory && 
    //         ingredient.name.toLowerCase().includes(searchValue.toLowerCase()))

    //         return filterByCategory
    // }
    
    // )