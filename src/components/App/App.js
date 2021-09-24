import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies'
import Profile from '../Profile/Profile'


function App() {
  return (
    <div className='App'>
      <div className='page'>
        <Switch>
          <Route exact path="/">
            <Header />
            <Main />
            <Footer />
          </Route>
            <Route exact path="/movies">
              <Header />
              <Movies />
              <Footer />
            </Route>
            <Route exact path="/saved-movies">
              <Header />
              <Movies />
              <Footer />
            </Route>
            <Route exact path="/profile">
              <Header />
              <Profile />
            </Route>
        </Switch>
      </div>
    </div>
  )
}
export default App;