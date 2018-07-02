import axios from 'axios';
import {API_URL, USERNAME, PASSWORD} from './settings';

export function _postIdology(payload) {
  console.log("************THIS IS POST IDOLOGY")
  payload.username = USERNAME
  payload.password = PASSWORD
  console.log(payload)
  return axios({
    method: "POST",
    url: API_URL,
    data: payload
  })
}

export function _fetchAllPromos() {
 return axios({
   method: 'GET',
   url: API_URL + "promos/_list/",
   headers: []
 })
}

export function _fetchOnePromo(id) {
  console.log('PROMO', API_URL + "api/promos/" + id + "/details/");
  return axios({
    method: "GET",
    url: API_URL + "api/promos/" + id + "/details/"
  })
}

export function _uploadPhoto(payload) {
  const config = {
      headers: {
          'content-type': 'multipart/form-data'
      }
  }
  return axios.post(API_URL + "scores/", payload, config)
}

export function _submitPromo(payload) {
  console.log("THIS: ", payload)
  const config = {
      headers: {
          'content-type': 'multipart/form-data',
      }
  }
  return axios.post(API_URL + "junk/", payload, config)
}

export function _fetchOneUser(payload) {
  const config = {
      headers: {
          'content-type': 'multipart/form-data',
      }
  }
  return axios.post(API_URL + "user-auth/", payload, config)
}


export function _loginRequest(username, password) {
  return axios({
    method: "POST",
    url: API_URL + "api/auth/token/obtain/",
    data: JSON.stringify({username, password}),
    headers: { 'Content-Type': 'application/json' }
  })
}

export function _refreshAccessToken(token) {
  return axios({
    method: "POST",
    url: API_URL + "api/auth/token/refresh/",
    data: JSON.stringify({token}),
    headers: { 'Content-Type': 'application/json' }
  })
}
