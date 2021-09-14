import React from "react";
import './Header.css';
import logo from "../../images/logo.svg";

function Header () {
  return (
    <section className='header'>
      <img className='header__logo' alt='Логотип' src={logo} />
      <div className='header__buttons'>
        <button type='button' className='header__button-register'>Регистрация</button>
        <button type='button' className='header__button-login'>Войти</button>
      </div>
    </section>
  )
}

export default Header;