import React, { useEffect} from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({movies, savedMovies, onSearchMovies, loadMovies, setCheckboxFilter, onSearchSavedMovies, savedMovieInFavourite, handleDeleteSavedMovies, notFoundError, serverError, clearErrors}) {

  useEffect(() => {
    clearErrors();
  }, [])

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
        notFoundError={notFoundError}
        serverError={serverError}
        />
    </div>
  )
};

export default SavedMovies;