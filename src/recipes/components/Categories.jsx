import { Chip } from "@mui/material"
import { categories } from "../../mock/categories"
import { useDispatch, useSelector } from "react-redux"
import { setSelectCategory } from "../../store/ingredients/categorySlice";




export const Categories = () => {
    
    const dispatch = useDispatch();
    const selectedCategory = useSelector(state => state.category.selectedCategory);

    console.log(selectedCategory);

    const handleClick = (category) => {
        dispatch(setSelectCategory(category))
    }
    
    return (
        <div className="chipContainer" >
            {
                categories.map((categorie, index) =>{

                    return (
                        <Chip onClick={() => handleClick(categorie)} label={categorie} key={index} variant="filled" sx={[{margin: '4px'}, categorie === selectedCategory ? {border : '1px solid #8210F9', color: '#8210F9', background: '#F6F4FE'} : {background: '#F5F5F5'}]}/>
                    )
                })
            }
        </div>
    )
}
