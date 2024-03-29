import { Divider, Grid, Typography } from '@mui/material'
import { IngredientCard } from './IngredientCard'

export const ListIngredients = () => {
    return (
        <Grid
            xs={12}
            md={8}
        >
            <Typography variant="h6" gutterBottom>
                Ingredients
            </Typography>
            <Divider />

            <Grid
                container
                spacing={3}
            >
                <IngredientCard />
                <IngredientCard />
                <IngredientCard />
            </Grid>




        </Grid>
    )
}

