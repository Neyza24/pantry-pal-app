import { Box, Grid, Typography } from "@mui/material"
import { AppLayout } from "../layout/AppLayout"
import { Categories, IngredientsSelected, ListIngredients, SearchBar } from "../components"



export const IngredientsPage = () => {
    return (
        <AppLayout>

            <Box container sx={{ height: { xs: '240px' }, width: '100%', paddingTop: '80px' }} >
                <Typography variant="h2" sx={{ fontSize: '2rem', pb: '2rem', color: '#333333', textAlign: 'center' }} >
                    What is in your fridge?
                </Typography>
                <SearchBar />
            </Box>

            <Box container sx={{ display: 'flex', flexDirection: 'column', mt: 2, px: { xs: 0, md: '2rem' } }}>
                <Typography variant="h4" sx={{ py: '0.5rem' }} color="text.primary">
                    Ingredients
                </Typography>
                <Categories />
            </Box>

            <Grid container spacing={2} sx={{ mt: 3, px: { xs: 0, md: '2rem' }, gap: { xs: '1rem', sm: 0 } }}>
                <ListIngredients />
                <IngredientsSelected />
            </Grid>
        </AppLayout>
    )
}
