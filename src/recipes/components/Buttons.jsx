import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { showCurrentRecipes } from '../../store/recipes/recipesSlice';
import { Box, Button } from "@mui/material"
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import ListAltIcon from '@mui/icons-material/ListAlt';


export const Buttons = () => {

    const dispatch = useDispatch();
    
    return (
        <Box
            sx={{
                display: 'flex',
                pt: '2.5rem',
                height: 'auto',
                justifyContent: 'center',
                gap: '1rem',
                flexWrap: 'wrap'
            }}
        >
            <Button variant="outlined" size="large" to={'/'} component={RouterLink} sx={{ width: { xs: '100%', sm: 'fit-content' } }}>Select other ingredients <ListAltIcon sx={{ paddingLeft: '8px', }} /> </Button>
            <Button variant="contained" size="large" onClick={() => dispatch(showCurrentRecipes())} sx={{ width: { xs: '100%', sm: 'fit-content' } }}>Generate other recipes <AutoFixHighIcon sx={{ paddingLeft: '8px', }} /> </Button>
        </Box>
    )
}

/* eslint react/prop-types: 0 */