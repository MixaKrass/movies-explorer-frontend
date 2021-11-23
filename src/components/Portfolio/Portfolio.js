import React from "react";
import './Portfolio.css';
import Strelka from '../../images/strelka.svg'; 

function Portfolio() {
  return(
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <div className='portfolio__links'>
          <a className='portfolio__link-item' href='#' target='_self'>
            Статичный сайт 
            <img src={Strelka} alt='Стрелка' className='portfolio__link' />
          </a>
          <a className='portfolio__link-item' href='#' target='_self'>
            Адаптивный сайт
            <img src={Strelka} alt='Стрелка' className='portfolio__link' />
          </a>
          <a className='portfolio__link-item' href='#' target='_self'>
            Одностраничное приложение
            <img src={Strelka} alt='Стрелка' className='portfolio__link' />
          </a>
      </div>
    </section>
  )
}

export default Portfolio;