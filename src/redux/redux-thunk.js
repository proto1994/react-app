function createThunkMiddlewate(extraArgument) {
  return ({dispatch, getState}) => next => action => {
    console.log('trunk', next);
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }
    const result = next(action);
    console.log('trunk', result);
    return result;
  }
}
const trunk = createThunkMiddlewate();
export default trunk;