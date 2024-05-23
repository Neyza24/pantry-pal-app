import { recipeDataByID } from "../../mock/recipe"
import { Box, Typography } from "@mui/material";

export const IngredientsRecipe = () => {
    const stepsInstructions = recipeDataByID.extendedIngredients;

    return (
        <Box>
            <Typography variant="h5" sx={{ pb: '1rem', fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                Ingredientes
            </Typography>
            <div style={{ border: '1px solid #efefef', padding: '16px', borderRadius: '10px' }}>
                <ul style={{ paddingLeft: '20px' }}>
                    {
                        stepsInstructions.map(item =>
                            <li key={item.id}
                                style={{ paddingBottom: '12px' }}
                            >
                                {item.original ? item.original : item.name}
                            </li>
                        )
                    }
                </ul>
            </div>
        </Box>

    )
}
