const initState = {
  count: 0
}

const ADD = 'add';

export function addAction() {
  return {
    type: ADD
  }
}

export default function reducer(state = initState, {payload, type}) {
  switch(type) {
    case ADD:
      return {
        ...state,
        count: ++state.count
      };
    default:
      return state;
  }
}

