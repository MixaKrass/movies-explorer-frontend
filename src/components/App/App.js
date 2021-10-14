import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch, useHistory} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import * as auth from '../../utils/AuthApi';
import { getMovies } from '../../utils/MoviesApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';


function App() {
  const history = useHistory();
  const [LoggedIn, setLoggedIn] = useState(false);
  const jwt = localStorage.getItem('jwt');
  const [currentUser, setCurrentUser] = useState({});
 

// проверка jwt  
 /* useEffect(() => {
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
   const handleSigninSubmit = (email, password) => {
    auth.authorization (email, password)
    .then((data) => {
      if(data.token){
        localStorage.setItem('jwt', data.token);
        setLoggedIn(true)
        history.push('/movies');
      }
    })
    .catch((err) => console.log(err));
  } */

  /* const test = (email, password, name) => {
    fetch(`https://api.mixakras.films.nomoredomains.club/signup`, {
      method: 'POST',
      body: JSON.stringify({
        "email": 'Test12345@gmail.com',
        "password": '123456789' ,
        "name": 'Mixa123456789'
      })
    })
  }
  test(  )  */

  

  // обработчик регистрации
  const onRegister = ({email, name , password}) => {
    console.log(email, name , password)
    auth.register({email, name , password}) 
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
            <Header isLoggedIn={false}  />
            <Main />
            <Footer />
          </Route>
            <Route exact path="/movies">
              <Header isLoggedIn={true}  />
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
              <Register onRegister={onRegister} />
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
    </CurrentUserContext.Provider>
  )
}
export default App;