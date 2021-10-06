import React from "react";
import './SearchForm.css';
import Lupa from "../../images/Lupa.svg";
import FindButton from "../../images/FindButton.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className='search-form'>
      <form className='search-form__form'>
        <div className='search-form__container'>
          <img className='search-form__lupa' alt="Лупа" src={Lupa} />
          <input className='search_form__input' type="text" placeholder="Фильм" required />
          <button type='submit' className='search-form__button'>
            <img className="search-form__find" alt="Кнопка" src={FindButton} />
          </button>
        </div>
       </form>
        <FilterCheckbox />
      </section>
  )
}

export default SearchForm;