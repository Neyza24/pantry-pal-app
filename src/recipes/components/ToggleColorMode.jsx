import { Box, Button } from "@mui/material";
import Brightness7Icon from '@mui/icons-material/Brightness7';


export const ToggleColorMode = () => {
    return (
        <Box sx={{ maxWidth: '32px' }}>
            <Button
                variant="text"
                
                size="small"
                aria-label="button to toggle theme"
                sx={{ minWidth: '32px', height: '32px', p: '4px' }}
            >

                <Brightness7Icon fontSize="small" />
            </Button>
        </Box>
    )
}

