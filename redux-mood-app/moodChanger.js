const store = Redux.createStore(moodReducer);

const face = document.getElementById("face");

const backgroundColor = store.getState().color;

// listeners for the buttons
document.getElementById("Happy").addEventListener("click", () => {
  store.dispatch({
    type: "MOOD_HAPPY",
    payload: "^ㅂ^",
    color: { backgroundColor },
  });
});

document.getElementById("Sad").addEventListener("click", () => {
  store.dispatch({ type: "MOOD_SAD", payload: ";_;" });
});
document.getElementById("Angry").addEventListener("click", () => {
  store.dispatch({ type: "MOOD_ANGRY", payload: "ಠ╭╮ಠ" });
});
document.getElementById("Confused").addEventListener("click", () => {
  store.dispatch({ type: "MOOD_CONFUSED", payload: "◔_◔" });
});
document.getElementById("Reset").addEventListener("click", () => {
  store.dispatch({ type: "RESET", payload: "(ñ_ñ)" });
});

function renderFace() {
  face.innerHTML = store.getState().face;
}

renderFace();
store.subscribe(renderFace);
