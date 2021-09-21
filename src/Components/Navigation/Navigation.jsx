import React from 'react';

import classes from './Navigation.module.css';

const Navigation = (props) => {

    const changeGenreHandler = (event) => {
        props.onChangeGenre(event.target.value);
    };

    return (
        <nav>
            <ul className={classes.menu}>
                <li>
                    <button 
                        type="button" 
                        value="action" 
                        className={classes['menu-item']} 
                        onClick={changeGenreHandler}
                    >Action</button>
                </li>
                <li>
                    <button 
                        type="button" 
                        value="comedy"
                        className={classes['menu-item']} 
                        onClick={changeGenreHandler}
                    >Comedy</button>
                </li>
                <li>
                    <button 
                        type="button" 
                        value="drama" 
                        className={classes['menu-item']}
                        onClick={changeGenreHandler}
                    >Drama</button>
                </li>
                <li>
                    <button 
                        type="button" 
                        value="documentary"
                        className={classes['menu-item']} 
                        onClick={changeGenreHandler}
                    >Documentary</button>
                </li>
                <li>
                    <button 
                        type="button" 
                        value="family"
                        className={classes['menu-item']} 
                        onClick={changeGenreHandler}
                    >Family</button>
                </li>
                <li>
                    <button 
                        type="button" 
                        value="thriller" 
                        className={classes['menu-item']}
                        onClick={changeGenreHandler}
                    >Thriller</button>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;