import { recipeDataByID } from "../../mock/recipe"
import { Box, Typography } from "@mui/material";

export const IngredientsRecipe = () => {
    const stepsInstructions = recipeDataByID.extendedIngredients;

    return (
        <Box >
            <Typography variant="h5" sx={{ pb: '1rem', fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                Ingredientes
            </Typography>
            <div style={{ borderRadius: "0.625rem",
                    border: "0.125rem solid #efefef",
                    background: '#ECF8F350', padding: '20px', }}>
                <ul style={{ paddingLeft: '20px'}}>
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
