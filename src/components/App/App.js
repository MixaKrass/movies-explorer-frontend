import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from '../Main/Main';
import Movies from '../Movies/Movies'


function App() {
  return (
    <div className='App'>
      <div className='page'>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Switch>
            <Route exact path="/movies">
              <Movies />
              
            </Route>
          </Switch>
        </Switch>
      </div>
    </div>
  )
}
export default App;