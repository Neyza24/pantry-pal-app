import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { fetchRecipes } from "../../store/recipes/thunks";
import { SelectedIngredients } from './SelectedIngredients';
import { removeAllIngredients } from '../../store/ingredients/selectedIngredients';
import { Button, CardMedia, Box, Typography, Card} from '@mui/material';
import illustration from '../../assets/happy-girl.png';



export const IngredientsSelected = () => {
    const dispatch = useDispatch();

    const ingredientselected = useSelector(state => state.selectedIngredients);
    const numSelected = ingredientselected.length;

    const query = ingredientselected.map((ingredient) => ingredient.name).join(',');

    const onSubmit = () => {
        dispatch(fetchRecipes(query));
    }

    const onRemoveAllSelectedIngredient = () => {
        dispatch(removeAllIngredients());
    }

    return (
        <Card
            variant="outlined"
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
                gap: '1rem',
                flexBasis: { xs: '100%', sm: '45%', md: '40%', lg: '35%' },
            }}
        >
            <Typography variant="h5" >
                {numSelected} Selected ingredients
            </Typography>

            <Box
                sx={{ display: "block", width: "fit-content", margin: "auto" }}
            >
                {
                    numSelected < 2 && <CardMedia
                        component="img"
                        image={illustration}
                        alt=""
                        sx={{ width: "6.5rem" }}
                    />
                }
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

            {
                numSelected >= 2 && (
                    <Button
                        onClick={onRemoveAllSelectedIngredient}
                        variant='text'
                        size="large"
                    >
                        Clear all ingredients
                    </Button>
                )
            }
        </Card>
    )
}

