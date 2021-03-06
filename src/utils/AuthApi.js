export const BASE_URL = 'https://api.mixakras.films.nomoredomains.club';

export const register = ({email, password, name}) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "email": email, 
      "password": password, 
      "name": name
    })
  })
  .then(res => {
    console.log({email, password, name})
    console.log(res)
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
    body: JSON.stringify({
      "email": email, 
      "password": password
    })
  })
  .then(res => {
    console.log({email, password})
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
      'Accept': 'application/json',
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