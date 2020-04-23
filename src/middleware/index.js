export default (store) => (next) => (action) => {
  const res = next(action)
  // const state = store.getState
  // const dispatch = store.dispatch

  switch (action.type) {
    default:
    // console.warn('Unrecognized action: ' + action.type)
  }

  return res
}
