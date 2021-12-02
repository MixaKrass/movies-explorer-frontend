import React, { useState } from "react";
import './SearchForm.css';
import Lupa from "../../images/Lupa.svg";
import FindButton from "../../images/FindButton.svg";
import useFormWithValidation from "../../hooks/useFormVaildation";


function SearchForm({ isSaved, onSearchMovies, onSearchSavedMovies, setCheckboxFilter, loadMovies }) {

  const [error, setError] = useState('');
  const { values, isValid, handleChange } = useFormWithValidation({
    search: '',
  })

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isValid) {
      onSearchMovies(values.search);
    } else {
      setError('Нужно ввеcти ключевое слово.')
    }
  }

  const handleSavedSubmit = (evt) => {
    evt.preventDefault();
    if (isValid) {
      onSearchSavedMovies(values.search);
    } else {
      setError('Нужно ввеcти ключевое слово.')
    }
    
  }

  const handleChangeFilter = (evt) => {
    setCheckboxFilter(evt.target.checked);
  }

  
  return (
    <section className='search-form'>
      <form className='search-form__form' onSubmit={isSaved ? handleSavedSubmit : handleSubmit} noValidate>
        <label htmlFor='search' className='search-form__container'>
          <img className='search-form__lupa' alt="Лупа" src={Lupa} />
          <input className='search_form__input' type="text" 
          name='search' id='search'
           placeholder="Фильм" value={values.search || ''}
           onChange={handleChange}  autoComplete='off'
           required readOnly={loadMovies} />
           </label>
           <span className='search-form__error' id='searchFormError'>{isValid ? '' : `${error}`}</span>
          <button type='submit' className='search-form__button'>
            <img className="search-form__find" alt="Кнопка" src={FindButton} />
          </button>
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