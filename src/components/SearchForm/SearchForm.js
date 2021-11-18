import React, { useState } from "react";
import './SearchForm.css';
import Lupa from "../../images/Lupa.svg";
import FindButton from "../../images/FindButton.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import useFormWithValidation from "../../hooks/useFormVaildation";
import { useLocation } from "react-router-dom";

function SearchForm({movies, savedMovies, onSearchMovies, setCheckboxFilter}) {


  const handleFilter = (evt) => {
    setCheckboxFilter(evt.target.checked);
  }
  

  const[movieValue, setMovieValue] = useState('');
  const location = useLocation().pathname;

  const handleMovieOnChange = (evt) => {
    setMovieValue(evt.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSearchMovies(movieValue);
    setMovieValue('');
  }
  
  return (
    <section className='search-form'>
      <form className='search-form__form' onSubmit={handleSubmit}>
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
          <input onChange={handleFilter} className='chechbox__input' type='checkbox' defaultChecked />
          <span className='chechbox__span'></span>
        </label>
      <p className='chechbox__text'>Короткометражки</p>
    </div>
      </section>
  )
}

export default SearchForm;