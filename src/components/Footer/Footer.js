import React from "react";
import './Footer.css';

function Footer() {
  return(
    <section className='footer'>
      <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <ul className='footer__menu'>
        <li className='footer__year'>&copy; 2021</li>
          <ul className='footer__links'>
            <li className='footer__links-item'>
              <a href='https://practicum.yandex.ru/profile/web' className='footer__link' targer='_blank'>Яндекс.Практикум</a>
            </li>
            <li className='footer__links-item'>
              <a href='https://github.com/MixaKrass' className='footer__link' targer='_blank'>Github</a>
            </li>
            <li className='footer__links-item'>
              <a href='https://www.facebook.com/profile.php?id=100007770815083' className='footer__link' targer='_blank'>Facebook</a>
            </li>
          </ul>
      </ul>
    </section>
  )
}

export default Footer;