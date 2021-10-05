const form = document.getElementById("form");
const email = document.getElementById("username");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log(username.value);
});

// There is a value property on formws that need to be added to grab the data from
