import { recipeDataByID } from "../../mock/recipe"
import { Box, Typography } from "@mui/material";

export const RecipeInstructions = () => {

    const stepsInstructions = recipeDataByID.analyzedInstructions[0].steps;
    const paragraphInstructions = recipeDataByID.instructions;
    let instructions = "";

    if (stepsInstructions) {
        instructions = (
            <ul>
                {
                    stepsInstructions?.map(
                        item =>
                            <li key={item.number}
                                style={{ listStyle: 'none', paddingBottom: '12px' }}
                            >
                                {item.number} {item.step}
                            </li>
                    )
                }
            </ul>
        );
    } else if (paragraphInstructions) {
        instructions = (<p>{paragraphInstructions}</p>);
    } else {
        instructions = (
            <p>👩‍🍳👨‍🍳 See step-by-step recipe preparation instructions at <a href={recipeDataByID.sourceUrl} target="_blank">
                {recipeDataByID.sourceName}
            </a></p>
        );
    }

    return (
        <Box>
            <Typography variant="h5" sx={{ pb: '1rem', fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                Instructions
            </Typography>
            <div style={{ border: '1px solid #efefef', padding: '20px', borderRadius: '10px' }}>
                {
                    instructions
                }
            </div>
        </Box>
    )
}
