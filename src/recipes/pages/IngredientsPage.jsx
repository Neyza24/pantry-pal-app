import { Grid, Typography } from "@mui/material"
import { SearchBar } from "../components/SearchBar"
import { AppLayout } from "../layout/AppLayout"
import { IngredientsSelected, ListIngredients } from "../components"


export const IngredientsPage = () => {
    return (
        <AppLayout>

            <Grid container sx={{ display: 'flex', flexDirection: 'column', mt: 3, px: {xs: 0, md: '2rem'} }}>
            <Typography variant="h2" sx={{ fontSize: '2rem', py: '1.5rem' }} color="text.primary">
                What is in your fridge?
            </Typography>
                <SearchBar />
            </Grid>

            <Grid container spacing={2} sx={{ mt: 6, px: {xs: 0, md: '2rem'}, gap: {xs: '1rem', sm: 0}}}>
                <ListIngredients />
                <IngredientsSelected />
            </Grid>
        </AppLayout>
    )
}
