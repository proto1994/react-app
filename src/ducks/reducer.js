import {combineReducers} from '../redux';
import index from './index';
const initState = {
    count: 10
  }
  
  const REDUCE = 'reduce';
  
export function reduceAction() {
  return (dispatch) => {
    console.log('reduce Action');
    const result = dispatch({
      type: REDUCE
    });

    console.log(result, 'dispatch')
  }
}
  
function reducer(state = initState, {payload, type}) {
  switch(type) {
    case REDUCE:
    return {
        ...state,
        count: --state.count
    };
    default:
    return state;
  }
}
  

export default combineReducers({
  index,
  reduce: reducer
})
