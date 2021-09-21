import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Route } from 'react-router-dom';

import Details from '../Cards/Details';
import Spinner from '../UI/Spinner';

const Film = () => {
    const params = useParams();

    const [ film, setFilm] = useState({});
    const [ isPending, setIsPending] = useState(false);
    const [ errorMessage, setErrorMessage] = useState(null);

    const fetchFilm = useCallback( async () => {
        setIsPending(true);
        setErrorMessage(null);
        try {
            let response = await fetch('https://raw.githubusercontent.com/bdiadiun/technical-assignments/main/movieDataCollection.json');
            let data = await response.json();

            let filmEl = data.find( item => item.title === params.filmId);
            setFilm(filmEl);
        } catch (error) {
            setErrorMessage(error.message);
        }
        setIsPending(false);
    }, [params.filmId]);

    useEffect(() => {
        fetchFilm();
    }, [fetchFilm]);

    let content = <Details item={film} />;

    if ( !isPending && errorMessage ) {
        content = <p>{errorMessage}</p>;
    }

    if ( isPending ) {
        content = <Spinner />;
    }
    
    return (
        <Route path={`/films/${params.filmId}`}>
            {content}
        </Route>
    )
}

export default Film;