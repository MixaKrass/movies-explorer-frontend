import React from "react";
import { Link } from "react-router-dom"
import logo from "../../images/logo.svg"
import "./Register.css"
import useFormWithValidation from "../../hooks/useFormVaildation";

function Register({onRegister, registerError, setRegisterError}) {

  const {values, handleChange, errors, isValid, resetForm} = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ email: values.email, password: values.password, name:values.name });
    console.log(values.email, values.password, values.name)
  }

  const handleChangeInput = (e) => {
    handleChange(e);
    if (registerError.length > 0) {
      setRegisterError('')
    }
  }

  const handleReserForm = () => {
    resetForm();
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
          <input className='register__input' type='text' id='name' name='name' pattern='[а-яА-Яa-zAz-ёЁ\- ]{1,}' onChange={handleChangeInput} value={values.name || ''} minLength='2' maxLength='30' required/>
          <span className='register__error'>{errors.name}</span>
          <label className='register__label' htmlFor='email'>Email</label>
          <input className='register__input' type='email'  name='email' onChange={handleChangeInput} value={values.email || ''} maxLength='40' required/>
          <span className='register__error'>{errors.email}</span>
          <label className='register__label' htmlFor='password'>Пароль</label>
          <input className='register__input' type='password' name='password' onChange={handleChangeInput} value={values.password || ''} minLength='8' required/>
          <span className='register__error'>{errors.password}</span>
          <button className={isValid ? 'register__btn' : 'register__btn register__btn_dslb'} type='submit' disabled={!isValid}>Зарегестрироваться</button>
        </form>
        <p className='register__text'>Уже зарегестрированы? <Link to ='/signin' className='register__link' onClick={handleReserForm}>Войти</Link></p>
      </div>
    </section>
    </>
  )
}
export default Register