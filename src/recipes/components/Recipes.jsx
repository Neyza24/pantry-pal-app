
import { useSelector } from "react-redux"
import { RecipeCard } from "./RecipeCard";
import { Box } from "@mui/material";


export const Recipes = () => {

    const { recipes } = useSelector(state => state.recipes);

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

