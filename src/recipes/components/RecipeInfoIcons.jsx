import { recipeDataByID } from "../../mock/recipe"


export const RecipeInfoIcons = () => {

    const recipe = recipeDataByID;
    const steps = recipe.analyzedInstructions[0].steps;

    const putSteps = steps && steps.map(item => {
        
        
        return <li key={item.number}>{item.number} {item.step}</li>
        } 
    )


    return (
        <ul>
            {
                putSteps
            }
        </ul>
    )
}








