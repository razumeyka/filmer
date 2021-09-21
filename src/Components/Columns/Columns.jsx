import React from 'react';

import classes from './Columns.module.css';

const Columns = (props) => {
    return (
        <div className={classes.cols}>
            {props.children}
        </div>
    )
};

export default Columns;