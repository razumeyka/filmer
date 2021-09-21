import React, { useState } from 'react';

import Columns from '../Columns/Columns';
import LeftCol from '../Columns/LeftCol';
import RightCol from '../Columns/RightCol';
import Navigation from '../Navigation/Navigation';
import Cards from '../Cards/Cards';

const Films = () => {
    const [genre, setGenre] = useState('');

    const genreHandler = data => {
        setGenre(data);
    };

    return (
        <Columns>
            <LeftCol>
                <Navigation onChangeGenre={genreHandler} />
            </LeftCol>
            <RightCol>
                <Cards genre={genre}/>
            </RightCol>
        </Columns>
    )
}

export default Films;