import React from "react";
import { Link } from "react-router-dom"
import logo from "../../images/logo.svg"
import "./Login.css"

function Login() {
  return (
    <>
    <section className='login'>
      <div className='login__container'>
        <Link to='/'> 
          <img className='login__icon' alt='Лого' src={logo}/> 
        </Link>
        <h3 className='login__title'>Рады видеть!</h3>
        <form className='login__form'>
          <label className='login__label' for='email'>Email</label>
          <input className='login__input' type='email' id='name' />
          <span className='login__error'>Текст ошибки</span>
          <label className='login__label' for='password'>Пароль</label>
          <input className='login__input' type='password' id='name' />
          <span className='login__error'>Текст ошибки</span>
          <button className='login__btn' type='submit'>Войти</button>
        </form>
        <p className='login__text'>Ещё не зарегестрированы? <Link to ='/signin' className='login__link'>Регистрация</Link></p>
      </div>
    </section>
    </>
  )
}
export default Login