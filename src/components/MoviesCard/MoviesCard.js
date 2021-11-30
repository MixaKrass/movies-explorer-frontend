import React, { useContext, useEffect, useState } from "react";
import './MoviesCard.css';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";


 function MoviesCard({ movie, isSaved, savedMovies, savedMovieInFavourite, handleDeleteSavedMovies }) {
 
  const [isMovieSaved, setIsMovieSaved] = useState(false);
  const currentUser = useContext(CurrentUserContext);
  const savingMovie = savedMovies.find((item) => item.nameRU === movie.nameRU && item.owner === currentUser._id);
  const film = {
    country: movie.country || 'не указано',
    director: movie.director || 'не указано',
    duration: movie.duration || 'не указано',
    year: movie.year || 'не указано',
    description: movie.description || 'не указано',
    image: isSaved ? movie.image : `https://api.nomoreparties.co${movie.image.url}`,
    trailer: isSaved ? movie.trailer : movie.trailerLink,
    nameRU: movie.nameRU || 'не указано',
    nameEN: movie.nameEN || 'не указано',
    thumbnail: isSaved ? movie.thumbnail : `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
    movieId: isSaved ? movie._id : movie.id,
  }

  const movieButterHandler = () => {
    if(isMovieSaved) {
      const filmForSearch = savedMovies.find((item) => item.movieId === String(movie._id));
      handleDeleteSavedMovies(filmForSearch._id);
    } else { 
      savedMovieInFavourite(film);
    }
    setIsMovieSaved(!isMovieSaved);
  };

  const deleteCard = () => {
    handleDeleteSavedMovies(movie._id);
  }

  const time = (duration) => {
    const minutes = duration % 60;
    const hours = Math.floor(duration / 60);
    return hours > 0 ? `${hours}ч ${minutes}м` : `${minutes}м`;
  }; 
  
 useEffect(() => {
    if(savingMovie) {
      setIsMovieSaved(true);
    }
  }, [savingMovie])

  return (
      <div className='moviesCard' id={isSaved ? movie._id : movie.id} >
          <div className='moviesCard__info'>
            <h2 className='moviesCard__title'>
            {movie.nameRU}
            </h2>
            <p className='moviesCard__duration'>{time(movie.duration)}</p>
            { isSaved ? 
              <button type='button' className='moviesCard__delete' 
                onClick={deleteCard} /> :
              <button type='button' className={`moviesCard__save ${isMovieSaved ? 'moviesCard__save_saved' : ''}`} 
                onClick={movieButterHandler} /> 
              
              }
            </div>
          <div className='moviesCard__container'>
            <a className='moviesCard__link' href={isSaved ? movie.trailer : movie.trailerLink} target='_blank' rel='noreferrer'>
              <img src={isSaved ? movie.image: `https://api.nomoreparties.co${movie.image.url}`} className='moviesCard__image' alt='кадр из фильма'  />
            </a>
          
        </div>
      </div>
  )
}

export default MoviesCard