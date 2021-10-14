import React from "react";
import './Promo.css';
import LandLogo from "../../images/landing-logo.svg";
import NavTab from "../NavTab/NavTab";

function Promo () {
  return (
    <section className='promo'>
      <div className='promo__container'>
        <img className='promo__logo' alt='Логотип планеты' src={LandLogo} />
        <div className='promo__info'>
        <h3 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h3>
        <p className='promo__subtitle' >Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <NavTab />
        </div>
      </div>
    </section>
  )
}
export default Promo