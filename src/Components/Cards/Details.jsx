import React from 'react';

import classes from './Details.module.css'

const Details = (props) => {
    return (
        <div className={classes.film}>
            <h2 className={classes.title}>{props.item.title}</h2>
            <p className={classes.description}>{props.item.overview}</p>
        </div>
    )
}

export default Details;