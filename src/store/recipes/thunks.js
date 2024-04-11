import { getRecipes, getRecipesError, getRecipesSuccess } from "./recipesSlice"

const apiKey = import.meta.env.VITE_API_KEY;

export function fetchRecipes() {
    return async (dispatch) => {
        dispatch(getRecipes());

        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=carrots,tomatoes&number=10&limitLicense=true&ranking=1&ignorePantry=false&apiKey=${apiKey}`);
            const data = await response.json();
            console.log(data);
            dispatch(getRecipesSuccess(data));
        } catch (error) {
            dispatch(getRecipesError());
        }
    }
}

