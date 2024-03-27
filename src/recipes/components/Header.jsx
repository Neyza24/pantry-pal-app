import { Box, Toolbar, Typography } from "@mui/material"
import { ToggleColorMode } from "./ToggleColorMode";

export const Header = () => {
    return (
        <>
            <Toolbar position="sticky" sx={{ borderBottom: 1, borderColor: 'divider', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.1rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    PANTRY-PAL
                </Typography>
                
                <Box>
                    <ToggleColorMode />
                </Box>
            </Toolbar>
        </>
    )
}

