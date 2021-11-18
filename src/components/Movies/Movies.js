import React, { useEffect } from "react";
import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({movies, savedMovieInFavourite, onSearchMovies, checkboxFilter, setCheckboxFilter}) {

  

  return (
    <div className='movies'>
      <SearchForm 
        movies={movies}
        onSearchMovies={onSearchMovies}
        setCheckboxFilter={setCheckboxFilter}

      />
      <Preloader />
      <MoviesCardList 
        movies={movies}
        savedMovieInFavourite={savedMovieInFavourite}
        checkboxFilter={checkboxFilter}
      />
    </div>
  )
};

export default Movies;