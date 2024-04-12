import { useDispatch } from 'react-redux';
import { ListItem, Box, Grid, List, IconButton, ListItemText } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { removeIngredient } from '../../store/ingredients/selectedIngredients';



export const SelectedIngredients = ({ingredientselected}) => {
    const dispatch = useDispatch();

    const onRemoveSelectedIngredient = (ingredient) => {
        dispatch(removeIngredient(ingredient));
        
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                
                <Grid>
                    <Box>
                        <List dense={true}>
                            {
                                ingredientselected.map( ingredient => 
                                (<ListItem
                                    key={ingredient.id}
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="delete" onClick={() => onRemoveSelectedIngredient(ingredient)}>
                                            
                                            <DeleteIcon />
                                        </IconButton>
                                    }
                                >
                                    
                                    <ListItemText
                                        primary={ingredient.name}

                                    />
                                </ListItem>)
                            )}
                        </List>
                    </Box>

                </Grid>

            </Box>
        </>

    );
}



/* eslint react/prop-types: 0 */