import { configureStore } from "@reduxjs/toolkit";
import { recipesSlice } from "./recipes/recipesSlice";
import { selectedIngredientsSlice } from "./ingredients/selectedIngredients";
import { allIngredientsSlice } from "./ingredients/allIngredientsSlice";
import { searchTermSlice } from "./ingredients/searchTerm";
import { categorySlice } from "./ingredients/categorySlice";
import { recipeByIdSlice } from "./recipes/recipeById";




export const store = configureStore({
    reducer: {
        recipes : recipesSlice.reducer,
        searchTerm: searchTermSlice.reducer,
        allIngredients: allIngredientsSlice.reducer,
        selectedIngredients: selectedIngredientsSlice.reducer,
        category: categorySlice.reducer,
        recipe: recipeByIdSlice.reducer
    },
    
})