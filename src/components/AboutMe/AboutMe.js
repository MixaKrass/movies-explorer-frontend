import React from "react";
import './AboutMe.css';
import Photo from '../../images/My_Photo.jpg';

function AboutMe() {
  return (
    <section className='about-me'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me-container'>
        <h3 className='about-me__name'>Михаил</h3>
        <img className='about-me__photo' alt='На фото Михаил Красиков' src={Photo} />
        <h4 className='about-me__text'>Фронтенд-разработчик, 24 года</h4>
        <p classNameme='about-me__story' >Я родился и живу в Воронеже, закончил химический факультет в ВГУ. Я люблю слушать музыку, а ещё увлекаюсь видео. Недавно начал кодить. </p>
        <ul className='about-me__social'>
          <li className='about-me__social-item'>
            <a href='https://github.com/MixaKrass' className='about-me__social-item-link' target='_blank'>Github</a>
          </li>
          <li className='about-me__social-item'>
            <a href='https://www.facebook.com/profile.php?id=100007770815083' className='about-me__social-item-link' target='_blank'>Facebook</a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default AboutMe;