import { useEffect, useRef, useState } from "react";

export function useSearch (search) {
    const [ error, setError] = useState(null);
    const isFirstInput = useRef(true);

    useEffect(() => {
        if(isFirstInput.current) {
            isFirstInput.current = search === ' ';
            return
        }

        if(search.match(/^\d+$/)) {
            setError('No se puede buscar un ingrediente con un número');
            return
        }

        setError(null)


    }, [search])

    return {search, error}
}