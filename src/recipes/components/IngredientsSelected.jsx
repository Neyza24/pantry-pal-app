import { Button, CardMedia, Grid, Typography } from '@mui/material';

import img from '../../assets/illutrate.png'


export const IngredientsSelected = () => {
    return (
        <Grid item xs={12} sm={4} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', border: '1px solid #D6E2EB', borderRadius: '4px', padding: '16px'}}>
            <Typography variant="h5" >
                0 selected ingredients
            </Typography>
            <CardMedia
                        component="img"
                        
                        image={img}
                        alt=''
                    />
            <Typography variant="h6" sx={{ mt: 1 }}>
                Select any ingredient
            </Typography>
            <Button variant="contained" size="large">Generate Recipes</Button>
        </Grid>
    )
}

