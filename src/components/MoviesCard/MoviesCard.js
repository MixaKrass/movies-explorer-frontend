import React, { useState } from "react";
import './MoviesCard.css';
import { useLocation } from "react-router-dom";
import film from '../../images/pic__COLOR_pic.svg'

function MoviesCard(){
  const { pathname } = useLocation();
  const [isMovieSaved, setIsMovieSaved] = useState(false)
  const movieButterHandler = () => {
    setIsMovieSaved(!isMovieSaved)
  }

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