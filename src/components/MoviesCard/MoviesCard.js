import React, { useState } from "react";
import './MoviesCard.css';
import { useLocation } from "react-router-dom";
import film from '../../images/pic__COLOR_pic.svg'

 function MoviesCard({ movie }){
 /* const {
    country,
    created_at,
    description,
    director,
    duration,
    id,
    image,
    nameEN,
    nameRU,
    trailerLink,
    updated_at,
    year,
  } = movie; */
  const url = "https://api.nomoreparties.co"
  const { pathname } = useLocation();
  const [isMovieSaved, setIsMovieSaved] = useState(false);
  const movieButterHandler = () => {
    setIsMovieSaved(!isMovieSaved);
  };

  /* const time = () => {
    const minutes = duration % 60;
    const hours = Math.floor(duration / 60);
    return `${hours > 0 ? hours + 'ч' : ''}${minutes > 0 ? minutes + 'м' : ''}`;
  }; */

  return (
    <>
      <div className='moviesCard'>
          <div className='moviesCard__info'>
            <h2 className='moviesCard__title'>
            33 слова о дизайне
            </h2>
            <p className='moviesCard__duration'>1ч 47м</p>
            { pathname === '/movies' ? 
              <button className={`moviesCard__save ${isMovieSaved ? 'moviesCard__save_saved' : ''}`} 
              onClick={movieButterHandler} /> :
              <button className='moviesCard__delete' />
              }
            </div>
          <div className='moviesCard__container'>
          <img className='moviesCard__image' alt='кадр из фильма' src={film} />
        </div>
      </div>
    </>
  )
}

export default MoviesCard