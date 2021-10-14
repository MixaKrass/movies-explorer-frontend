import React, { useState } from "react";
import { Link } from "react-router-dom"
import logo from "../../images/logo.svg"
import "./Register.css"

function Register({onRegister}) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, name);
    onRegister({email, password, name});
  }


  return (
    <>
    <section className='register'>
      <div className='register__container'>
        <Link to='/'> 
          <img className='register__icon' alt='Лого' src={logo}/> 
        </Link>
        <h3 className='register__title'>Добро пожаловать!</h3>
        <form className='register__form' onSubmit={handleSubmit} >
          <label className='register__label' htmlFor='name'>Имя</label>
          <input className='register__input' type='text' id='name' onChange={handleName} value={name} />
          <span className='register__error'>Текст ошибки</span>
          <label className='register__label' htmlFor='email'>Email</label>
          <input className='register__input' type='email' id='signup-email' onChange={handleEmailChange} value={email} />
          <span className='register__error'>Текст ошибки</span>
          <label className='register__label' htmlFor='password'>Пароль</label>
          <input className='register__input' type='password' id='signup-password' onChange={handlePasswordChange} value={password} />
          <span className='register__error'>Текст ошибки</span>
          <button className='register__btn' type='submit' onClick={handleSubmit} >Зарегестрироваться</button>
        </form>
        <p className='register__text'>Уже зарегестрированы? <Link to ='/signin' className='register__link'>Войти</Link></p>
      </div>
    </section>
    </>
  )
}
export default Register