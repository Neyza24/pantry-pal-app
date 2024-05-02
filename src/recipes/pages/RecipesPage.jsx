
import { Link as RouterLink } from 'react-router-dom';
import { AppLayout } from "../layout/AppLayout";
import { Recipes } from "../components/Recipes"
import { Box, Typography, Button } from "@mui/material"
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import ListAltIcon from '@mui/icons-material/ListAlt';

const RecipesPage = () => {
    return (
        <AppLayout>
            <Box maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', pt: '3rem', pb: '4rem', px: { xs: '1rem', sm: '1.5rem', md: '2rem' }, margin: 'auto' }}>

                <Typography variant="h4" sx={{ pb: '2rem', fontSize: { xs: '1.75rem', md: '2rem' } }}>
                    7 Sugested recipes for your week
                </Typography>
                <Recipes />
                <Box sx={{ display: 'flex', pt: '2.5rem', height: 'auto', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    <Button variant="outlined" size="large" to={'/'} component={RouterLink} sx={{ width: { xs: '100%', sm: 'fit-content' } }}>Select other ingredients <ListAltIcon sx={{ paddingLeft: '8px',  }} /> </Button>
                    <Button variant="contained" size="large" to={'/'} component={RouterLink} sx={{ width: { xs: '100%', sm: 'fit-content' } }}>Generate other recipes <AutoFixHighIcon sx={{ paddingLeft: '8px',  }} /> </Button>
                </Box>

            </Box>

        </AppLayout>
    )
}

export default RecipesPage