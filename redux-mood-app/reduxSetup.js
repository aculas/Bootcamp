const INITIAL_STATE = { face: "(ñ_ñ)", color: "white" };
const moodReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "MOOD_HAPPY":
      return { ...state, face: action.payload, color: "green" };
    case "MOOD_SAD":
      return { ...state, face: action.payload, color: "blue" };
    case "MOOD_ANGRY":
      return { ...state, face: action.payload, color: "red" };
    case "MOOD_CONFUSED":
      return { ...state, face: action.payload, color: "orange" };
    case "RESET":
      return { ...state, face: action.payload, color: "white" };
    default:
      return state;
  }
};
