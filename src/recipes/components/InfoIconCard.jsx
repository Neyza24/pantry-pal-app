

import { Card, } from '@mui/material';

export const InfoIconCard = ({children}) => {
    return (
        <Card elevation={0} sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flexWrap: 'wrap',
            padding: '8px 16px',
            background: 'none',
            borderWidth: 0,
        }}>
            {children}
        </Card>
    )
}

/* eslint react/prop-types: 0 */