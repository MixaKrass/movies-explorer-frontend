import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({movies, savedMovies, onSearchMovies, loadMovies, setCheckboxFilter, onSearchSavedMovies, savedMovieInFavourite, handleDeleteSavedMovies}) {
  return (
    <div className='movies'>
      <SearchForm 
        onSearchMovies={onSearchMovies}
        onSearchSavedMovies={onSearchSavedMovies}
        setCheckboxFilter={setCheckboxFilter}
        isSaved={true}
        />
      <MoviesCardList 
        movies={movies}
        savedMovies={savedMovies}
        loadMovies={loadMovies}
        isSaved={true}
        savedMovieInFavourite={savedMovieInFavourite}
        handleDeleteSavedMovies={handleDeleteSavedMovies}

        
        />
    </div>
  )
};

export default SavedMovies;