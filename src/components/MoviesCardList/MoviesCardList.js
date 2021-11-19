import React from "react";
import './MoviesCardList.css';
import { Switch, Route } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import More from "../More/More";
import { useLocation } from "react-router-dom";
import { useState } from 'react';

function MoviesCardList({movies, savedMovies, isSaved, savedMovieInFavourite}) {
  
  const [currentUserBox, setCurrentUserBox] = useState([]);
  const { pathname } = useLocation();
  return (
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
      /*  <section>
          <Switch>
            <Route exact path='/movies'>
              <More />
            </Route>
          </Switch>
        </section> */
      
  )
}

export default MoviesCardList