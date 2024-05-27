import { Box } from "@mui/material";

export const Loader = () => {

    return (
        <Box
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}
        >
            <div className="loader__container">
                <div className="loader"></div>
                <div className="pan__container">
                    <div className="pan"></div>
                    <div className="handle"></div>
                </div>
                <div className="shadow"></div>
            </div>
            <h3>Cooking...</h3>
        </Box>
    )
}