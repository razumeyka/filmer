import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Films from './Components/Pages/Films';
import Film from './Components/Pages/Film';

const App = () => {
  return (
    <div className="container">
      <h1 className="heading">Filmer</h1>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/films" />
        </Route>
        <Route path="/films" exact>
          <Films />
        </Route>
        <Route path="/films/:filmId">
          <Film />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
