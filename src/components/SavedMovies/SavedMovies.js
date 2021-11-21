import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({movies, savedMovies, onSearchMovies, loadMovies, onSearchSavedMovies, savedMovieInFavourite}) {
  return (
    <div className='movies'>
      <SearchForm 
        onSearchMovies={onSearchMovies}
        onSearchSavedMovies={onSearchSavedMovies}
        isSaved={true}
        />
      <MoviesCardList 
        movies={movies}
        savedMovies={savedMovies}
        loadMovies={loadMovies}
        isSaved={true}
        savedMovieInFavourite={savedMovieInFavourite}

        
        />
    </div>
  )
};

export default SavedMovies;