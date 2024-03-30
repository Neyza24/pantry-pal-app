
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputBase, Paper } from '@mui/material';


export const SearchBar = () => {


    return (
        <Paper
            component="form"
            elevation={1}
            sx={{ display: "flex", alignItems: "center", px: 1, py: 0.5 }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search your favorite ingredients"
                inputProps={{ 'aria-label': 'search' }}
                
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );



};

