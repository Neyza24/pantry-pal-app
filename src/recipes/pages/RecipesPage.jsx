import { useSelector } from "react-redux";
import { AppLayout } from "../layout/AppLayout";
import { RecipesView } from '../views/RecipesView';
import { LoaderView } from "../views/LoaderView";

export const RecipesPage = () => {

    const { loading } = useSelector(state => state.recipes);
    // console.log(loading);

    return (
        <AppLayout>
            {
                loading ? <LoaderView /> : <RecipesView />
            }
        </AppLayout>
    )
}
