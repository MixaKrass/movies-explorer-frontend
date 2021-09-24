import React from "react";
import './Profile.css';

function Profile() {
  return (
    <section className='profile'>
      <div className='profile__container'>
        <h1 className='profile__title'>Привет, Михаил!</h1>
        <form className='profile__form'>
          <label className='profile__label'>
            Имя
            <input className='profile__input' placeholder='name' />
          </label>
          <label className='profile__label'>
            Email
            <input className='profile__input' placeholder='email' />
          </label>
          <button className='profile__btn-edit' type='submit'>
            Редактировать
          </button>
          <button className='profile__btn-logout' type='button'>
          Выйти из аккаунта
          </button>
        </form>
      </div>
    </section>
  )
}

export default Profile;