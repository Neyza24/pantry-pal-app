import { HeadInfoRecipe } from "../components/HeadInfoRecipe"
import { RecipeInstructions } from "../components/RecipeInstructions"
import { IngredientsRecipe } from "../components/IngredientsRecipe"
import { Buttons } from "../components/Buttons"
import { Box, } from "@mui/material"


export const RecipeView = () => {

    return (
        <Box 
            maxWidth="680px" 
            sx={{ 
                display: 'flex', 
                flexDirection: 'column',  
                pt: '3rem', 
                pb: '4rem', 
                px: { xs: '1rem', sm: '1.5rem', md: '2rem' }, 
                margin: 'auto', 
                gap: '32px'
            }}
        >
            <HeadInfoRecipe />
            <IngredientsRecipe />
            <RecipeInstructions />
            <Buttons />
        </Box>
    )
}

/* eslint react/prop-types: 0 */