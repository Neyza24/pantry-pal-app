import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredAllIngredients } from '../../store/ingredients/allIngredientsSlice';
import { selectCategory, setSelectCategory } from '../../store/ingredients/categorySlice';
import { IngredientCard } from './IngredientCard';
import { Box } from '@mui/material';



export const ListIngredients = () => {

    const dispatch = useDispatch();

    const allIngredients = useSelector(selectFilteredAllIngredients);
    const category = useSelector(selectCategory);
    const ingredientselected = useSelector(state => state.selectedIngredients);


    const checkIngredientInList = ingredient => {
        return ingredientselected.some(item => item.id === ingredient.id);
    }

    useEffect(() => {
        dispatch(setSelectCategory(category));
    }, [dispatch, category]);

    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(8.25rem, 1fr))',
                gap: '1rem',
                flexBasis: { xs: '100%', sm: '55%', md: '60%', lg: '65%' },
            }}
        >
            {
                allIngredients?.map(ingredient => {
                    const isIngredientInList = checkIngredientInList(ingredient);

                    return (
                        <IngredientCard
                            ingredient={ingredient}
                            key={ingredient.id}
                            isIngredientInList={isIngredientInList}
                        />
                    )

                }
                )
            }
        </Box>

    )
}

/* eslint react/prop-types: 0 */