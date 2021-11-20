import React from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";



function MoviesCardList({movies, savedMovies, isSaved, savedMovieInFavourite, loadMovies}) {
  
  return (
    <section >
    <Preloader loadMovies={loadMovies} />
        <ul className='movies-list'>
            {movies.map((movie) => {
              return (
                    <MoviesCard
                      isSaved = {isSaved}
                      key={isSaved ? movie.movieId : movie.id}
                      movie={movie}
                      savedMovies={savedMovies}
                      savedMovieInFavourite={savedMovieInFavourite}
                    />
              )
            })}
        </ul>
        </section>
  )
}

export default MoviesCardList