import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';

function App() {
  return (
    <div className='App'>
      <div className='page'>
        <Switch>
          <Route exact path="/">
            <Header isLoggedIn={false} />
            <Main />
            <Footer />
          </Route>
            <Route exact path="/movies">
              <Header isLoggedIn={true} />
              <Movies />
              <Footer />
            </Route>
            <Route exact path="/saved-movies">
              <Header isLoggedIn={true} />
              <Movies />
              <Footer />
            </Route>
            <Route exact path="/profile">
              <Header isLoggedIn={true} />
              <Profile />
            </Route>
            <Route exact path="/signup">
              <Register />
            </Route>
            <Route exact path="/signin">
              <Login />
            </Route>
            <Route exact path="*">
              <NotFound />
            </Route>
        </Switch>
      </div>
    </div>
  )
}
export default App;