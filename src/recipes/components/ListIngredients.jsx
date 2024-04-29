import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredAllIngredients } from '../../store/ingredients/allIngredientsSlice';
import { setSelectCategory } from '../../store/ingredients/categorySlice';
import { IngredientCard } from './IngredientCard';
import { Box } from '@mui/material';



export const ListIngredients = () => {

    const dispatch = useDispatch();

    const allIngredients = useSelector(selectFilteredAllIngredients);
    const ingredientselected = useSelector(state => state.selectedIngredients);


    const checkIngredientInList = ingredient => {
        return ingredientselected.some(item => item.id === ingredient.id);
    }

    useEffect(() => {
        dispatch(setSelectCategory('All ingredients'))
    }, [dispatch])

    return (
        <Box
            sx={{
                display: 'flex',
                gap: { xs: '1rem', sm: '0.5rem', md: '0.5rem', lg: '1rem' },
                flexWrap: 'wrap',
                justifyContent: { xs: 'start' },
                flexBasis: { xs: '100%', sm: '60%', md: '65%' },
                
            }}>

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