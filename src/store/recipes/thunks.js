
import { getRecipes, getRecipesError, getRecipesSuccess } from "./recipesSlice"

const apiKey = import.meta.env.VITE_API_KEY;
const API_KEY_URL_PARAM = `apiKey=${apiKey}`;
const API_URL = 'https://api.spoonacular.com/';

//recipes by ingredientes:
const RECIPES_PATH = 'recipes/findByIngredients';
const RECIPES_BY_INGREDIENTS_FILTER = 'ingredients=#QUERY&number=7&limitLicense=true&ranking=1&ignorePantry=false';

//recipe by ID:



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




