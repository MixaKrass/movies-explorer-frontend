import React from "react";
import { Link } from "react-router-dom"
import logo from "../../images/logo.svg"
import "./Register.css"

function Register() {
  return (
    <>
    <section className='register'>
      <div className='register__container'>
        <Link to='/'> 
          <img className='register__icon' alt='Лого' src={logo}/> 
        </Link>
        <h3 className='register__title'>Добро пожаловать!</h3>
        <form className='register__form'>
          <label className='register__label' for='name'>Имя</label>
          <input className='register__input' type='text' id='name' />
          <span className='register__error'>Текст ошибки</span>
          <label className='register__label' for='email'>Email</label>
          <input className='register__input' type='email' id='name' />
          <span className='register__error'>Текст ошибки</span>
          <label className='register__label' for='password'>Пароль</label>
          <input className='register__input' type='password' id='name' />
          <span className='register__error'>Текст ошибки</span>
          <button className='register__btn' type='submit'>Зарегестрироваться</button>
        </form>
        <p className='register__text'>Уже зарегестрированы? <Link to ='/signin' className='register__link'>Войти</Link></p>
      </div>
    </section>
    </>
  )
}
export default Register