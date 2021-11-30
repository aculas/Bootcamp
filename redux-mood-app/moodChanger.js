const happyButton = document.querySelector("#Happy");
const sadButton = document.querySelector("#Sad");
const angryButton = document.querySelector("#Angry");
const confusedButton = document.querySelector("#Confused");

happyButton.addEventListener("click", function (e) {
  store.dispatch({ type: "HAPPY" });
  const state = store.getState();
  h1.innerText = state.face;
});

sadButton.addEventListener("click", function (e) {
  store.dispatch({ type: "SAD" });
  const state = store.getState();
  h1.innerText = state.face;
});

angryButton.addEventListener("click", function (e) {
  store.dispatch({ type: "ANGRY" });
  const state = store.getState();
  h1.innerText = state.face;
});

confusedButton.addEventListener("click", function (e) {
  store.dispatch({ type: "CONFUSED", payload: "^ω^" });
  const state = store.getState();
  h1.innerText = state.face;
});
