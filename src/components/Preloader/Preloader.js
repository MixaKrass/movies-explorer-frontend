import React from 'react'
import './Preloader.css'

const Preloader = ({loadMovies}) => {
    return (
        <div className={loadMovies ? "preloader" : "preloader_dslb" } >
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader
