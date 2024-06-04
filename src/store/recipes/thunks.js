import { getRecipeById, getRecipeByIdError, getRecipeByIdSuccess } from "./recipeById";
import { getRecipes, getRecipesError, getRecipesSuccess } from "./recipesSlice"

const apiKey = import.meta.env.VITE_API_KEY;
const API_KEY_URL_PARAM = `apiKey=${apiKey}`;
const API_URL = 'https://api.spoonacular.com/';

//recipes by ingredientes:
const RECIPES_PATH = 'recipes/findByIngredients';
const RECIPES_BY_INGREDIENTS_FILTER = 'ingredients=#QUERY&number=14&limitLicense=true&ranking=1&ignorePantry=false';

//recipe by ID:
const RECIPE_PATH_BY_ID = 'recipes/716429/information?includeNutrition=false';


export function fetchRecipes(query) {
    
    const filter = RECIPES_BY_INGREDIENTS_FILTER.replace('#QUERY', query);

    return async (dispatch) => {
        dispatch(getRecipes());

        const url = API_URL + RECIPES_PATH + '?' + filter + '&' + API_KEY_URL_PARAM;
        try {
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);
            dispatch(getRecipesSuccess(data));
        } catch (error) {
            dispatch(getRecipesError());
        }
    }
}


export function fetchRecipeById(id) {
    const idParam = RECIPE_PATH_BY_ID.replace('716429', id);

    return async (dispatch) => {
        dispatch(getRecipeById());

        const url = API_URL + idParam + '&' + API_KEY_URL_PARAM;
        try{
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);
            dispatch(getRecipeByIdSuccess(data));
        } catch (error) {
            dispatch(getRecipeByIdError());
        }
    }
}


