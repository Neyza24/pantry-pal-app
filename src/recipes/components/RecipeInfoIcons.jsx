
import { Box } from '@mui/material';
import { InfoIconCard } from './InfoIconCard';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SoupKitchenOutlinedIcon from '@mui/icons-material/SoupKitchenOutlined';
import EnergySavingsLeafOutlinedIcon from '@mui/icons-material/EnergySavingsLeafOutlined';
import { recipeDataByID } from '../../mock/recipe';

export const RecipeInfoIcons = () => {

    const time = recipeDataByID.readyInMinutes;
    const numberServings = recipeDataByID.servings;
    const likes = recipeDataByID.aggregateLikes;
    const health = recipeDataByID.healthScore;

    return (
        <Box >
            <Box sx={{ display: 'flex', gap: '0px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <InfoIconCard>
                    <SoupKitchenOutlinedIcon fontSize='medium' sx={{}} />  {numberServings} Servings
                </InfoIconCard>
                <InfoIconCard>
                    <AccessTimeIcon fontSize='medium' sx={{}} /> {time} Minutes
                </InfoIconCard>
                <InfoIconCard>
                    <FavoriteBorderIcon fontSize='medium' sx={{}} /> {likes} Likes
                </InfoIconCard>
                <InfoIconCard>
                    <EnergySavingsLeafOutlinedIcon fontSize='medium' sx={{}} />  {health}% Healty
                </InfoIconCard>
            </Box>

        </Box>
    )
}








