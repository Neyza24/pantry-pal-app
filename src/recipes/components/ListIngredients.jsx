import { useSelector} from 'react-redux';
import { Box } from '@mui/material'
import { IngredientCard } from './IngredientCard';


import { selectFilteredAllIngredients } from '../../store/recipes/allIngredientsSlice';



export const ListIngredients = () => {
    const allIngredients = useSelector(selectFilteredAllIngredients);
    const ingredientselected = useSelector(state => state.selectedIngredients);

    const checkIngredientInList = ingredient1 => {
        return ingredientselected.some(item => item.id === ingredient1.id);
    }

    
    return (
            <Box  
                    sx={{ 
                        display: 'flex', 
                        gap: { xs: '1rem' }, 
                        flexWrap: 'wrap', 
                        justifyContent: { xs: 'space-around', sm: 'start', }, 
                        flexBasis: '70%' }}>

                {
                    allIngredients?.map(ingredient => {
                        const isIngredientInList = checkIngredientInList(ingredient);
                        
                        return (
                            <IngredientCard ingredient={ingredient} key={ingredient.id} isIngredientInList={isIngredientInList}/>
                        )
                        
                    }
                    )
                }
            </Box>
        
    )
}

/* eslint react/prop-types: 0 */