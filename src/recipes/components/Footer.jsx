import { Box, Container, IconButton, Link, Stack, Typography } from "@mui/material";

import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" mt={1}>
            <Link href="#" sx={{
                color: 'text.secondary',
            }}>PantryPal&nbsp;</Link> {' '}
            {new Date().getFullYear()}
        </Typography>
    );
}

export const Footer = () => {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 4, sm: 8 },
                py: { xs: 4, sm: 6 },
                textAlign: { sm: 'center', md: 'left' },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    pt: { xs: 3, sm: 6 },
                    width: '100%',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                    
                }}
            >
                <div>

                    <Copyright />
                </div>
                <Stack
                    direction="row"
                    justifyContent="left"
                    spacing={1}
                    useFlexGap
                    sx={{
                        color: 'text.secondary',
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
        </Container>
    )
}
