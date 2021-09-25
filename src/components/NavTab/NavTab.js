import React from "react";
import './NavTab.css';

function NavTab() {
  return (
    <section className='navtab'>
      <a className='navtab__link' href='#about-project'>
      <button type='button' className='navtab__button'>Узнать больше</button>
      </a>
    </section>
  )
}

export default NavTab;