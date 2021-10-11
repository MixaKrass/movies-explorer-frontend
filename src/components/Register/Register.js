import { stripBasename } from "history/PathUtils";
import React from "react";
import { Link } from "react-router-dom"
import logo from "../../images/logo.svg"
import "./Register.css"

function Register(props) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handlePathChange = (newPath) => {props.onPathChange(newPath)};

  React.useEffect(() => {
    handlePathChange('/sign-up')
  },);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleName = (e) => {
    stripBasename(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSignup(email, password);
  }

  return (
    <>
    <section className='register'>
      <div className='register__container'>
        <Link to='/'> 
          <img className='register__icon' alt='Лого' src={logo}/> 
        </Link>
        <h3 className='register__title'>Добро пожаловать!</h3>
        <form className='register__form' onSubmit={handleSubmit}>
          <label className='register__label' for='name'>Имя</label>
          <input className='register__input' type='text' id='name' onChange={handleName} />
          <span className='register__error'>Текст ошибки</span>
          <label className='register__label' for='email'>Email</label>
          <input className='register__input' type='email' id='signin-email' onChange={handleEmailChange} />
          <span className='register__error'>Текст ошибки</span>
          <label className='register__label' for='password'>Пароль</label>
          <input className='register__input' type='password' id='signin-password' onChange={handlePasswordChange} />
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