import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getAppTheme} from './getAppTheme';
import { useState } from 'react';




export const AppTheme = ({ children }) => {

    const [mode] = useState('light');

    const appTheme = createTheme(getAppTheme(mode));

    return (
        <ThemeProvider theme={appTheme}>
            <CssBaseline />

            {children}
        </ThemeProvider>
    )
}

/* eslint react/prop-types: 0 */