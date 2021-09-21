import React from 'react';

import classes from './Details.module.css'

const Details = (props) => {
    return (
        <div className={classes.film}>
            <div className={classes.title}>{props.item.title}</div>
            <div className={classes.description}>{props.item.overview}</div>
        </div>
    )
}

export default Details;