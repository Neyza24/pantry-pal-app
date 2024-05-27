import { useDispatch } from 'react-redux';
import { removeIngredient } from '../../store/ingredients/selectedIngredients';
import { ListItem, Box, List, IconButton, ListItemText } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';


export const SelectedIngredients = ({ ingredientselected }) => {
    const dispatch = useDispatch();

    const onRemoveSelectedIngredient = (ingredient) => {
        dispatch(removeIngredient(ingredient));
    }

    return (

        <Box sx={{ flexGrow: 1 }}>
            <List dense={true}>
                {
                    ingredientselected.map(ingredient =>
                    (
                        <ListItem
                            key={ingredient.id}
                            secondaryAction={
                                <IconButton
                                    edge="end"
                                    aria-label="delete"
                                    onClick={() => onRemoveSelectedIngredient(ingredient)}
                                >
                                    <DeleteIcon fontSize="small" />
                                </IconButton>
                            }
                        >

                            <ListItemText
                                primary={ingredient.name}
                            />
                        </ListItem>

                    )
                    )}
            </List>
        </Box>

    );
}



/* eslint react/prop-types: 0 */