import { Box, Button } from "@mui/material";
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';


export const ToggleColorMode = () => {
    return (
        <Box sx={{
            maxWidth: '40px',
            borderRadius: '50%'
        }}>
            <Button
                variant="text"
                size="small"
                aria-label="button to toggle theme"
                sx={{
                    minWidth: '32px',
                    height: '32px',
                    borderRadius: '50%'
                }}
            >
                <WbSunnyOutlinedIcon fontSize="small" />
            </Button>
        </Box>
    )
}

