import { Chip } from "@mui/material"
import { categories } from "../../mock/categories"


export const Categories = () => {
    return (
        <div style={{ display: 'flex', gap: '0.5rem', paddingBottom: '0px', marginBottom: '0px' }}>
            {
                categories.map(categorie => (
                    <Chip label={categorie} key={categorie} variant="outlined" />
                ))
            }
        </div>
    )
}

