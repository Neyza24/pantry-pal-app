import { useDispatch, useSelector } from 'react-redux';
import { SelectedIngredients } from './SelectedIngredients';
import { Button, CardMedia, Box, Typography } from '@mui/material';
import illustration from '../../assets/happy-girl.png';
import { useEffect } from 'react';
import { fetchRecipes } from "../../store/recipes/thunks";


export const IngredientsSelected = () => {
    const dispatch = useDispatch();

    const ingredientselected = useSelector(state => state.selectedIngredients);
    const numSelected = ingredientselected.length;

    console.log(ingredientselected);
    const query = ingredientselected.map((ingredient) => ingredient.name ).join(',');
    console.log(query);

    useEffect(() => {
        dispatch(fetchRecipes(query)); //fetchRecipes('https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2)
    }, [dispatch, query])


    return (
        <Box sx={{
            height: '100%',
            minWidth: '240px',
            maxWidth: '360px',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            border: '0.125rem solid #323232',
            borderRadius: '0.625rem',
            padding: '1.5rem',
            background: '#fff',
            gap: '16px',
            flexBasis: { xs: '100%', sm: '40%', md: '35%' },
            minHeight: '440px'

        }}
        >
            <Typography variant="h5" >
                {numSelected} Selected ingredients
            </Typography>

            <CardMedia
                component="img"
                image={illustration}
                alt=''
                sx={[{ margin: 'auto', maxWidth: '30%' }, numSelected >= 2 && { display: 'none' }]}
            />

            <SelectedIngredients ingredientselected={ingredientselected} />

            <Typography
                variant="subtitle1"
                sx={[{ mt: 0, mb: '1rem' }, numSelected >= 2 && { display: 'none' }]}
            >
                {numSelected == 0 ? 'Select ingredients' : 'Select at least 2 ingredients'}
            </Typography>
            <Button variant="contained" size="large" disabled={numSelected < 2}>Generate Recipes</Button>
        </Box>
    )
}

