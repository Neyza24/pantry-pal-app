import { Container } from "@mui/material"
import { Footer, Header } from "../components"


export const AppLayout = ({ children }) => {
    return (
        <>
            <Container maxWidth="lg" sx={{ backgroundColor: '#FAFFE6', px: { xs: 0 } }}>
                <Header />
                <main >
                    {children}
                </main>
                <Footer />
            </Container>

        </>
    )
}

/* eslint react/prop-types: 0 */