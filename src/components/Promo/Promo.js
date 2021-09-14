import React from "react";
import './Promo.css';
import LandLogo from "../../images/landing-logo.svg";

function Promo () {
  return (
    <section className='promo'>
      <img className='promo__logo' alt='Логотип планеты' src={LandLogo} />
      <div className='promo__info'>
      <h3 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h3>
      <p className='promo__subtitle' >Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      <button type='button' className='promo__button'>Узнать больше</button>
      </div>
    </section>
  )
}
export default Promo