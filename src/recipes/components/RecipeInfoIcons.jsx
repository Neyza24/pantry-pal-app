
import { InfoIconCard } from './InfoIconCard';
import { Box } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SoupKitchenOutlinedIcon from '@mui/icons-material/SoupKitchenOutlined';
import EnergySavingsLeafOutlinedIcon from '@mui/icons-material/EnergySavingsLeafOutlined';
import { useSelector } from 'react-redux';


export const RecipeInfoIcons = () => {
    const {recipe} = useSelector( state => state.recipe );

    const time = recipe.readyInMinutes;
    const numberServings = recipe.servings;
    const likes = recipe.aggregateLikes;
    const health = recipe.healthScore;

    return (
        <Box >
            <Box sx={{ display: 'flex', gap: '0px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <InfoIconCard>
                    <SoupKitchenOutlinedIcon fontSize='medium' sx={{}} /><p style={{fontSize: '14px'}}>{numberServings} Servings</p> 
                </InfoIconCard>
                <InfoIconCard>
                    <AccessTimeIcon fontSize='medium' sx={{}} /><p style={{fontSize: '14px'}}>{time} Minutes</p>
                </InfoIconCard>
                <InfoIconCard>
                    <FavoriteBorderIcon fontSize='medium' sx={{}} /><p style={{fontSize: '14px'}}>{likes} Likes</p>
                </InfoIconCard>
                <InfoIconCard>
                    <EnergySavingsLeafOutlinedIcon fontSize='medium' sx={{}} /><p style={{fontSize: '14px'}}>{health}% Healtys</p>
                </InfoIconCard>
            </Box>
        </Box>
    )
}








