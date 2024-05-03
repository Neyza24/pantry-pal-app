import { Box } from "@mui/material"
import { Loader } from "../../ui/Loader"


export const LoaderView = () => {
    return (
        <Box
            maxWidth="lg"
            sx={{
                width: '100%',
                pt: {xs: '1rem', md: '3rem'}, 
                minHeight: {xs: 'calc(100vh - 184px)', sm: 'calc(100vh - 156px)'}, 
                
                px: { xs: '1rem', sm: '1.5rem', md: '2rem' }, margin: 'auto' 
            }}
        >
            <Loader />
        </Box>
    )
}
