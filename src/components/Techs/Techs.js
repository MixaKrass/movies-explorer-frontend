import React from "react";
import './Techs.css'

function Techs() {
  return (
    <section className="techs">
      <div className='techs__container'>
        <h2 className='techs-title'>Технологии</h2>
        <h3 className='techs-subtitle'>7 технологий</h3>
        <h2 className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</h2>
          <ul className='techs__researched'>
            <li className='techs__researched-item'>HTML</li>
            <li className='techs__researched-item'>CSS</li>
            <li className='techs__researched-item'>JS</li>
            <li className='techs__researched-item'>React</li>
            <li className='techs__researched-item'>Git</li>
            <li className='techs__researched-item'>Express.js</li>
            <li className='techs__researched-item'>mongoDB</li>
          </ul>
        </div>
    </section>
  )
}

export default Techs;