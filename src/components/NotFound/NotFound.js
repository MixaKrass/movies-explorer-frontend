import React from "react";
import './NotFound.css'
import { useHistory } from 'react-router-dom'

function NotFound() {

const history = useHistory();

  return (
    <section className='not-found'>
      <div className='not-found__container'>
        <h1 className='not-found__err'>404</h1>
        <h2 className='not-found__text'>Страница не найдена</h2>
        <p className='not-found__back' onClick={() => history.goBack()}>Назад</p>
      </div>
    </section>
  )
}

export default NotFound;