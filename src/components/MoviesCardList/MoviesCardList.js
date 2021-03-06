import React from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";



function MoviesCardList({movies, savedMovies, isSaved, savedMovieInFavourite, handleDeleteSavedMovies, loadMovies, notFoundError, serverError}) {
  
  return (
    <section >
    <Preloader loadMovies={loadMovies} />
    <span className='movies-error'>{notFoundError ? 'Ничего не найдено' : '' }</span>
    <span className='movies-server-error'>{serverError ? 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз' : ''}</span>
        <ul className='movies-list'>
            {movies.map((movie) => {
              return (
                    <MoviesCard 
                      key={isSaved ? movie.movieId : movie.id}
                      movie={movie}
                      savedMovies={savedMovies}
                      isSaved = {isSaved}
                      savedMovieInFavourite={savedMovieInFavourite}
                      handleDeleteSavedMovies={handleDeleteSavedMovies}
                    />
              )
            })}
        </ul>
        </section>
  )
}

export default MoviesCardList