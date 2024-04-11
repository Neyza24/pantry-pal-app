import { useSelector } from 'react-redux';
import { ListItem, Box, Grid, List, IconButton, ListItemText } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';





export const SelectedIngredients = () => {
    const ingredientselected = useSelector(state => state.selectedIngredients);

    return (
        <>
            <Box sx={{ flexGrow: 1, maxWidth: 402 }}>
                
                <Grid>
                    <Box>
                        <List dense={true}>
                            {
                                ingredientselected.map( ingredient => 
                                (<ListItem
                                    key={ingredient.id}
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="delete">
                                            
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