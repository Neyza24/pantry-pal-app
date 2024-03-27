import { Grid, Typography } from "@mui/material"
import { SearchBar } from "../components/SearchBar"
import { AppLayout } from "../layout/AppLayout"
import { IngredientsSelected, ListIngredients } from "../components"


export const IngredientsPage = () => {
    return (
        <AppLayout>


            <Typography variant="h1" sx={{ fontSize: '2rem', py: '1.5rem' }}>
                WHAT IS IN YOUR FRIDGE?
            </Typography>

            <Grid>
                <SearchBar />
            </Grid>


            <Grid container spacing={5} sx={{ mt: 3 }}>
                <ListIngredients />
                <IngredientsSelected />
            </Grid>


        </AppLayout>
    )
}
