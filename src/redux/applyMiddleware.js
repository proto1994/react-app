import compose from './compose';
export default function applyMiddleware(...middlewares) {
  console.log(middlewares, 'middlewares');
  return createStore => (...args) => {
    const store = createStore(...args);
    let dispatch = () => {};

    const middlewareAPI = {
      getState: store.getState,
      dispatch: (...args) => dispatch(...args)
    };

    const chain = middlewares.map(middleware => middleware(middlewareAPI));
    dispatch = compose(...chain)(store.dispatch);
    return {
      ...store,
      dispatch,
    };
  }
}