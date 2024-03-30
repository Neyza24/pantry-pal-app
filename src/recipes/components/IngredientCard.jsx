import {  Card, CardActionArea, CardContent, CardMedia,  Typography } from "@mui/material"

const urlImg = 'https://source.unsplash.com/random?wallpapers'
export const IngredientCard = () => {
    return (
        
            <CardActionArea component="a" href="#">
                <Card sx={{ display: 'flex', flexDirection: 'column', gap: '2px',  justifySelf: 'stretch' }}>
                    <CardMedia
                        component="img"
                        
                        image={urlImg}
                        alt=''
                    />
                    <CardContent sx={{ flex: 1 }}>
                        <Typography variant="h6">
                            ingredient
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary">
                            Select...
                        </Typography>
                    </CardContent>
                </Card>
            </CardActionArea>
        
    )
}

