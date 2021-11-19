import React, { useEffect } from "react";
import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({movies, onSearchSavedMovies, savedMovies, loadMovies, savedMovieInFavourite, onSearchMovies, checkboxFilter, setCheckboxFilter}) {

  

  return (
    <div className='movies'>
      <SearchForm 
        onSearchMovies={onSearchMovies}
        setCheckboxFilter={setCheckboxFilter}
        isSaved={false}
        onSearchSavedMovies={onSearchSavedMovies}
      />
      <Preloader />
      <MoviesCardList 
        movies={movies}
        isSaved={false}
        savedMovieInFavourite={savedMovieInFavourite}
        checkboxFilter={checkboxFilter}
        loadMovies={loadMovies}
        savedMovies={savedMovies}
      />
    </div>
  )
};

export default Movies;