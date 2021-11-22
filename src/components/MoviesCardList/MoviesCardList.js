import React from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";



function MoviesCardList({movies, savedMovies, isSaved, savedMovieInFavourite, handleDeleteSavedMovies, loadMovies}) {
  
  return (
    <section >
    <Preloader loadMovies={loadMovies} />
        <ul className='movies-list'>
            {movies.map((movie) => {
              return (
                    <MoviesCard 
                      movie={movie}
                      savedMovies={savedMovies}
                      key={isSaved ? movie.movieId : movie.id}
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