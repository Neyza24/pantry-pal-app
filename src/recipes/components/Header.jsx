// import { useEffect, useState } from "react";
import { Box, Toolbar, Typography } from "@mui/material"
import { ToggleColorMode } from "./ToggleColorMode";


export const Header = () => {

    return (
        <Box  >
            <Box maxWidth="1440px" sx={{ margin: 'auto' }}>
                <Toolbar
                    sx={{
                        width: '100%',
                        height: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        py: '1rem',
                        px: { xs: '1rem', sm: '1.5rem', md: '2rem', xl: '3.5rem' },
                    }}
                >
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.08rem',
                            
                        }}
                    >
                        PantryPal
                    </Typography>

                    <Box>
                        <ToggleColorMode />
                    </Box>
                </Toolbar>
            </Box>
        </Box>

    )
}

