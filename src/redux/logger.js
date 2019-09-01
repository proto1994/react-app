
const logger = store => next => action => {
  console.log('logger', next);
  const result = next(action);
  console.log(store, 'store');
  console.log(next, 'store');
  console.log(action, 'store');
  console.log('result', result);
  // console.log('nextState', store.getState());

  return result;
} 

export default logger;