import React, { useEffect, useState } from "react";
import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";


function Movies({movies, onSearchSavedMovies, savedMovies, loadMovies, savedMovieInFavourite, onSearchMovies, checkboxFilter, setCheckboxFilter}) {
  
  
  const addFilmsToMore = () => {
    setMovieWindow(prevState => prevState + hiddenFilms);
    console.log('hello')
  }

  const [movieWindow, setMovieWindow] = useState(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 768) {
      return 12
    } else if (windowWidth >= 500) {
      return 8
    } else return 5
  });

  const [hiddenFilms, setHiddenFilms] = useState(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 768) {
      return 3
    } else if (windowWidth >= 500) {
      return 2
    } else return 2
  });

  const screenWidthChange = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 768) {
      setMovieWindow(12);
      setHiddenFilms(3)
    } else if (windowWidth > 500) {
      setMovieWindow(8);
      setHiddenFilms(2)
    } else {
      setMovieWindow(5);
      setHiddenFilms(2)
    }
  };

  const moviesVisible = movies.slice(0, movieWindow);

  useEffect(() => {
    window.addEventListener('resize', screenWidthChange)
  }, []);
 
  return (
    <div className='movies'>
      <SearchForm 
        onSearchMovies={onSearchMovies}
        setCheckboxFilter={setCheckboxFilter}
        isSaved={false}
        onSearchSavedMovies={onSearchSavedMovies}
      />
      <MoviesCardList 
        movies={moviesVisible}
        isSaved={false}
        savedMovieInFavourite={savedMovieInFavourite}
        checkboxFilter={checkboxFilter}
        loadMovies={loadMovies}
        savedMovies={savedMovies}
      />
      <button type='button' onClick={addFilmsToMore} className={moviesVisible.length === movies.length ? 'movies__btn movies__btn_dslb' : 'movies__btn'}>Ещё</button>
    </div>
  )
};

export default Movies;