import React, { useState } from 'react';

import Columns from './Components/Columns/Columns';
import LeftCol from './Components/Columns/LeftCol';
import RightCol from './Components/Columns/RightCol';
import Navigation from './Components/Navigation/Navigation';
import Cards from './Components/Cards/Cards';

const App = () => {
  const [genre, setGenre] = useState('');

  const genreHandler = data => {
    setGenre(data);
  };

  return (
    <div className="container">
      <h1 className="heading">Filmer</h1>
      <Columns>
          <LeftCol>
              <Navigation onChangeGenre={genreHandler} />
          </LeftCol>
          <RightCol>
              <Cards genre={genre}/>
          </RightCol>
      </Columns>
    </div>
  );
}

export default App;
