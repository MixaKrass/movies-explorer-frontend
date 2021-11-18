import React, { useState } from "react";
import './MoviesCard.css';
import { useLocation } from "react-router-dom";


 function MoviesCard({ movie, isSaved, savedMovieInFavourite }) {
 

  const { pathname } = useLocation();
  const [isMovieSaved, setIsMovieSaved] = useState(false);
  const movieButterHandler = () => {
    setIsMovieSaved(!isMovieSaved);
  };

    const time = (duration) => {
    const minutes = duration % 60;
    const hours = Math.floor(duration / 60);
    return hours > 0 ? `${hours}ч ${minutes}м` : `${minutes}м`;
  }; 
  
  
  return (
  
      <div className='moviesCard'>
          <div className='moviesCard__info'>
            <h2 className='moviesCard__title'>
            {movie.nameRU}
            </h2>
            <p className='moviesCard__duration'>{time(movie.duration)}</p>
            { pathname === '/movies' ? 
              <button className={`moviesCard__save ${isMovieSaved ? 'moviesCard__save_saved' : ''}`} 
              onClick={movieButterHandler} /> :
              <button className='moviesCard__delete' />
              }
            </div>
          <div className='moviesCard__container'>
            
          <img src={`https://api.nomoreparties.co${movie.image.url}`} className='moviesCard__image' alt='кадр из фильма'  />
          
        </div>
      </div>
    
  )
}

export default MoviesCard