import React, { useState } from "react";
import './SearchForm.css';
import Lupa from "../../images/Lupa.svg";
import FindButton from "../../images/FindButton.svg";


function SearchForm({ isSaved, onSearchMovies, onSearchSavedMovies, setCheckboxFilter }) {


  const handleChangeFilter = (evt) => {
    setCheckboxFilter(evt.target.checked);
  }

  const[movieValue, setMovieValue] = useState('');

  const handleMovieOnChange = (evt) => {
    setMovieValue(evt.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSearchMovies(movieValue);
    setMovieValue('');
  }

  const handleSavedSubmit = (evt) => {
    evt.preventDefault();
    onSearchSavedMovies(movieValue);
    setMovieValue('');
  }
  
  return (
    <section className='search-form'>
      <form className='search-form__form' onSubmit={isSaved ? handleSavedSubmit : handleSubmit}>
        <div className='search-form__container'>
          <img className='search-form__lupa' alt="Лупа" src={Lupa} />
          <input className='search_form__input' type="text" 
           placeholder="Фильм" value={movieValue}
           onChange={handleMovieOnChange}
           required />
          <button type='submit' className='search-form__button'>
            <img className="search-form__find" alt="Кнопка" src={FindButton} />
          </button>
        </div>
       </form>
       <div className='chechbox'>
        <label className='chechbox__toggle'>
          <input onChange={handleChangeFilter} className='chechbox__input' type='checkbox' />
          <span className='chechbox__span'></span>
        </label>
      <p className='chechbox__text'>Короткометражки</p>
    </div>
      </section>
  )
}

export default SearchForm;