
import { useSelector } from "react-redux"
import { RecipeCard } from "./RecipeCard";
import { Box } from "@mui/material";


export const RecipesList = () => {

    const { recipes } = useSelector(state => state.recipes);
    
    
    return (
        <Box sx={{
                width: '100%', 
                display: 'flex', 
                flexWrap: 'wrap',  
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

