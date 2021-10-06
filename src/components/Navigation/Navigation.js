import React from "react";
import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return(
    <div className='navigation'>
      <ul className='navigation__links'>
        <li className='navigation__links-item'>
          <Link to='/movies' className='navigation__movies'>Фильмы</Link>
        </li>
        <li className='navigation__links-item'>
          <Link to='/movies' className='navigation__saved-movies'>Сохранённые фильмы</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;