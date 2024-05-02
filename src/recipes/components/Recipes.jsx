
import { useSelector } from "react-redux"
import { RecipeCard } from "./RecipeCard";
import { Box } from "@mui/material";


export const Recipes = () => {

    const { recipes } = useSelector(state => state.recipes);
    console.log(recipes);
    
    return (
        <Box sx={{width: '100%', display: 'flex', flexWrap: 'wrap', marginLeft: 'auto', marginRight: 'auto', gap: '1rem' }}>
            
            {
                recipes && recipes.map(recipe => (
                    <RecipeCard key={recipe.title} recipe={recipe} />
                ))
            }

        </Box>

    )
}

