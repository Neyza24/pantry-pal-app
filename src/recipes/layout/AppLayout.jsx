import { Footer, Header } from "../components"
import { Container } from "@mui/material"



export const AppLayout = ({ children }) => {
    return (
        <>
            <Container maxWidth="xxl" sx={{  px: { xs: 0, sm: 0} }}>
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