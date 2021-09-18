import React from "react";
import './MoviesCard.css';
import film from '../../images/pic__COLOR_pic.svg'

function MoviesCard() {
  return (
    <>
      <div className='moviesCard'>
          <div className='moviesCard__info'>
            <h2 className='moviesCard__title'>
              33 слова о дизайне
            </h2>
            <p className='moviesCard__duration'>1ч 47м</p>
            <button type='button' className='moviesCard__save moviesCard__saved'></button>
          </div>
          <div className='moviesCard__container'>
          <img className='moviesCard__image' alt='кадр из фильма' src={film} />
        </div>
      </div>

      <div className='moviesCard'>
          <div className='moviesCard__info'>
            <h2 className='moviesCard__title'>
              33 слова о дизайне
            </h2>
            <p className='moviesCard__duration'>1ч 47м</p>
            <button type='button' className='moviesCard__save moviesCard__saved'></button>
          </div>
          <div className='moviesCard__container'>
          <img className='moviesCard__image' alt='кадр из фильма' src={film} />
        </div>
      </div>

      <div className='moviesCard'>
          <div className='moviesCard__info'>
            <h2 className='moviesCard__title'>
              33 слова о дизайне
            </h2>
            <p className='moviesCard__duration'>1ч 47м</p>
            <button type='button' className='moviesCard__save moviesCard__saved'></button>
          </div>
          <div className='moviesCard__container'>
          <img className='moviesCard__image' alt='кадр из фильма' src={film} />
        </div>
      </div>

      <div className='moviesCard'>
          <div className='moviesCard__info'>
            <h2 className='moviesCard__title'>
              33 слова о дизайне
            </h2>
            <p className='moviesCard__duration'>1ч 47м</p>
            <button type='button' className='moviesCard__save moviesCard__saved'></button>
          </div>
          <div className='moviesCard__container'>
          <img className='moviesCard__image' alt='кадр из фильма' src={film} />
        </div>
      </div>

      <div className='moviesCard'>
          <div className='moviesCard__info'>
            <h2 className='moviesCard__title'>
              33 слова о дизайне
            </h2>
            <p className='moviesCard__duration'>1ч 47м</p>
            <button type='button' className='moviesCard__save moviesCard__saved'></button>
          </div>
          <div className='moviesCard__container'>
          <img className='moviesCard__image' alt='кадр из фильма' src={film} />
        </div>
      </div>

      <div className='moviesCard'>
          <div className='moviesCard__info'>
            <h2 className='moviesCard__title'>
              33 слова о дизайне
            </h2>
            <p className='moviesCard__duration'>1ч 47м</p>
            <button type='button' className='moviesCard__save moviesCard__saved'></button>
          </div>
          <div className='moviesCard__container'>
          <img className='moviesCard__image' alt='кадр из фильма' src={film} />
        </div>
      </div>
    </>
  )
}

export default MoviesCard