
import { recipeDataByID } from "../../mock/recipe"
import { RecipeInfoIcons } from "./RecipeInfoIcons"
import { Box, Typography, CardMedia } from "@mui/material"

export const HeadInfoRecipe = () => {
    const titleRecipe = recipeDataByID.title;
    const imgRecipe = recipeDataByID.image

    return (
        <Box >
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
                        display: 'block',
                        borderRadius: '10px',
                    }}
                />
            </Box>
            <Box
                sx={{
                    borderRadius: "0.625rem",
                    border: "0.125rem solid #efefef",
                    padding: '4px',
                    background: '#ECF8F350'
                }}>
                <RecipeInfoIcons />
            </Box>
        </Box>
    )
}
