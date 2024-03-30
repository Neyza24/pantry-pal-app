import { Grid, Card, CardActionArea, CardContent, CardMedia,  Typography } from "@mui/material"


export const IngredientCard = ({ingredient}) => {
    return (
        <Grid item xs={5} sm={3} md={2.5}>
            <CardActionArea component="a" href="#">
                <Card sx={{ display: 'flex', flexDirection: 'column', gap: '2px',  justifySelf: 'stretch' }}>
                    <CardMedia
                        component="img"
                        
                        image={ingredient.imageUrl}
                        alt=''
                        sx={{aspectRatio: '16/9' }}
                    />
                    <CardContent sx={{ flex: 1 }}>
                        <Typography variant="h6">
                            {ingredient.name}
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary">
                            {ingredient.category}
                        </Typography>
                    </CardContent>
                </Card>
            </CardActionArea>
        </Grid>
            
        
    )
}

/* eslint react/prop-types: 0 */