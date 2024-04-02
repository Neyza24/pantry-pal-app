import { Grid,  } from '@mui/material'
import { IngredientCard } from './IngredientCard'
import { ingredients } from '../../mock/ingredients'

export const ListIngredients = () => {
    return (
        <>
            <Grid item xs={12} sm={8} sx={{ display: 'flex', gap: { xs: '1rem' }, flexWrap: 'wrap', justifyContent: { xs: 'space-between', sm: 'start' } }}>
                
                    {
                        ingredients?.map( ingredient => (
                            
                                <IngredientCard  ingredient={ingredient} key={ingredient.name}/>
                            
                        ))
                    }
                    
                

            </Grid>
        </>


    )
}

/* eslint react/prop-types: 0 */