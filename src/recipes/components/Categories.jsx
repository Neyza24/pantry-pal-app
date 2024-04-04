import { Chip } from "@mui/material"
import { categories } from "../../mock/categories"



export const Categories = () => {

    return (
        <div className="chipContainer" >
            {
                categories.map((categorie, index) => (
                    <Chip label={categorie} key={index} variant="outlined" sx={{margin: '4px'}}/>
                ))
            }
        </div>
    )
}

