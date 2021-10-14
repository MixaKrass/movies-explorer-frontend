import React from "react";
import { Link } from "react-router-dom"
import logo from "../../images/logo.svg"
import "./Login.css"

function Login(props) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
  e.preventDefault();
  props.onSignin(email, password);
}

  return (
    <>
    <section className='login'>
      <div className='login__container'>
        <Link to='/'> 
          <img className='login__icon' alt='Лого' src={logo}/> 
        </Link>
        <h3 className='login__title'>Рады видеть!</h3>
        <form className='login__form' onSubmit={handleSubmit} >
          <label className='login__label' htmlFor='email'>Email</label>
          <input className='login__input' onChange={handleEmailChange} type='email' id='signin-email' required />
          <span className='login__error'>Текст ошибки</span>
          <label className='login__label' htmlFor='password'>Пароль</label>
          <input className='login__input' onChange={handlePasswordChange} type='password' id='signin-password' required />
          <span className='login__error'>Текст ошибки</span>
          <button className='login__btn' type='submit'>Войти</button>
        </form>
        <p className='login__text'>Ещё не зарегестрированы? <Link to ='/signup' className='login__link'>Регистрация</Link></p>
      </div>
    </section>
    </>
  )
}
export default Login