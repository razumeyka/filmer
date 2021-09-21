import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Card.module.css';

const Card = (props) => {
    return (
        <Link to={`/films/${props.title}`} key={props.keys} className={classes.card} tabIndex="0">
            <img src={props.poster} alt={`poster ${props.title}`} />
        </Link>
    )
}

export default Card;