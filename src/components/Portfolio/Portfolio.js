import React from "react";
import './Portfolio.css';

function Portfolio() {
  return(
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__links'>
        <li className='portfolio__link'>
          <a className='portfolio__link-item' href='' target='_self'>Статичный сайт</a>
        </li>
        <li className='portfolio__link'>
          <a className='portfolio__link-item' href='' target='_self'>Адаптивный сайт</a>
        </li>
        <li className='portfolio__link'>
          <a className='portfolio__link-item' href='' target='_self'>Одностраничное приложение</a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;