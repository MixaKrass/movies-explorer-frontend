import React from "react";
import './Portfolio.css';
import Strelka from '../../images/strelka.svg'; 

function Portfolio() {
  return(
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <div className='portfolio__links'>
          <a className='portfolio__link-item' href='https://mixakrass.github.io/how-to-learn/' target='_blank' rel='noreferrer'>
            Статичный сайт 
            <img src={Strelka} alt='Стрелка' className='portfolio__link' />
          </a>
          <a className='portfolio__link-item' href='https://mixakrass.github.io/russian-travel/index.html' target='_blank' rel='noreferrer'>
            Адаптивный сайт
            <img src={Strelka} alt='Стрелка' className='portfolio__link' />
          </a>
          <a className='portfolio__link-item' href='https://mixakras.nomoredomains.club' target='_blank' rel='noreferrer'>
            Одностраничное приложение
            <img src={Strelka} alt='Стрелка' className='portfolio__link' />
          </a>
      </div>
    </section>
  )
}

export default Portfolio;