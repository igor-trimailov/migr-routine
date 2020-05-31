import {
  requestRoutines,
  receiveRoutinesSuccess,
  receiveRoutinesError,
  apiError,
} from './index'

export const requestRoutinesData = () => async (dispatch) => {
  dispatch(requestRoutines())
  await fetch(process.env.PUBLIC_URL + '/data.json')
    .then((res) => res.json())
    .then((data) => {
      console.log('fetced data', data)
      dispatch(receiveRoutinesSuccess(data))
    })
    .catch((e) => {
      console.warn('data fetch error', e)
      dispatch(receiveRoutinesError('Could not fetch data'))
    })
}



// TODO: move inside config:
const API_BASE_URL = 'http://localhost:5000/api/v1'

// TODO: handle 401 and 403

/**
 * Abstraction of restful api call. The default method is GET, that can be overriden by
 * passing different method in the options
 * Body is expected to be a FormData object, might need to revise this for getters
 * @param {Object} dispatch
 * @param {String} url - full url to the api endpoint
 * @param {Function} callback - success callback
 * @param {Object} options - optional options object, use to supply body and/or switch method
 */
export function restApiCall(dispatch, url, callback, options = {}) {
  return fetch(API_BASE_URL + url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    timeout: 20000,
    ...options,
  })
    .then(
      response => {
        if (response.status === 200) {
          return response.json().then(data => {
            // api will return status of 'success' on good calls, oterwise it's an error
            if (data.status !== 'success') {
              return Promise.reject({
                error: data.message,
              })
            }

            return data
          })
        }

        // resolce as error for all other status codes
        return Promise.reject({ error: 'SERVER_ERROR' })
      },
      () => {
        // resolve as error
        return Promise.reject({ error: 'SERVER_ERROR' })
      }
    )
    .then(json => {
      // success callback
      dispatch(callback(json))
    })
    .catch(err => {
      // error callback
      dispatch(apiError(err))
    })
}

// create new user
export function registerUser(data) {
  return function(dispatch) {
    const url = '/users/register/'
    const options = {
      method: 'POST',
      body: new URLSearchParams(data),
    }

    return restApiCall(dispatch, url, registerUserSuccess, options)
  }
}

export function registerUserSuccess(json) {
  return {
    type: 'REGISTER_SUCCESS',
    payload: json.data,
  }
}