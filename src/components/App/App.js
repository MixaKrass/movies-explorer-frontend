import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch, useHistory, Redirect, useLocation} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import * as auth from '../../utils/AuthApi';
import mainApi from '../../utils/MainApi';
import * as moviesApi from '../../utils/MoviesApi';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import MoviesPage from '../MoviesPage/MoviesPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import SavedMoviesPage from '../SavedMoviesPage/SavedMoviesPage';


function App() {
  const history = useHistory();
  const location = useLocation();
  const jwt = localStorage.getItem('jwt');
  const firstMovies = localStorage.getItem('movies');
  const savedFirstMovies = localStorage.getItem('savedMovies');
  const [loggedIn, setLoggedIn] = useState(false);
  const [movies, setMovies] = useState([]); //массив всех фильмов
  const [filterMovie, setFilterMovie] = useState([]); //фильтрация фильмов по слову
  const [currentUser, setCurrentUser] = useState({});
  const [loadMovies, setLoadMovies] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]); //массив сохранённых фильмов
  const [filterSavedMovies, setFilterSavedMovies] = useState([]);
  const [checkboxFilter, setCheckboxFilter] = useState(false); // фильтрация
  const [filterTimeMovies, setFilterTimeMovies] = useState([]); //короткометражки
  const [filterSavedTimeMovies, setFilterSavedTimeMovies] = useState([]); //короткометражки сохранённые
  const [profileError, setProfileError] = useState('');
  
  
  const handleFilter = () => {
    setCheckboxFilter(!checkboxFilter);
  }

// проверка jwt  
 useEffect(() => {
    if (jwt) {
      if (firstMovies) {
        const res = JSON.parse(firstMovies)
        setMovies(res);
      }
      if (savedFirstMovies) {
        const result = JSON.parse(savedFirstMovies);
        setSavedMovies(result);
        setFilterSavedMovies(result)
      }
      auth.tokenCheck(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            setCurrentUser(res);
          }
      })
      .catch((err) => {
        console.log(err);
        history.push('/signin');
      })
    }
  }, [loggedIn]);

 useEffect(() => {
    if(loggedIn) {
      Promise.all([mainApi.getUserInfo(), mainApi.getMovies()])
      .then(([userData, moviesData]) => {
        setCurrentUser(userData.data);
        setSavedMovies(moviesData.data);
      })
      .catch((err) => console.log(err));
    }
  }, [loggedIn]);
  

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
    setCurrentUser({});
    setLoggedIn(false);
    history.push('/');
  }

  // обработчик информации о пользователе
  const handleUpdateUser = ({name, email}) => {
    mainApi.patchProfileInfo({name, email})
    .then((data) => {
      console.log(data)
      setCurrentUser(data);
    })
    .catch((err) => console.log(err));
  }

  // поиск фильмов  
  const handleSearchMovies = (movieText) => {
    setLoadMovies(true);
    if (movies.length > 0) {
      const result = searchMovies(movies, movieText)
      if (result.length > 0) {
        console.log('1');
      } else {
        console.log('2');
      }
      setFilterMovie(result);
    } else {
      moviesApi.getFirstMovies()
        .then((res) => {
          setMovies(res);
          localStorage.setItem('movies', JSON.stringify(res));
          const result = searchMovies(res, movieText)
          if (result.length > 0) {
            console.log('3');
          } else {
            console.log('4');
          }
          setFilterMovie(result);
          if (checkboxFilter) {
            const resTimeFilter = timeFilter(res);
            if (resTimeFilter.length > 0) {
              console.log('5');
            } else {
              console.log('6');
            }
            setFilterTimeMovies(resTimeFilter);
          }
        })
    }
    setTimeout(() => {
      setLoadMovies(false);
    }, 300)
  }

  const searchMovies = (films, movieText) => {
    let res = [];
    films.forEach((movie) => {
      if (movie.nameRU.toLowerCase().indexOf(movieText.toLowerCase()) > -1) {
        res.push(movie)
      }
    })
    return res;
  }

  const timeFilter = (films) => {
    let res = [];
    films.forEach((movie) => {
      if (movie.duration <= 40) {
        res.push(movie);
      }
    })
    return res;
  }


    // сохранение фильма
    const savedMovieInFavourite = (movie) => {
      setLoadMovies(true);
      mainApi.savedMovie({ movie })
      .then((res) => {
        const films = [...savedMovies, res];
        localStorage.setItem('savedMovies', JSON.stringify(films));
        setSavedMovies(prev => [...prev, res]);
      })
      .catch((err) => console.log(err));
    }

    //поиск по сохранённым фильмам
    const handleSearchSavedMovies = (movieText) => {
      if (savedMovies.length > 0) {
        setFilterSavedMovies(searchMovies(savedMovies, movieText));
      } else {
        setLoadMovies(true)
        mainApi.getMovies()
          .then((res) => {
            setSavedMovies(res);
            localStorage.setItem('savedMovies', JSON.stringify(res));
            setFilterSavedMovies(searchMovies(savedMovies, movieText));
          })
      }
      setTimeout(() => {
        setLoadMovies(false);
      }, 300)
    }


    //удаление фильма
    const handleDeleteSavedMovies = (id) => {
      mainApi.removedMovie({ id})
      .then(() => {

      })
    }
   
    useEffect(() => {
      if (checkboxFilter) {
        if (location.pathname === '/movies') {
          if (movies.length > 0) {
            const res = timeFilter(filterMovie);
            if (res.length > 0) {
              console.log('7');
            } else {
              console.log('8');
            }
            setFilterTimeMovies(res);
          }
        } else if (location.pathname === '/saved-movies') {
          const res = timeFilter(filterSavedMovies);
          if (res.length > 0) {
            console.log('9');
          } else {
            console.log('10');
          }
          setFilterSavedTimeMovies(res);
        }
      }
    }, [checkboxFilter])

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
            checkboxFilter={checkboxFilter}
            setFilter={handleFilter}
            movies={checkboxFilter ? filterTimeMovies : filterMovie}
            onSearchMovies={handleSearchMovies}
            loadMovies={loadMovies}
            savedMovieInFavourite={savedMovieInFavourite}
            onSearchSavedMovies={handleSearchSavedMovies}
            savedMovies={savedMovies}
            setCheckboxFilter={setCheckboxFilter}
          />
          <ProtectedRoute exact path="/saved-movies"
            loggedIn={loggedIn} 
            checkboxFilter={checkboxFilter}
            setFilter={handleFilter}
            movies={checkboxFilter ? filterSavedTimeMovies : filterSavedMovies}
            component={SavedMoviesPage}
            handleSearchMovies={handleSearchMovies}
            loadMovies={loadMovies}
            savedMovieInFavourite={savedMovieInFavourite}
            onSearchSavedMovies={handleSearchSavedMovies}
            savedMovies={savedMovies}
            setCheckboxFilter={setCheckboxFilter}
          /> 
            <ProtectedRoute 
              exact 
              path="/profile" 
              loggedIn={loggedIn}
              component={ProfilePage}
              handleLogout={handleLogout}
              handleUpdateUser={handleUpdateUser}
              profileError={profileError}
              setProfileError={setProfileError}
              
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