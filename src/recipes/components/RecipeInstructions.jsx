
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export const RecipeInstructions = () => {

    const {recipe} = useSelector( state => state.recipe );
    

    const stepsInstructions = recipe.analyzedInstructions[0].steps;
    
    const paragraphInstructions = recipe.instructions;
    
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
            <p>👩‍🍳👨‍🍳 See step-by-step recipe preparation instructions at 
                <a href={recipe.sourceUrl} target="_blank">{recipe.sourceName}</a>
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
                    instructions
                }
            </div>
        </Box>
    )
}
