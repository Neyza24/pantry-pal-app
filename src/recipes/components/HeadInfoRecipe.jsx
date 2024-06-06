
import { useSelector } from "react-redux";
import { RecipeInfoIcons } from "./RecipeInfoIcons"
import { Box, Typography, CardMedia } from "@mui/material"

export const HeadInfoRecipe = () => {

    const { title, image } = useSelector(state => state.recipe.recipe);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Typography
                variant="h2"
                sx={{
                    textAlign: 'center',
                    pb: '1rem'
                }}
            >
                {title}
            </Typography>
            <Box sx={{
                pb: '1rem',
                borderRadius: '10px',
                width: '100%',
                height: 'auto',
                overflow: 'hidden',

            }}>
                <CardMedia
                    component="img"
                    src={image}
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
