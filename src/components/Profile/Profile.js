import React, { useEffect, useState, useContext } from "react";
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useFormWithValidation from "../../hooks/useFormVaildation";

function Profile({handleUpdateProfile, handleLogout, profileError, setProfileError}) {

  const {values, handleChange, errors, isValid, resetForm, setValues} = useFormWithValidation();
  const currentUser = useContext(CurrentUserContext);



  const onChange = (e) => {
    handleChange(e);
    if (profileError.length > 0) {
      setProfileError('');
    }
  }
 
  const onEditSubmit = (e) => {
    e.preventDefault();
    handleUpdateProfile({name: values.name, email: values.email});
    resetForm();
  }

  useEffect(() => {
    setValues(currentUser);
  }, [currentUser, setValues]);

  return (
    <section className='profile'>
      <div className='profile__container'>
        <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
        <form className='profile__form' onSubmit={onEditSubmit}>
          <label className='profile__label'>
            Имя
              <input 
                className='profile__input' 
                placeholder='Имя'
                id='name' 
                name='name'
                onChange={onChange}
           //    value={values.name || ''}
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
                onChange={onChange}
             //   value={values.email || ''}
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