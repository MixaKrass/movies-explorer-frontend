export const BASE_URL = 'https://api.mixakras.films.nomoredomains.club';

class Api {
  constructor(confing) {
    this._confing = confing;
    this._baseUrl = confing.baseUrl;
    this._headers = confing.headers;
  }

  _checkError(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _updateToken() {
    this._headers.authorization = `Bearer ${localStorage.getItem('jwt')}`;
  }

  // получить фильмы
  getMovies() {
    this._updateToken();
    return fetch(`${this._baseUrl}/movies`, {method: 'GET'}, this._confing)
    .then(
      this._checkError
    );
  }

  // получить информацию о профиле
  getUserInfo() {
    this._updateToken();
    return fetch(`${this._baseUrl}/users/me`, {method: 'GET'}, this._confing)
    .then(
      this._checkError
    );
  }

  // отправить информацию
  patchProfileInfo({name, email}) {
    const newConfing = {
      ...this._confing,
      method: 'PATCH',
      body: JSON.stringify({
        name: name,
        email: email
      })
    };
    return fetch(`${this._baseUrl}/users/me`, newConfing)
    .then(this._checkError);
  }

  // сохраняем фильм
  savedMovie({movie}) {
    const newConfing = {
      ...this._confing,
      method: 'POST',
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: movie.image,
        trailer: movie.trailer,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        thumbnail: movie.thumbnail,
        movieId: String(movie.id),
      }),
    };
    return fetch(`${this._baseUrl}/movies`, newConfing)
    .then(this._checkError);
  }

  // удаляем фильм
  removedMovie({id}) {
    const newConfing = {
      ...this._confing,
      method: 'DELETE',
    };
    return fetch(`${this._baseUrl}/movies/${id}`, newConfing)
    .then(this._checkError);
  }
}

export default new Api({
  baseUrl: BASE_URL,
  headers: {
    authorization: `Bearer ${localStorage.getItem('jwt')}`,
    'Content-Type': 'application/json',
  }
 })

  /*
const BASE_URL = 'https://api.mixakras.films.nomoredomains.club';


 const checkError = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

 
  // получить фильмы
  export const getMovies = (token) => {
    return fetch(`${BASE_URL}/movies`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
    .then((res) => checkError(res));
  }

  // получить информацию о профиле
  export const getUserInfo = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
    .then((res) => checkError(res));
  };

  // отправить информацию
  export const patchProfileInfo = ({ token, name, email}) => {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
    .then((res) => checkError(res));
  };



  // сохраняем фильм
  export const savedMovie = ({token, movie}) => {
    return fetch(`${BASE_URL}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: movie.image,
        trailer: movie.trailer,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        thumbnail: movie.thumbnail,
        movieId: String(movie.id),
      })
    })
    .then((res) => checkError(res));
  }
    

  // удаляем фильм
  export const removedMovie = ({ token, id}) => {
    return fetch (`${BASE_URL}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
    .then((res) => checkError(res));
  } 
  */