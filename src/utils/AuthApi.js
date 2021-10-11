export const BASE_URL = 'https://mixakras.films.nomoredomains.club';

export const register = (email, password, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password, name})
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.status)
    }
  })
}

export const authorization = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.status)
    }
  })
}

export const tokenCheck = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${token}`}
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.status)
    }
  })
}