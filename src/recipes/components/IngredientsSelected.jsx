import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { fetchRecipes } from "../../store/recipes/thunks";
import { SelectedIngredients } from './SelectedIngredients';
import { Button, CardMedia, Box, Typography, } from '@mui/material';
import illustration from '../../assets/happy-girl.png';



export const IngredientsSelected = () => {
    const dispatch = useDispatch();

    const ingredientselected = useSelector(state => state.selectedIngredients);
    const numSelected = ingredientselected.length;

    console.log(ingredientselected);
    const query = ingredientselected.map((ingredient) => ingredient.name).join(',');

    const onSubmit = () => {
        dispatch(fetchRecipes(query));
    }

    return (
        <Box
            sx={{
                height: '100%',
                minWidth: '15rem',
                minHeight: '27.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                textAlign: 'center',
                border: '0.125rem solid #323232',
                borderRadius: '0.625rem',
                padding: '1.5rem',
                background: '#fff',
                gap: '1rem',
                flexBasis: { xs: '100%', sm: '45%', md: '40%', lg: '35%' },
            }}
        >
            <Typography variant="h5" >
                {numSelected} Selected ingredients
            </Typography>

            <Box sx={{ display: 'block', width: '6.5rem', margin: 'auto' }}>
                <CardMedia
                    component="img"
                    image={illustration}
                    alt=''
                    sx={[{ width: '100%' }, numSelected >= 2 && { display: 'none' }]}
                />
            </Box>

            {
                numSelected >= 1 && <SelectedIngredients ingredientselected={ingredientselected} />
            }

            <Typography
                variant="subtitle1"
                sx={[{ mt: 0, mb: '1rem' }, numSelected >= 2 && { display: 'none' }]}
            >
                {numSelected == 0 ? 'Select ingredients' : 'Select at least 2 ingredients'}
            </Typography>

            <Button
                onClick={onSubmit}
                variant="contained"
                size="large"
                disabled={numSelected < 2}
                to={'/recipes'}
                component={RouterLink}
            >
                Generate Recipes
            </Button>
        </Box>
    )
}

