
import { Box, Card, CardContent, CardMedia, Button, Typography, CardActions } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import {Link as RouterLink} from 'react-router-dom';

export const RecipeCard = ({ recipe }) => {



    return (

        <Card
            sx={{ 
                display: 'flex',
                flexDirection: 'column',
                height: '21.5rem',
                width: {xs: '19rem', sm: '16rem', lg: '16rem'}, 
                position: 'relative',
                borderRadius: "0.725rem",
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '0.5rem 0rem',
                    height: '11rem',
                }}
            >
                <CardMedia
                    component='img'
                    src={`${recipe.image}?fit=crop&auto=format`}
                    sx={{
                        position: 'absolute',
                        aspectRatio: '16/15',
                        objectFit: 'cover',
                        bottom: '16px',
                        
                    }}
                />
            </Box>

            <CardContent sx={{ p: '0px 16px 24px', maxHeight: '128px' }}>

                <Typography
                    variant="h6"
                    className="demo-1"
                    sx={{ fontZise: { xs: '18px', sm: '20px' }, }}
                >
                    {recipe.title}
                </Typography>
                
                    <Typography variant="subtitle2" sx={{ fontZise: { xs: '14px' }, pt: '8px' }}>
                        {recipe?.missedIngredientCount} missed ingredients
                    </Typography>
                
            </CardContent>
            <CardActions sx={{ p: '0px 16px 20px', position: 'absolute', bottom: '0', width: '100%', }}>
                <Button 
                    size="medium" 
                    variant="outlined" 
                    fullWidth='true'
                    to={`/recipes/1`}
                    component={RouterLink}
                >
                    View details 
                    <ArrowRightAltIcon sx={{textAlign: 'end', paddingLeft: '4px'}} />
                </Button>
                
            </CardActions>
        </Card>
    )
}



/* eslint react/prop-types: 0 */