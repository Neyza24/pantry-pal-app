import { Grid,  } from '@mui/material'
import { IngredientCard } from './IngredientCard'
import { ingredients } from '../../mock/ingredients'

export const ListIngredients = () => {
    return (
        <>
            {/* <Grid item xs={12} sm={8} py={2} sx={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap'}}>
                <Typography py={1} variant='h5'>INGREDIENTS</Typography>
                <Typography pb={2} variant='body2' color="text.secondary">0/20 ingredients</Typography>
                <Stack direction="row" spacing={1} sx={{flexWrap: 'wrap'}}>
                    <Chip label="Basics" />
                    <Chip label="Vegetables" variant="outlined" />
                    <Chip label="Protein" variant="outlined" />
                    <Chip label="Legumbres" variant="outlined" />
                    <Chip label="Frutas" variant="outlined" />
                    <Chip label="Specias" variant="outlined" />
                    <Chip label="Carbohidratos" variant="outlined" />
                    
                </Stack>

            </Grid> */}
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