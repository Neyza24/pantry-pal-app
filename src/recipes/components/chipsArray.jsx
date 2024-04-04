
import {Box, Chip, Tabs } from '@mui/material';
import { categories } from "../../mock/categories"


export const ChipsArray = () => {

    return (
        <Box
            
            sx={{maxWidth: {xs: '320px',  sm: 600 }, m: 'auto',}}
        >
            <Tabs
            sx={{
            
                listStyle: 'none'
            }}
            component="div"
            variant="scrollable"
            scrollButtons="auto"
        >
            {categories.map((data) => {

                return (
                    <Box component="li" key={data} sx={{margin: '4px'}} >
                        <Chip
                            label={data}
                            variant="outlined"
                        />
                    </Box>
                );
            })}
        </Tabs>
        </Box>
        
    );
}