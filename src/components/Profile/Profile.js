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
          <label className='profile__label'>Имя</label>
          <input 
            className='profile__input' 
            placeholder='Имя'
            id='name' 
            name='name'
            onChange={onChange}
            value={values.name || ''}
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
            onChange={onChange}
            value={values.email || ''}
            type='email'
            pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
            minLength='2'
            maxLength='40'
            required
          />
          <span className='profile__error'>{errors.email}</span>
          
          <button className={ isValid ? 'profile__btn-edit' : 'profile__btn-edit profile__btn-edit_dslb'} disabled={!isValid} type='submit'>
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

