import { Divider, Grid, Typography } from '@mui/material'

export const ListIngredients = () => {
    return (
        <Grid
            item
            xs={12}
            md={8}
            sx={{
                '& ul': {
                    py: 3,
                },
            }}
        >
            <Typography variant="h6" gutterBottom>
                Ingredients
            </Typography>
            <Divider />

            <ul>
                <li>Apples</li>
                <li>Mushrooms</li>
                <li>Onion</li>
            </ul>


        </Grid>
    )
}

