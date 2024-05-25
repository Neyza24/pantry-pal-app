import { useSelector } from "react-redux"
import { AppLayout } from "../layout/AppLayout"
import { RecipeView } from "../views/RecipeView"


export const RecipeDetailPage = () => {

    const {recipe} = useSelector(state => state.recipe);
    console.log(recipe.title);

    return (
        <AppLayout>
            <RecipeView recipe={recipe}/>
        </AppLayout>
        
    )
}

/* eslint react/prop-types: 0 */