
import { useSelector } from "react-redux"
import { RecipeCard } from "./RecipeCard";
import { Box } from "@mui/material";


export const RecipesList = () => {

    const { recipes } = useSelector(state => state.recipes);
    // console.log(recipes);
    
    return (
        <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(14rem, 1fr))', 
                gap: '1rem',
                }}
        >
            
            {
                recipes && recipes.map(recipe => (
                    <RecipeCard key={recipe.title} recipe={recipe} />
                ))
            }

        </Box>

    )
}

