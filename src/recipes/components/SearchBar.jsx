
import SearchIcon from '@mui/icons-material/Search';
import { Button, InputBase, Paper, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useSearch } from '../../hooks/useSearch';
import { setSearchTerm } from '../../store/ingredients/searchTerm';


export const SearchBar = () => {
    const dispatch = useDispatch();
    
    const searchValue = useSelector(state => state.searchTerm.term);
    const {error} = useSearch(searchValue);
    

    const onSearchTermChangeHandler = (e) => {
        const newSearch = e.target.value;
        dispatch(setSearchTerm(newSearch));
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // }

    // const onClearSearchTermHandler = () => {
    //     dispatch(clearSearchTerm());
    // };

    return (
        <>
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
                value={searchValue}
                onChange={onSearchTermChangeHandler}
            />

            <Button variant='contained' sx={{ borderRadius: '0 8px 8px 0', height: '48px' }} aria-label="search">Search</Button>
        </Paper>
        {error && <Typography sx={{color: 'red'}}>{error}</Typography>}
        </>
        
    );

};

