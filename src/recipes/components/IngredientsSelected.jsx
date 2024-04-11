import { useSelector } from 'react-redux';
import { Button, CardMedia, Grid, Typography } from '@mui/material';
import illustration from '../../assets/happy-girl.png';
import { SelectedIngredients } from './SelectedIngredients';




export const IngredientsSelected = () => {

    const ingredientselected = useSelector(state => state.selectedIngredients);
    // console.log(ingredientselected.length);

    const numSelected = ingredientselected.length;

    const renderByLengthSelected = () => {
        if (numSelected == 0) return (<CardMedia
            component="img"
            image={illustration}
            alt=''
            sx={{ margin: 'auto', width: '40%' }}
        />)
    
        
        
        if(numSelected > 0 && numSelected <= 1) return (
            <div>
            <CardMedia
                component="img"
                image={illustration}
                alt=''
                sx={{ margin: 'auto', width: '30%' }}
            />
            <SelectedIngredients />
            </div>
        )
            
        

        return <SelectedIngredients />
                
                
    }
        


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
            flexBasis: '30%'
        }}
        >
            <Typography variant="h5" >
                0 selected ingredients
            </Typography>

            {renderByLengthSelected()}

            <Typography variant="subtitle1" sx={{ mt: 0, mb: '1rem' }}>
                Select any ingredient
            </Typography>
            <Button variant="contained" size="large" sx={{ borderBottom: '4px' }} >Generate Recipes</Button>
        </Grid>
    )
}

