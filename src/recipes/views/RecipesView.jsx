
import { RecipesList } from '../components/RecipesList';
import { Box, Typography} from "@mui/material"
import { Buttons } from '../components/Buttons';



export const RecipesView = () => {
    return (
        <Box 
            maxWidth="lg" 
            sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                pt: '3rem', 
                pb: '4rem', 
                px: { xs: '1rem', sm: '1.5rem', md: '2rem' }, 
                margin: 'auto' 
            }}
        >
                <Typography variant="h2" sx={{ pb: '2rem', fontSize: { xs: '1.75rem', md: '2rem' }, textAlign: 'center' }}>
                <span className="span">7 Sugested</span> recipes for your week!
                </Typography>
                <RecipesList />
                <Buttons />
            </Box>
    )
}
