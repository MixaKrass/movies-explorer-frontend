import React, { useEffect, useState } from "react";
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
// import useFormWithValidation from "../../hooks/useFormVaildation";

function Profile({handleUpdateUser, handleLogout}) {
  const [nameValue, setNameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const currentUser = React.useContext(CurrentUserContext);

 useEffect(() => {
    setNameValue(currentUser.name);
    setEmailValue(currentUser.email);
  }, [currentUser])
  

  const onChangeName = (e) => {
    setNameValue(e.target.value)
  }
  const onChangeEmail = (e) => {
    setEmailValue(e.target.value)
  }
  

  //const { values, handleChange } = useFormWithValidation({ email, name });
  //const [ hasChanges, setHasChanged ] = useState(false);

  const onEditSubmit = (e) => {
    e.preventDefault();
    handleUpdateUser( nameValue, emailValue )
  }

  return (
    <section className='profile'>
      <div className='profile__container'>
        <h1 className='profile__title'>Привет, {nameValue}!</h1>
        <form className='profile__form' onSubmit={onEditSubmit}>
          <label className='profile__label'>
            Имя
              <input 
                className='profile__input' 
                placeholder={nameValue}
                id='name' 
                name='name'
                onChange={onChangeName}
                value={nameValue || ''}
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
                placeholder={emailValue}
                id='email' 
                name='email'
                onChange={onChangeEmail}
                value={emailValue || ''}
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