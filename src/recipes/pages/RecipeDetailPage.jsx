import { useSelector } from "react-redux"
import { AppLayout } from "../layout/AppLayout"
import { RecipeView } from "../views/RecipeView"
import { LoaderView } from "../views/LoaderView";


export const RecipeDetailPage = () => {

    const {loading} = useSelector(state => state.recipe);

    return (
        <AppLayout>
            {
                loading ? <LoaderView /> : <RecipeView />
            }
        </AppLayout>
    )
}

/* eslint react/prop-types: 0 */