import React from "react";
import './MoviesCardList.css';
import { Switch, Route } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import More from "../More/More";

function MoviesCardList() {
  return (
    <>
      <section className='movies-list'>
        <Switch>
          <Route exact path='/movies'>
            <MoviesCard />
          </Route>
        </Switch>
      </section>
        <More />
    </>
  )
}

export default MoviesCardList