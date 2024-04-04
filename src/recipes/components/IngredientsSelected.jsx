import { Button, CardMedia, Grid, Typography } from '@mui/material';



import illustration from '../../assets/happy-girl.png';

export const IngredientsSelected = () => {
    return (
        <Grid item xs={12} sm={4} sx={{width: '100%', height: '100%', position: 'sticky', top: '120px', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', border: '1px solid #D6E2EB', borderRadius: '4px', padding: '24px', background: '#fff', gap: '16px'}}>
            <Typography variant="h5" >
                0 selected ingredients
            </Typography>
            <CardMedia
                        component="img"
                        image={illustration}
                        alt=''
                        sx={{margin: 'auto', width: '40%'}}
                    />
            <Typography variant="subtitle1" sx={{ mt: 0, mb: '1rem' }}>
                Select any ingredient
            </Typography>
            <Button variant="contained" size="large" >Generate Recipes</Button>
        </Grid>
    )
}

