// import { RecipeInfoIcons } from "../components/RecipeInfoIcons"
import { Box,   } from "@mui/material"
import { RecipeInstructions } from "../components/RecipeInstructions"



export const RecipeView = () => {

    return (
        <Box 
            maxWidth="lg" 
            sx={{ display: 'flex', flexDirection: 'column', pt: '3rem', pb: '4rem', px: { xs: '1rem', sm: '1.5rem', md: '2rem' }, margin: 'auto' }}
        >
            {/* <RecipeInfoIcons /> */}
            <RecipeInstructions />
        </Box>
    )
}
/* eslint react/prop-types: 0 */