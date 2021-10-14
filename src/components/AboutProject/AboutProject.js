import React from "react";
import './AboutProject.css';

function AboutProject() {
return (
  <section className='about-project'>
    <h2 className='about-project__title' id='about-project'>О проекте</h2>
    <div className='about-project__info'>
        <div className='about-project__text-box'>
          <div className='about-project__text-info'>
            <h3 className='about-project__subtitle'>Дипломный проект включал 5 этапов</h3>
            <p className='about-project__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className='about-project__text-info'>
            <h3 className='about-project__subtitle'>На выполнение диплома ушло 5 недель</h3>
            <p className='about-project__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
      </div>
    <div className='about-project__progress'>
      <div className='about-project__progress-backend'>
        <div className='about-project__progress-item_backend about-project__progress-item_toxicgreen'>1 неделя</div>
        <div className='about-project__progress-item_backend about-project__progress-item__padding'>Back-end</div>
      </div>
      <div className='about-project__progress-frontend'>
        <div className='about-project__progress-item_frontend about-project__progress-item_grey'>4 недели</div>
        <div className='about-project__progress-item_frontend about-project__progress-item__padding'>Front-end</div>
      </div>
    </div>
  </section>
)
}

export default AboutProject;