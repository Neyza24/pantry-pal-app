import { useSelector } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getAppTheme } from './getAppTheme';



export const AppTheme = ({ children }) => {
    const {mode} = useSelector(state => state.theme);

    const appTheme = createTheme(getAppTheme(mode));

    return (
        <ThemeProvider theme={appTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}

/* eslint react/prop-types: 0 */