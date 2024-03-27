
// import { makeStyles } from '@material-ui/core/styles';

// import { Divider, IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputBase, Paper } from '@mui/material';
// import DirectionsIcon from '@mui/icons-material/Directions';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//         alignItems: 'center',
//         maxWidth: 400,
//         margin: 'auto',
//         marginTop: theme.spacing(2),
//         marginBottom: theme.spacing(2),
//     },
//     input: {
//         flexGrow: 1,
//         marginRight: theme.spacing(1),
//     },
// }));

export const SearchBar = () => {
    // const classes = useStyles();


    return (
        <Paper
            component="form"
            elevation={1}
            sx={{ display: "flex", alignItems: "center", px: 1, py: 0.5 }}
        >
            {/* <IconButton sx={{ p: '10px' }} aria-label="menu">
                <MenuIcon />
            </IconButton> */}
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search your favorite ingredients"
                inputProps={{ 'aria-label': 'search' }}
                
            />
            {/* <Divider sx={{ height: 28, mx: 0.5 }} orientation="vertical" /> */}
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
            {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                <DirectionsIcon />
            </IconButton> */}
        </Paper>
    );



};

