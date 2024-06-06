
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export const RecipeInstructions = () => {

    const { analyzedInstructions, instructions: paragraphInstructions, sourceUrl, sourceName } = useSelector(state => state.recipe.recipe);


    const stepsInstructions = analyzedInstructions[0].steps;

    let handleInstructions = "";

    if (stepsInstructions) {
        handleInstructions = (
            <ul>
                {
                    stepsInstructions?.map(item =>
                    (<li key={item.number}
                        style={{ listStyle: 'none', paddingBottom: '12px' }}
                    >
                        {item.number} {item.step}
                    </li>)
                    )
                }
            </ul>
        );
    } else if (paragraphInstructions) {
        handleInstructions = (<p>{paragraphInstructions}</p>);
    } else {
        handleInstructions = (
            <p>👩‍🍳👨‍🍳 See step-by-step recipe preparation instructions at
                <a href={sourceUrl} target="_blank">{sourceName}</a>
            </p>
        );
    }

    return (
        <Box >
            <Typography variant="h5" sx={{ pb: '1rem', fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                Instructions
            </Typography>
            <div style={{
                borderRadius: "0.625rem",
                border: "0.125rem solid #323232",
                padding: '20px',
            }}>
                {
                    handleInstructions
                }
            </div>
        </Box>
    )
}
