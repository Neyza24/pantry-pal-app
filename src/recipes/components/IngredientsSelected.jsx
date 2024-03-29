import { Button, Grid, Typography } from '@mui/material'


export const IngredientsSelected = () => {
    return (
        <Grid item xs={12} md={4}>
            <Typography variant="h5" gutterBottom>
                0 selected ingredients
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                Select any ingredient
            </Typography>
            <Button variant="outlined">Generate Recipes</Button>
        </Grid>
    )
}

