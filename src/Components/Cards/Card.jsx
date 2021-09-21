import React from 'react';

import classes from './Card.module.css';

const Card = (props) => {
    return (
        <div key={props.key} className={classes.card} tabIndex="0">
            <img src={props.poster} alt={`poster ${props.title}`} />
        </div>
    )
}

export default Card;