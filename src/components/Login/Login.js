import React from "react";
import { Link } from "react-router-dom"
import logo from "../../images/logo.svg"
import "./Login.css"
import useFormWithValidation from "../../hooks/useFormVaildation";

function Login({onLogin, loginError, setLoginError}) {

  const {values, handleChange, errors, isValid, resetForm} = useFormWithValidation();


  const handleSubmit = (e) => {
  e.preventDefault();
  onLogin({email: values.email, password: values.password});
  console.log(values.email, values.password);
}

const handleChangeInput = (e) => {
  handleChange(e);
  if (loginError.length > 0) {
    setLoginError('')
  }
}

const handleReserForm = () => {
  resetForm();
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
          <input className='login__input' onChange={handleChangeInput} type='email' name='email'  value={values.email || ''} maxLength='40' required />
          <span className='login__error'>{errors.email}</span>
          <label className='login__label' htmlFor='password'>Пароль</label>
          <input className='login__input' onChange={handleChangeInput} type='password' name='password'  value={values.password || ''} minLength='8' required />
          <span className='login__error'>{errors.password}</span>
          <button className={isValid ? 'login__btn' : 'login__btn login__btn_dslb'}  type='submit'>Войти</button>
        </form>
        <p className='login__text'>Ещё не зарегестрированы? <Link to ='/signup' className='login__link' onClick={handleReserForm} >Регистрация</Link></p>
      </div>
    </section>
    </>
  )
}
export default Login