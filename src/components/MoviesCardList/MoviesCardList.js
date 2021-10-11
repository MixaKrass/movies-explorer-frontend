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
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
          </Route>
          <Route exact path='/saved-movies'>
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
          </Route>
        </Switch>
      </section>
      <section>
        <Switch>
          <Route exact path='/movies'>
            <More />
          </Route>
        </Switch>
      </section>

    </>
  )
}

export default MoviesCardList