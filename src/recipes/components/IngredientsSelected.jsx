import { Grid, Paper, Typography } from '@mui/material'


export const IngredientsSelected = () => {
    return (
        <Grid item xs={12} md={4}>
            <Paper elevation={0} sx={{ p: 2, bgcolor: 'none' }}>
                <Typography variant="h5" gutterBottom>
                    0 selected ingredients
                </Typography>
            </Paper>
            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                Select any ingredient
            </Typography>
        </Grid>
    )
}

