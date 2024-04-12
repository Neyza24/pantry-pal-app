import { configureStore } from "@reduxjs/toolkit";
import { recipesSlice } from "./recipes/recipesSlice";
import { recipesByIngredientsSlice } from "./recipes/recipesByIngredientsSlice";
import { searchTermSlice } from "./recipes/searchTerm";
import { allIngredientsSlice } from "./recipes/allIngredientsSlice";
import { selectedIngredientsSlice } from "./ingredients/selectedIngredients";
import { categorySlice } from "./categories/categorySlice";




export const store = configureStore({
    reducer: {
        recipes : recipesSlice.reducer,
        recipesByIngredient: recipesByIngredientsSlice.reducer,
        searchTerm: searchTermSlice.reducer,
        allIngredients: allIngredientsSlice.reducer,
        selectedIngredients: selectedIngredientsSlice.reducer,
        category: categorySlice.reducer
    },
    
})