import React, { useState, useCallback, useEffect } from 'react';

import Card from './Card';
import Spinner from '../UI/Spinner';

import classes from './Cards.module.css';

const Cards = (props) => {

    const [ films, setFilms ] = useState([]);
    const [ isPending, setIsPending] = useState(false);
    const [ errorMessage, setErrorMessage] = useState(null);

    const fetchData = useCallback( async () => {
        setIsPending(true);
        setErrorMessage(null);
        try {
            let response = await fetch('https://raw.githubusercontent.com/bdiadiun/technical-assignments/main/movieDataCollection.json');
            let data = await response.json();

            if (!props.genre) {
                setFilms(data);
            } else {
                const sortedFilms = data.filter( item => {
                    return item.genre_ids.indexOf(props.genre) !== -1;
                });
                setFilms(sortedFilms);
            }
        } catch (error) {
            setErrorMessage(error.message);
        }
        setIsPending(false);
    }, [props.genre]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    let content = <p>Found no films</p>;

    if ( films.length > 0) {
        content = films.map( film => {
            return (
                <Card 
                    key={`${film.release_date}${film.title}`}
                    poster={film.poster_path}
                    title={film.title}
                />
            );
        });
    }

    if ( !isPending && errorMessage ) {
        content = <p>{errorMessage}</p>;
    }

    if ( isPending ) {
        content = <Spinner />;
    }

    
    return (
        <div className={classes.items}>
            {content}
        </div>
    )
}

export default Cards;