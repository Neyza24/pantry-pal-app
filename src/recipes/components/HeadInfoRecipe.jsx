
import { useSelector } from "react-redux";
import { RecipeInfoIcons } from "./RecipeInfoIcons"
import { Box, Typography, CardMedia } from "@mui/material"

export const HeadInfoRecipe = () => {

    const {recipe} = useSelector( state => state.recipe );
    

    const titleRecipe = recipe.title;
    const imgRecipe = recipe.image

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Typography
                variant="h2"
                sx={{
                    textAlign: 'center',
                    pb: '16px'
                }}
            >
                {titleRecipe}
            </Typography>
            <Box sx={{
                pb: '16px',
                borderRadius: '10px',
                width: '100%',
                height: 'auto',
                overflow: 'hidden',
                
            }}>
                <CardMedia
                    component="img"
                    src={imgRecipe}
                    sx={{
                        width: '100%',
                        maxHeight: '280px',
                        aspectRatio: '16/15',
                    }}
                />
            </Box>
            <Box
                sx={{
                    borderRadius: "0.625rem",
                    border: "0.125rem solid #323232",
                    padding: '4px',
                    
                }}>
                <RecipeInfoIcons />
            </Box>
        </Box>
    )
}
