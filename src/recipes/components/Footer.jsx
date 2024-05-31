import { Box, IconButton, Stack, Typography } from "@mui/material";

import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#1D221B', display: 'block' }}>
            <Box
                maxWidth="1440px"
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: '1rem',
                    justifyContent: { sm: 'space-between' },
                    alignItems: 'center',
                    py: { xs: 4 },
                    width: '100%',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                    px: { xs: '1rem', sm: '1.5rem', md: '2rem', xl: '3.5rem' },
                    margin: 'auto'
                }}
            >
                <Box
                    sx={{ display: 'inline-block', textAlign: 'left' }}
                >
                    <Typography variant="body2" sx={{ color: '#fff' }} >
                        Made with<span aria-label="love" className="footer__icon-heart">🧡</span>Pantrypal {' '}{new Date().getFullYear()}
                    </Typography>
                </Box>
                <Stack
                    direction="row"
                    justifyContent="left"
                    spacing={1}
                    useFlexGap
                    sx={{
                        color: '#fff',
                    }}
                >
                    <IconButton
                        color="inherit"
                        href="https://github.com/Neyza24/pantry-pal-app"
                        aria-label="GitHub"
                        sx={{ alignSelf: 'center' }}
                    >
                        <FacebookIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        href="https://www.linkedin.com/in/neyza-vargas-nv/"
                        aria-label="LinkedIn"
                        sx={{ alignSelf: 'center' }}
                    >
                        <LinkedInIcon />
                    </IconButton>
                </Stack>
            </Box>
        </Box>
    )
}
