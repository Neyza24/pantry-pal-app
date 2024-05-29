
import { useSelector } from "react-redux"
import { RecipeCard } from "./RecipeCard";
import { Box } from "@mui/material";



export const RecipesList = () => {

    const { currentRecipes } = useSelector(state => state.recipes);
    
    return (
        <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(14rem, 1fr))', 
                gap: '1rem',
                }}
        >
            {
                currentRecipes && currentRecipes.map(recipe => (
                    <RecipeCard key={recipe.title} recipe={recipe} />
                ))
            }
        </Box>

    )
}

/* eslint react/prop-types: 0 */