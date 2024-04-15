import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material'
import { IngredientCard } from './IngredientCard';
import { selectFilteredAllIngredients } from '../../store/ingredients/allIngredientsSlice';
import { setSelectCategory } from '../../store/ingredients/categorySlice';



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
                gap: { xs: '1rem' },
                flexWrap: 'wrap',
                justifyContent: { xs: 'space-around', sm: 'start', },
                flexBasis: '70%'
            }}>

            {
                allIngredients?.map(ingredient => {
                    const isIngredientInList = checkIngredientInList(ingredient);

                    return (
                        <IngredientCard ingredient={ingredient} key={ingredient.id} isIngredientInList={isIngredientInList} />
                    )

                }
                )
            }
        </Box>

    )
}

/* eslint react/prop-types: 0 */