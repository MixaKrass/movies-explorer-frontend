import React, { useEffect, useState, useContext } from "react";
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
// import useFormWithValidation from "../../hooks/useFormVaildation";

function Profile({handleUpdateUser, handleLogout}) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const currentUser = useContext(CurrentUserContext);

 useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser])
  

  const onChangeName = (e) => {
    setName(e.target.value)
  }
  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  

  const onEditSubmit = (e) => {
    e.preventDefault();
    handleUpdateUser({name, email})
  }

  return (
    <section className='profile'>
      <div className='profile__container'>
        <h1 className='profile__title'>Привет, {name}!</h1>
        <form className='profile__form' onSubmit={onEditSubmit}>
          <label className='profile__label'>
            Имя
              <input 
                className='profile__input' 
                placeholder='Имя'
                id='name' 
                name='name'
                onChange={onChangeName}
                value={name || ''}
                type='text'
                minLength='2'
                maxLength='40'
                required
              />
          </label>
          <label className='profile__label'>
            Email
              <input 
                className='profile__input' 
                placeholder='email'
                id='email' 
                name='email'
                onChange={onChangeEmail}
                value={email || ''}
                type='email'
                minLength='2'
                maxLength='40'
                required
              />
          </label>
          <button className='profile__btn-edit' type='submit'>
            Редактировать
          </button>
          <button className='profile__btn-logout' type='button' onClick={handleLogout}>
          Выйти из аккаунта
          </button>
        </form>
      </div>
    </section>
  )
}

export default Profile;