import { Box, Grid, Typography } from "@mui/material"
import { SearchBar } from "../components/SearchBar"
import { AppLayout } from "../layout/AppLayout"
import { IngredientsSelected, ListIngredients } from "../components"
// import { SearchBar1 } from "../components/Search"
// import { Categories } from "../components/Categories"



export const IngredientsPage = () => {
    return (
        <AppLayout>

            <Box container sx={{display: 'grid', justifyContent: 'center',}} >
                <Typography variant="h2" sx={{ fontSize: '2rem', py: '1.5rem', color: '#8210F9' }} >
                    What is in your fridge?
                </Typography>
                <SearchBar />
                {/* <SearchBar1 /> */}
            </Box>

            <Grid container sx={{ display: 'flex', flexDirection: 'column', mt: 3, px: { xs: 0, md: '2rem' } }}>
                <Typography variant="h4" sx={{ py: '1rem' }} color="text.primary">
                    Ingredients
                </Typography>
                {/* <Categories /> */}
            </Grid>

            <Grid container spacing={2} sx={{ mt: 6, px: { xs: 0, md: '2rem' }, gap: { xs: '1rem', sm: 0 } }}>
                <ListIngredients />
                <IngredientsSelected />
            </Grid>
        </AppLayout>
    )
}


//sx={{ display: 'flex', flexDirection: 'column', mt: 3, px: { xs: 0, md: '2rem' } }} contianer del search