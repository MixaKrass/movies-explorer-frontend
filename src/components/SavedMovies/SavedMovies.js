import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({movies, savedMovies, onSearchMovies}) {
  return (
    <div className='movies'>
      <SearchForm 
        movies={movies}
        onSearchMovies={onSearchMovies}/>
      <Preloader />
      <MoviesCardList 
        movies={movies}
        savedMovies={savedMovies}/>
    </div>
  )
};

export default SavedMovies;