import { addIngredient } from "../store/recipes/selectedIngredientsSlice";
import { useAppDispatch } from "./storeHooks"

export const useIngredientsActions = () => {
    const dispatch = useAppDispatch();

    const addSelectedIngredient = (ingredient) => {
        dispatch(addIngredient(ingredient));
    };

    return { addSelectedIngredient };
}