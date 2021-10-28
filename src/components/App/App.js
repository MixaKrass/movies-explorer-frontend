import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch, useHistory, Redirect} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import * as auth from '../../utils/AuthApi';
import { getMovies } from '../../utils/MoviesApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import MoviesPage from '../MoviesPage/MoviesPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import SavedMoviesPage from '../SavedMoviesPage/SavedMoviesPage';


function App() {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);
  const [movies, setMovies] = useState([]);
  const jwt = localStorage.getItem('jwt');
  const [currentUser, setCurrentUser] = useState({});
 
  useEffect(() => {
    if (loggedIn) {
      Promise.all([getMovies()])
      .then(([moviesData]) => {
        setMovies(moviesData);
      })
      .catch((err) => console.log(err));
    }
  }, [loggedIn]);


// проверка jwt  
 useEffect(() => {
    if (jwt) {
      auth.tokenCheck(jwt)
      .then((res) => {
        if (res.data) {
          setLoggedIn(true);
        }
      })
      .catch((err) => {
        console.log(err);
        history.push('/signin');
      })
    }
  }, []);

  // обработчик авторизации
   const onLogin = (email, password) => {
    auth.authorization (email, password)
    .then((data) => {
      if(data.token){
        localStorage.setItem('jwt', data.token);
        setLoggedIn(true)
        history.push('/movies');
      }
    })
    .catch((err) => console.log(err));
  } 


  // обработчик регистрации
  const onRegister = ({email, password, name}) => {
    console.log(email, password, name)
    auth.register({email, password, name}) 
    .then(() => {
        history.push('/signin');
    })
    .catch((err) => console.log(err));
  }

  // обработчик завершения
  const handleLogout = () => {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    history.push('/');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className='App'>
      <div className='page'>
        <Switch>
          <Route exact path="/">
            <Header loggedIn={loggedIn} />
            <Main />
            <Footer />
          </Route>
          <ProtectedRoute exact path="/movies" 
            loggedIn={loggedIn} 
            component={MoviesPage}
            movies={movies}
          />
          <ProtectedRoute exact path="/saved-movies"
            loggedIn={loggedIn} 
            component={SavedMoviesPage}
          /> 
            <ProtectedRoute 
            exact 
            path="/profile" 
            loggedIn={loggedIn}
            component={ProfilePage}
            />
            <Route exact path="/signup">
              {!loggedIn ? (
                <Register onRegister={onRegister} />
              ) : (
                <Redirect to='/movies' />
              )}
            </Route>
            <Route exact path="/signin">
              {!loggedIn ? (
              <Login onLogin={onLogin} />
              ) : (
                <Redirect to='/movies' />
              )}
              
            </Route>
            <Route exact path="*">
              <NotFound />
            </Route>
        </Switch>
      </div>
    </div>
    </CurrentUserContext.Provider>
  )
}
export default App;