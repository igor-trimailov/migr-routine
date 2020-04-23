import {
  requestRoutines,
  receiveRoutinesSuccess,
  receiveRoutinesError,
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
