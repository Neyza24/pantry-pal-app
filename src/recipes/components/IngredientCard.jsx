import { Box, Card, CardActionArea, CardContent, CardMedia,  Typography } from "@mui/material"
import { useDispatch} from 'react-redux';
import { addIngredient, removeIngredient } from "../../store/ingredients/selectedIngredients";
import { useState } from "react";


export const IngredientCard = ({isIngredientInList, ingredient}) => {

    const [ isSelected, setIsSelected] = useState(false);

    const dispatch = useDispatch();
    const onAddSelectedIngredient = () => {
        dispatch(addIngredient(ingredient));
        setIsSelected(true);
    };


    const onRemoveSelectedIngredient = () => {
        dispatch(removeIngredient(ingredient));
        setIsSelected(false);
        
    }
    

    return (
        <Box sx={{width: {xs: '140px', sm: '140px', md: '148px'}}}  >
            <CardActionArea onClick={isIngredientInList ? onRemoveSelectedIngredient : onAddSelectedIngredient }   >
                <Card elevation={3} sx={[{ display: 'flex', flexDirection: 'column', gap: '2px',  justifySelf: 'stretch', alignItems: 'center', textAlign: 'center', }, isSelected && {background : '#E8EEF3'}]} >
                    <CardMedia
                        component="img"
                        sx={{  objectFit: 'contain', aspectRatio: '1/1', maxWidth: {xs:'100px'}, paddingTop: '16px' }}
                        image={ingredient.image}
                        alt=''
                        
                    />
                    <CardContent sx={{ flex: 1 }}>
                        <Typography variant="h6" sx={{fontZise: {xs: '18px', sm: '20px'}}}>
                            {ingredient.name}
                        </Typography>
                        <Typography variant="subtitle2" sx={{fontZise: {xs: '14px', sm: '16px'}}}>
                            {ingredient.category}
                        </Typography>
                    </CardContent>
                </Card>
            </CardActionArea>
        </Box>
            
        
    )
}

/* eslint react/prop-types: 0 */