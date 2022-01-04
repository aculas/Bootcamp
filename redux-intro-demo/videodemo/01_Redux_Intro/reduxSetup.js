const INITIAL_STATE = { count: 0 };
const countReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "MULTIPLY":
      return { ...state, count: state.count * action.payload };
    case "RESET":
      return { ...state, count: 0 };
    default:
      return state;
  }
};

// Action is an object with information that we send to our app(instructions)
//  We never call countReducer it gets passed to store

const store = Redux.createStore(countReducer);
