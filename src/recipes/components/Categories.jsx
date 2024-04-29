import { useDispatch, useSelector } from "react-redux"
import { categories } from "../../mock/categories"
import { setSelectCategory } from "../../store/ingredients/categorySlice"
import { Chip } from "@mui/material"


export const Categories = () => {

    const dispatch = useDispatch();
    const selectedCategory = useSelector(state => state.category.selectedCategory);


    const handleClick = (category) => {
        dispatch(setSelectCategory(category))
    }

    return (
        <div className="chipContainer" >
            {
                categories.map((category, index) => {

                    return (
                        <Chip
                            onClick={() => handleClick(category)}
                            label={category}
                            key={index}
                            variant="filled"
                            sx={
                                [
                                    { margin: '0.25rem', },
                                    category === selectedCategory && { borderColor: '#323232', color: '#323232', backgroundColor: '#FFD850' }
                                ]}
                        />
                    )
                })
            }
        </div>
    )
}
