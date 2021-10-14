import React, { useState } from "react";
import './Header.css';
import logo from "../../images/logo.svg";
import { Link, useLocation } from "react-router-dom";
import iconProfile from '../../images/account-people.svg';
import useMediaQuery from 'react-use-media-query-hook';

function Header ({ isLoggedIn }) {
  const isTablet = useMediaQuery('(min-width:769px)');
  const location = useLocation();
  const isLand = location.pathname === '/';
  const isMovies = location.pathname === '/movies';
  const isSavedMovies = location.pathname === '/saved-movies';

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <section className={`header ${!isLoggedIn ? 'header_black' : ''}`}>
      <div className='header__container'>
        <Link to='/'> 
          <img className="header__logo" alt='Логотип' src={logo} />
        </Link>
        {isLoggedIn ? (
          <>
            {isTablet ? (
              <nav className='header__nav'>
                <ul className='header__buttons'>
                  <li>
                    <Link to='/movies' className={`header__btn ${
                      isMovies ? 'header__btn_active' : ''
                      }`}>
                      Фильмы
                    </Link>
                  </li>
                  <li>
                    <Link to='/saved-movies' className={`header__btn ${
                      isSavedMovies ? 'header__btn_active' : ''
                      }`}>
                      Сохранённые фильмы
                    </Link>
                  </li>
                </ul>
                <Link to='/profile' className='header__btn-acc'>
                  <p className='header__btn_prof'>Аккаунт</p>
                  <div className='header__background-color'>
                    <img className='header__btn-icon' alt='Иконка человечка' src={iconProfile} />
                  </div>
                </Link>
              </nav>
            ) : (
              <nav>
                <button className='header__burger-menu-btn' 
                  onClick={handleBurgerClick}>
                </button>
                {isMenuOpen && (
                  <div className='header__block'>
                    <div className='header__wrap'>
                      <button className='header__burger-menu-btn header__burger-menu-btn_open' 
                      onClick={handleBurgerClick}>
                      </button>
                      <ul className='header__wrap-list'>
                        <li>
                          <ul className='header__buttons header__buttons_wrap'>
                            <li>
                              <Link to='/' className={`header__btn ${isLand ? 'header__btn_active' : ''}`}>
                                Главная
                              </Link>
                            </li>
                            <li>
                              <Link to='/movies' className={`header__btn ${isMovies ? 'header__btn_active' : ''}`}>
                                Фильмы
                              </Link>
                            </li>
                            <li>
                              <Link to='/saved-movies' className={`header__btn ${isSavedMovies ? 'header__btn_active' : ''}`}>
                                Сохранённые фильмы
                              </Link>
                            </li>
                          </ul>
                      </li>
                      <li>
                        <Link to='/profile' className='header__btn-acc'>
                          <p className='header__btn_prof'>Аккаунт</p>
                          <div className='header__background-color'>
                            <img className='header__btn-icon' alt='Иконка человечка' src={iconProfile} />
                          </div>
                        </Link>
                      </li>
                    </ul>
                    </div>
                  </div>
                )}
              </nav>
            )}
          </>
        ) : (
          <nav>
            <ul className='header__buttons'>
              <li>
                <Link to='/signup' className='header__btn header__btn_land'>
                  Регистрация
                </Link>
              </li>
              <li>
                <Link to='/signin' className='header__btn header__btn_land header__btn_land_active'>
                  Войти
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </section>
  )
}

export default Header;
