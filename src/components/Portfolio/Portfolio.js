import React from "react";
import { Link } from "react-router-dom";
import './Portfolio.css';
import Strelka from '../../images/strelka.svg'; 

function Portfolio() {
  return(
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <div className='portfolio__links'>
          <Link className='portfolio__link-item' href='#' target='_self'>
            Статичный сайт 
            <img src={Strelka} alt='Стрелка' className='portfolio__link' />
          </Link>
          <Link className='portfolio__link-item' href='#' target='_self'>
            Адаптивный сайт
            <img src={Strelka} alt='Стрелка' className='portfolio__link' />
          </Link>
          <Link className='portfolio__link-item' href='#' target='_self'>
            Одностраничное приложение
            <img src={Strelka} alt='Стрелка' className='portfolio__link' />
          </Link>
      </div>
    </section>
  )
}

export default Portfolio;