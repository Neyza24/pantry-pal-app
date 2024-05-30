import { Box, Button } from "@mui/material";
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../store/theme/themeSlice";


export const ToggleColorMode = () => {
    const dispatch = useDispatch();
    // const {mode} = useSelector(state => state.theme)

    return (
        <Box sx={{
            maxWidth: '40px',
            borderRadius: '50%',
            
        }}>
            <Button
                variant="contained"
                size="medium"
                aria-label="button to toggle theme"
                sx={{
                    minWidth: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    padding: '4px', 
                    boxShadow: "0.188rem 0.188rem #323232",
                }}
                onClick={() => dispatch(toggleTheme())}
            >
                <WbSunnyOutlinedIcon fontSize="small" sx={{color: 'black'}} />
            </Button>
        </Box>
    )
}

