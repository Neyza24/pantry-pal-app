import { AppLayout } from "../layout/AppLayout"
import { Box, Typography } from "@mui/material"

const RecipesPage = () => {
    return (
        <AppLayout>
            <Box sx={{ display: 'flex', flexDirection: 'column', pt: 2, px: { xs: '1rem', sm: '1.5rem', md: '2rem' }, margin: 'auto' }}>
                <Typography variant="h4" sx={{ py: '0.5rem' }} color="text.primary">
                    Recipes
                </Typography>
                {/* <Recipes /> */}
            </Box>
        </AppLayout>
    )
}

export default RecipesPage