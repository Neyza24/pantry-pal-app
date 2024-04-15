import { Box, Typography } from "@mui/material"
import { AppLayout } from "../layout/AppLayout"
import { Categories, IngredientsSelected, ListIngredients, SearchBar } from "../components"
// import { Recipes } from "../components/Recipes"


export const IngredientsPage = () => {


    return (
        <AppLayout>

            <Box sx={{ height: { xs: '240px' }, width: '100%', paddingTop: '80px', px: { xs: '1.25rem', md: '3.75rem' } }} >
                <Typography variant="h2" sx={{ fontSize: '2.125rem', pb: '2rem', color: '#333333', textAlign: 'center' }} >
                    What is in your fridge?
                </Typography>
                <SearchBar />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', mt: 2, px: { xs: '1.25rem', md: '3.75rem' } }}>
                <Typography variant="h4" sx={{ py: '0.5rem' }} color="text.primary">
                    Ingredients
                </Typography>
                <Categories />
            </Box>

            <Box sx={{ width: '100%', display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: '2rem', px: { xs: '1.25rem', md: '3.75rem' }, gap: { xs: '1rem' } }}>
                <ListIngredients />
                <IngredientsSelected />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', mt: 2, px: { xs: '1.25rem', md: '3.75rem' } }}>
                {/* <Typography variant="h4" sx={{ py: '0.5rem' }} color="text.primary">
                    Recipes
                </Typography> */}
                {/* <Recipes /> */}
            </Box>

        </AppLayout>
    )
}
