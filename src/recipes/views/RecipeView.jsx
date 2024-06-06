
import { HeadInfoRecipe } from "../components/HeadInfoRecipe"
import { RecipeInstructions } from "../components/RecipeInstructions"
import { IngredientsRecipe } from "../components/IngredientsRecipe"
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button } from "@mui/material";
import ListAltIcon from '@mui/icons-material/ListAlt';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';


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
            className="animate__animated animate__fadeIn animate__slow"
        >
            <HeadInfoRecipe />
            <IngredientsRecipe />
            <RecipeInstructions />
            <Box
                sx={{
                    display: 'flex',
                    pt: '2.5rem',
                    height: 'auto',
                    justifyContent: 'center',
                    gap: '1rem',
                    flexWrap: 'wrap'
                }}
            >
                <Button variant="outlined" size="large" to={'/'} component={RouterLink} sx={{ width: { xs: '100%', sm: 'fit-content' } }}>Select other ingredients <ListAltIcon sx={{ paddingLeft: '8px', }} /> </Button>
                <Button variant="contained" size="large" to={'/recipes'} component={RouterLink} sx={{ width: { xs: '100%', sm: 'fit-content' } }}>Back to recipes view <AutoFixHighIcon sx={{ paddingLeft: '8px', }} /> </Button>
            </Box>
        </Box>
    )
}

/* eslint react/prop-types: 0 */