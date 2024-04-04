import { Box, Container, Toolbar, Typography } from "@mui/material"
import { ToggleColorMode } from "./ToggleColorMode";
import { useEffect, useState } from "react";

export const Header = () => {

    const [colorChange, setColorchange] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 56) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    };

    useEffect(() => {
        changeBackground();
        window.addEventListener("scroll", changeBackground)
    })

    return (
        < Container className={colorChange ? 'navbar-active' : 'navbar'} sx={{ position: 'sticky', top: '0px', zIndex: 20, }}>
            <Toolbar sx={{ width: '100%', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
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
                    <ToggleColorMode sx={{ color: '#000' }} />
                </Box>
            </Toolbar>
        </Container>
    )
}

