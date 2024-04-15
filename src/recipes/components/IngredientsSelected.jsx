import { useSelector } from 'react-redux';
import { Button, CardMedia, Grid, Typography } from '@mui/material';
import illustration from '../../assets/happy-girl.png';
import { SelectedIngredients } from './SelectedIngredients';

export const IngredientsSelected = () => {

    const ingredientselected = useSelector(state => state.selectedIngredients);
    const numSelected = ingredientselected.length;
    // console.log(ingredientselected);

    return (
        <Grid item xs={12} sm={4} sx={{
            width: '100%',
            height: '100%',
            position: 'sticky',
            top: '120px',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            border: '1px solid #D6E2EB',
            borderRadius: '4px',
            padding: '24px',
            background: '#fff',
            gap: '16px',
            flexBasis: '30%',
            minHeight: 140
        }}
        >
            <Typography variant="h5" >
                {numSelected} selected ingredients
            </Typography>


            <CardMedia
                component="img"
                image={illustration}
                alt=''
                sx={[{ margin: 'auto', width: '40%' }, numSelected >= 2 && { display: 'none' }]}
            />

            <SelectedIngredients ingredientselected={ingredientselected} />

            <Typography variant="subtitle1" sx={[{ mt: 0, mb: '1rem' }, numSelected >= 2 && { display: 'none' }]}>{numSelected == 0 ? 'Select ingredients' : 'Select at least 2 ingredients'}</Typography>
            <Button variant="contained" size="large" sx={{ borderBottom: '4px' }} >Generate Recipes</Button>
        </Grid>
    )
}

