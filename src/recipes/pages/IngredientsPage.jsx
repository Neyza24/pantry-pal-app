import { Box, Typography } from "@mui/material"
import { AppLayout } from "../layout/AppLayout"
import { Categories, IngredientsSelected, ListIngredients, SearchBar } from "../components"
// import { Recipes } from "../components/Recipes"


export const IngredientsPage = () => {

    return (

        <AppLayout>

            <Box maxWidth="lg" sx={{ height: 'auto', width: '100%', pt: '3rem', pb: '2.5rem', px: { xs: '1rem', sm: '1.5rem', md: '2rem' }, margin: 'auto' }} >
                <Typography variant="h2" sx={{ pb: '2rem', textAlign: 'center', pt: '0rem' }} >
                    What is in your<span className="span">fridge?</span>
                </Typography>
                <SearchBar />
            </Box>

            <Box maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', px: { xs: '1rem', sm: '1.5rem', md: '2rem' }, margin: 'auto' }}>
                <Typography variant="h4" sx={{ pb: '0.5rem', fontSize: {xs: '1.75rem', md: '2rem'} }}>
                    Ingredients
                </Typography>
                <Categories />
            </Box>

            <Box maxWidth="lg" sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, pt: '1.5rem', pb: '3rem', px: { xs: '1rem', sm: '1.5rem', md: '2rem' }, gap: { xs: '2rem', sm: '1rem', md: '2rem', lg: '3rem' }, margin: 'auto' }}>
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
