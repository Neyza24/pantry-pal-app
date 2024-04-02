
import SearchIcon from '@mui/icons-material/Search';
import { Button, InputBase, Paper } from '@mui/material';


export const SearchBar = () => {

    return (
        <Paper
            component="form"

            sx={{ maxWidth: '720px', display: "flex", alignItems: "center", height: '48px', pl: '12px', py: 0, boxShadow: '0px 4px 16px rgba(43, 52, 69, 0.1)', borderRadius: '0.5rem' }}
        >
            <SearchIcon />

            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search your ingredients"
                inputProps={{ 'aria-label': 'search' }}

            />

            <Button variant='contianed' sx={{ background: '#FFD850', borderRadius: '0 8px 8px 0', height: '48px' }} aria-label="search">Search</Button>
        </Paper>
    );



};

