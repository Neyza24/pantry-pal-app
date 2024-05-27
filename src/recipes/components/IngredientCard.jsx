import { useDispatch } from 'react-redux';
import { addIngredient, removeIngredient } from "../../store/ingredients/selectedIngredients";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"



export const IngredientCard = ({ isIngredientInList, ingredient }) => {

    const dispatch = useDispatch();

    const onAddSelectedIngredient = () => {
        dispatch(addIngredient(ingredient));
    }

    const onRemoveSelectedIngredient = () => {
        dispatch(removeIngredient(ingredient));
    }


    return (
        <Box sx={{  }}  >
            <CardActionArea
                onClick={isIngredientInList ? onRemoveSelectedIngredient : onAddSelectedIngredient} >
                <Card elevation={0} sx={
                    [
                        {
                            display: 'flex', flexDirection: 'column', gap: '0px',
                            alignItems: 'center', textAlign: 'center',
                        },
                        isIngredientInList && { backgroundColor: '#f3fbfb', boxShadow: '#56c195 0.25rem 0.25rem 0 0, #323232 0.25rem 0.25rem 0 0.063rem' }
                    ]}
                >
                    <CardMedia
                        component="img"
                        sx={{ objectFit: 'contain', aspectRatio: '1/1', maxWidth: { xs: '100px' }, paddingTop: '16px' }}
                        image={ingredient.image}
                        alt=''

                    />
                    <CardContent  >
                        <Typography variant="h6" >
                            {ingredient.name}
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary">
                            {ingredient.category}
                        </Typography>
                    </CardContent>
                </Card>
            </CardActionArea>
        </Box>

    )
}

/* eslint react/prop-types: 0 */