import React from "react";
import './Header.css';
import logo from "../../images/logo.svg";
import { Link, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header () {
  const { pathname } = useLocation(); 
  const text = `${pathname==='/' ? 'Регистрация' : 'Аккаунт'}`;

  return (
    <section className={pathname==='/' ? 'header' : 'header_white'}>
      <div className='header__container'>
        <div className='header__packet'>
        <Link to='/'> 
          <img className='header__logo' alt='Логотип' src={logo} />
        </Link>
      {pathname==='/' ? '' : <Navigation />}
        </div>
        <div className={`header__packet ${pathname==='/' ? '' : 'header__packet_burger'}`} >
          <Link to={`${pathname==='/' ? '/signup' : '/profile'}`} className='header__signin-text'>
            {text}
          </Link>
          {pathname==='/' ? (
            <Link to='/signin' className='header__signin-btn' type='button'>Войти</Link>
          ) : (
            <button className='header__btn-acc' type='button' />
          )}
        </div>
        
      </div>
    </section>
  )
}

export default Header;

//<div className='header__buttons'>
//<button type='button' className='header__button-register'>
//<Link className='header__link' to='/signup'>Регистрация</Link>
//</button>
//<button type='button' className='header__button-login'>
//<Link className='header__link' to='/signin'>Войти</Link>
//</button>
//</div>