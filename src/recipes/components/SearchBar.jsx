
import SearchIcon from '@mui/icons-material/Search';
import { Button, InputBase, Paper } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { selectSearchTerm, setSearchTerm } from '../../store/recipes/searchTerm';


export const SearchBar = () => {

    const searchTerm = useSelector(selectSearchTerm);
    const dispatch = useDispatch();

    const onSearchTermChangeHandler = (e) => {
        dispatch(setSearchTerm(e.target.value));
    }

    // const onClearSearchTermHandler = () => {
    //     dispatch(clearSearchTerm());
    // };

    return (
        <Paper
            component="form"
            sx={{ maxWidth: '720px', display: "flex", alignItems: "center", height: '48px', pl: '12px', py: 0, boxShadow: '0px 4px 16px rgba(43, 52, 69, 0.1)', borderRadius: '0.5rem', margin: 'auto' }}
        >
            <SearchIcon />

            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search your ingredients"
                inputProps={{ 'aria-label': 'search' }}
                type='text'
                value={searchTerm}
                onChange={onSearchTermChangeHandler}
            />

            <Button variant='contained' sx={{ borderRadius: '0 8px 8px 0', height: '48px' }} aria-label="search">Search</Button>
        </Paper>

    );



};

