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
  const [registerError, setRegisterError] = useState('');
  const [loginError, setLoginError] = useState('');
  const [notFoundError, setNotFoundError] = useState('false');
  const [serverError, setServerError] = useState('false');
  
  
  const handleFilter = () => {
    setCheckboxFilter(!checkboxFilter);
  }

// проверка jwt  
 useEffect(() => {
  const jwt = localStorage.getItem('jwt');
  const firstMovies = localStorage.getItem('movies');
  const savedFirstMovies = localStorage.getItem('savedMovies');
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
        setServerError(true)
        history.push('/signin');
      })
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
        mainApi.getMovies(data.token)
          .then((movies) => {
            setSavedMovies(movies);
            setFilterSavedMovies(movies);
            localStorage.setItem('savedMovies', JSON.stringify(movies));
          })
          .catch((err) => console.log(err));
        mainApi.getUserInfo(data.token)
          .then((user) => {
            setCurrentUser(user);
          })
          .catch((err) => {setServerError(true)})
      }
    })
    .catch((err) => console.log(err));
  } 


  // обработчик регистрации
  const onRegister = ({email, password, name}) => {
    console.log({email, password, name})
    auth.register({email, password, name}) 
    .then(() => {
        history.push('/signin');
    })
    .catch((err) => console.log(err));
  }

  // обработчик завершения
  const handleLogout = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('movies');
    localStorage.removeItem('savedMovies');
    setCurrentUser({});
    setLoggedIn(false);
    setMovies([]);
    setSavedMovies([]);
    setFilterSavedTimeMovies([]);
    setFilterTimeMovies([]);
    setFilterSavedMovies([]);
    setFilterMovie([]);
    history.push('/');
  }

  // обработчик информации о пользователе
  const handleUpdateUser = ({name, email}) => {
    mainApi.patchProfileInfo({name, email})
    .then((data) => {
      console.log(data)
      setCurrentUser(data);
      setProfileError('Обновление успешно')
    })
    .catch((err) => {
      console.log(err);
      setProfileError('Обновление НЕ успешно')
    });
  }

  // поиск фильмов  
  const handleSearchMovies = (movieText) => {
    setLoadMovies(true);
    if (movies.length > 0) {
      const result = searchMovies(movies, movieText)
      if (result.length > 0) {
        setNotFoundError(false);
      } else {
        setNotFoundError(true);
      }
      setFilterMovie(result);
    } else {
      moviesApi.getFirstMovies()
        .then((res) => {
          setMovies(res);
          localStorage.setItem('movies', JSON.stringify(res));
          const result = searchMovies(res, movieText)
          if (result.length > 0) {
            setNotFoundError(false);
          } else {
            setNotFoundError(true);
          }
          setFilterMovie(result);
          if (checkboxFilter) {
            const resTimeFilter = timeFilter(res);
            if (resTimeFilter.length > 0) {
              setNotFoundError(false);
            } else {
              setNotFoundError(true);
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
        setSavedMovies(i => [...i, res]);
        if (checkboxFilter) {
          setFilterSavedTimeMovies(i => [...i, res]);
          setFilterSavedMovies(i => [...i, res]);
        } else {
          setFilterSavedMovies(i => [...i, res]);
        }
      })
      .catch((err) => console.log(err));
      setTimeout(() => {
        setLoadMovies(false);
      }, 300)
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
      setLoadMovies(true);
      mainApi.removedMovie({id})
      .then(() => {
        const res = filterMoviesById(savedMovies, id);
        setSavedMovies(res);
        localStorage.setItem('savedMovies', JSON.stringify(res));
        setFilterSavedMovies(filterMoviesById(filterSavedMovies, id))
        setFilterSavedTimeMovies(filterMoviesById(filterTimeMovies, id))
      })
      setTimeout(() => {
        setLoadMovies(false);
      }, 300)
    }
   
    const filterMoviesById = (films, id) => {
      return films.filter((film) => {
        return film._id !== id
      });
    }

    useEffect(() => {
      setNotFoundError(false);
      if (checkboxFilter) {
        if (location.pathname === '/movies') {
          if (movies.length > 0) {
            const res = timeFilter(filterMovie);
            if (res.length > 0) {
              setNotFoundError(false);
            } else {
              setNotFoundError(true);
            }
            setFilterTimeMovies(res);
          }
        } else if (location.pathname === '/saved-movies') {
          const res = timeFilter(filterSavedMovies);
          if (res.length > 0) {
            setNotFoundError(false);
          } else {
            setNotFoundError(true);
          }
          setFilterSavedTimeMovies(res);
        }
      }
    }, [checkboxFilter])

    useEffect(() => {
      if (location.pathname === '/saved-movies') {
        setFilterSavedMovies(savedMovies);
      }
    })

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
            handleDeleteSavedMovies={handleDeleteSavedMovies}
            setCheckboxFilter={setCheckboxFilter}
            notFoundError={notFoundError}
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
            handleDeleteSavedMovies={handleDeleteSavedMovies}
            setCheckboxFilter={setCheckboxFilter}
            notFoundError={notFoundError}
          /> 
            <ProtectedRoute 
              exact 
              path="/profile" 
              loggedIn={loggedIn}
              component={ProfilePage}
              handleLogout={handleLogout}
              handleUpdateProfile={handleUpdateUser}
              profileError={profileError}
              setProfileError={setProfileError}
              
            />
            <Route exact path="/signup">
              {!loggedIn ? (
                <Register 
                  onRegister={onRegister} 
                  registerError={registerError}
                  setRegisterError={setRegisterError}
                />
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