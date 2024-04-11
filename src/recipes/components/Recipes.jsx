import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchRecipes } from "../../store/recipes/thunks";
import { RecipeCard } from "./RecipeCard";
import { Box } from "@mui/material";


export const Recipes = () => {

    const dispatch = useDispatch();
    const { recipes } = useSelector(state => state.recipes);


    useEffect(() => {
        dispatch(fetchRecipes()); //fetchRecipes('https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2)
    }, [dispatch])

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', marginLeft: 'auto', marginRight: 'auto', gap: '20px' }}>

            {
                recipes && recipes.map(recipe => (
                    <RecipeCard key={recipe.title} recipe={recipe} />
                ))
            }

        </Box>

    )
}

