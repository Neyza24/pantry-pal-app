import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material"


export const IngredientCard = () => {
    return (
        <Grid item xs={4}>
            <CardActionArea component="a" href="#">
                <Card sx={{ display: 'flex' }}>
                    <CardContent sx={{ flex: 1 }}>
                        <Typography component="h2" variant="h5">
                            ingredient title
                        </Typography>
                        <Typography variant="subtitle1" color="primary">
                            Select...
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                        image='{post.image}'
                        alt=''
                    />
                </Card>
            </CardActionArea>
        </Grid>
    )
}

