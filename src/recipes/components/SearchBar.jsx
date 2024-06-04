import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { setSearchTerm, clearSearchTerm } from '../../store/ingredients/searchTerm';
import { Button, InputBase, Box, Alert } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


export const SearchBar = () => {
    const [isValid, setIsValid] = useState(false);

    const dispatch = useDispatch();
    const { mode } = useSelector(state => state.theme);
    const searchValue = useSelector(state => state.searchTerm.term);

    const count = searchValue.length >= 1 ? 'clear' : 'search';

    const onSearchTermChangeHandler = (e) => {
        const newSearch = String(e.target.value);

        if (newSearch !== '') {
            let isValidInput = /^[a-zA-Z]+$/.test(newSearch);
            if (!isValidInput) {
                console.log("Invalido")
                setIsValid(true);
                return
            }
        }

        setIsValid(false);
        dispatch(setSearchTerm(newSearch));
    }

    const onClearTerm = () => {
        dispatch(clearSearchTerm())
    }


    return (
        <Box sx={{ maxWidth: '45rem', margin: 'auto' }}>
            <Box
                className={`${mode === 'dark' ? 'searchContainer__dark' : 'searchContainer__light'}`}
                component="form"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    height: '48px',
                    pl: '12px',
                    py: 0,
                }}
            >
                <SearchIcon fontSize="small" />

                <InputBase
                    sx={{
                        ml: 1,
                        flex: 1
                    }}
                    placeholder="Search your ingredients"
                    inputProps={{ 'aria-label': 'search' }}
                    type='text'
                    value={searchValue}
                    onChange={onSearchTermChangeHandler}
                />

                <Button
                    variant='contained'
                    sx={{ borderRadius: '0 0.5rem 0.5rem 0', height: '48px', width: '85px', }}
                    aria-label="search"
                    onClick={onClearTerm}
                >
                    {count}
                </Button>

            </Box>
            {isValid && <Alert
                variant="outlined"
                severity='error'
                icon={false}
                sx={{
                    mt: 1.5,
                    py: 0,
                }}
            >
                You cannot search for ingredients with numbers or special characters
            </Alert>
            }
        </Box>

    );

};

