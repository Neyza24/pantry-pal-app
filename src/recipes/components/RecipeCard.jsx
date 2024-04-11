
import { Box, Card, CardContent, CardActions, CardMedia, Button, Typography } from "@mui/material";


export const RecipeCard = ({ recipe }) => {
    return (
        
            <Card
                elevation={3}
                sx={{ position: 'relative', width: '18rem', minHeight: '316px' }}
            >
                <Box
                sx={{position: 'relative', paddingBottom: '100%', overflow: 'hidden', borderRadius: '4px', height: 0}}
                >
                    <CardMedia
                        component='img'
                        src={recipe.image}
                        sx={{ height: '100%', width: 'auto', minWidth: '100%', objectFit: 'cover', position: 'absolute', top: 0, right: '50%', bottom: 'auto', left: 'auto', transform: 'translateX(50%)'  }}
                    />

                </Box>

                <CardContent sx={{ p: 3 }}>


                    <Typography variant="h6" sx={{ fontZise: { xs: '18px', sm: '20px' } }}>
                        {recipe.title}
                    </Typography>
                    <Box>
                        <Typography variant="subtitle2" sx={{ fontZise: { xs: '14px' } }}>
                            {recipe?.missedIngredientCount} missed ingredients
                        </Typography>
                    </Box>
                </CardContent>
                <CardActions sx={{ px: 3 }}>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>

       

    )
}





/* eslint react/prop-types: 0 */