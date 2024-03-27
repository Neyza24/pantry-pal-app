import { Container } from "@mui/material"
import { Footer, Header } from "../components"

export const AppLayout = ({children}) => {
    return (
        <>
            <Container sx={{background: '#F9F6F2'}}>
                <Header />
                <main >
                    {children}
                </main>
            </Container>
            <Footer />
        </>
    )
}

/* eslint react/prop-types: 0 */