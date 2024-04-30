import { Recipes } from "../components/Recipes"
import { AppLayout } from "../layout/AppLayout"
import { Box, Typography, Button } from "@mui/material"
import {Link as RouterLink} from 'react-router-dom';

const RecipesPage = () => {
    return (
        <AppLayout>
            <Box maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', pt: 2, px: { xs: '1rem', sm: '1.5rem', md: '2rem' }, margin: 'auto' }}>
                <Typography variant="h4" sx={{ py: '0.5rem' }} color="text.primary">
                Sugested recipes for your week
                </Typography>
                <Recipes />
            </Box>
            <Box>
            <Button  variant="contained" size="large"  to={'/'} component={RouterLink}>Back home</Button>
            </Box>
        </AppLayout>
    )
}

export default RecipesPage