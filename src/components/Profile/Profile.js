import React, { useEffect, useState, useContext, useRef } from "react";
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useFormWithValidation from "../../hooks/useFormVaildation";

function Profile({handleUpdateProfile, handleLogout, profileError, setProfileError}) {
  
  const currentUser = useContext(CurrentUserContext);
  const [isNewUserData, setIsNewUserData] = useState(true);
  const nameNew = useRef('');
  const emailNew = useRef('');
  const {values, handleChange, errors, isValid} = useFormWithValidation({
    name: nameNew.current.value,
    email: emailNew.current.value
  });

  useEffect(() => {
    setIsNewUserData(nameNew.current.value === currentUser.name && emailNew.current.value === currentUser.email);
  }, [values.name, values.email, currentUser.name, currentUser.email]);

 
  const onEditSubmit = (e) => {
    e.preventDefault();
    const name = nameNew.current.value;
    const email = emailNew.current.value;
    handleUpdateProfile(name, email);
    e.target.reset()
  }

 

  return (
    <section className='profile'>
      <div className='profile__container'>
        <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
        <form className='profile__form' onSubmit={onEditSubmit}>
          <label className='profile__label'>Имя</label>
          <input 
            className='profile__input' 
            placeholder='Имя'
            id='name' 
            name='name'
            onChange={handleChange}
            defaultValue={currentUser.name}
            ref={nameNew}
            type='text'
            pattern='[а-яА-Яa-zAz-ёЁ\- ]{1,}'
            minLength='2'
            maxLength='40'
            required
          />
          <span className='profile__error'>{errors.name}</span>
          <label className='profile__label'>Email</label>
          <input 
            className='profile__input' 
            placeholder='email'
            id='email' 
            name='email'
            onChange={handleChange}
            defaultValue={currentUser.email}
            ref={emailNew}
            type='email'
            pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
            minLength='2'
            maxLength='40'
            required
          />
          <span className='profile__error'>{errors.email}</span>
          
          <button className={`profile__btn-edit ${(isNewUserData || !isValid) ? 'profile__btn-edit_dslb' : ''}`} 
            disabled={isNewUserData || !isValid} type='submit'>
            Редактировать
          </button>
          <span className='profile__error'>{profileError}</span>
          <button className='profile__btn-logout' type='button' onClick={handleLogout}>
          Выйти из аккаунта
          </button>
        </form>
      </div>
    </section>
  )
}

export default Profile;

