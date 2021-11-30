const INITIAL_STATE = { face: "(ñ_ñ)" };
const emotionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "HAPPY":
      return { ...state, face: "^ㅂ^" };
    case "SAD":
      return { ...state, face: "⊙︿⊙" };
    case "ANGRY":
      return { ...state, face: "ಠ╭╮ಠ" };
    case "CONFUSED":
      return { ...state, face: "◔_◔" };
    default:
      return state;
  }
};

const store = Redux.createStore(emotionReducer);
