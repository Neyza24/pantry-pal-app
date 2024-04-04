import { Grid, Card, CardActionArea, CardContent, CardMedia,  Typography } from "@mui/material"


export const IngredientCard = ({ingredient}) => {
    return (
        <Grid item xs={5} sm={3} md={2.5}>
            <CardActionArea component="a" href="#">
                <Card elevation={3} sx={{ display: 'flex', flexDirection: 'column', gap: '2px',  justifySelf: 'stretch', alignItems: 'center' }}>
                    <CardMedia
                        component="img"
                        sx={{  objectFit: 'contain', aspectRatio: '1/1', maxWidth: {xs:'100px'}, paddingTop: '16px' }}
                        image={ingredient.image}
                        alt=''
                        
                    />
                    <CardContent sx={{ flex: 1 }}>
                        <Typography variant="h6" component="div">
                            {ingredient.name}
                        </Typography>
                        <Typography variant="subtitle2">
                            {ingredient.category}
                        </Typography>
                    </CardContent>
                </Card>
            </CardActionArea>
        </Grid>
            
        
    )
}

/* eslint react/prop-types: 0 */