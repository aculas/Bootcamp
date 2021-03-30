window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values  = { amount: 15000, years: 15, rate: 6.5 }; //Default Values
  const amountUI = document.getElementById("loan-amount");//Inputs from DOM
  amountUI.value = values.amount;
  const yearsUI = document.getElementById("loan-years");//Inputs from DOM
  yearsUI.value = values.years;
  const rateUI = document.getElementById("loan-rate");//Inputs from DOM
  rateUI.value = values.rate;
  update();//Callback function to the submitted value in the form
}


// Get the current values from the UI
// Update the monthly payment
function update() {
  const curretnUIValues = getCurrentUIValues(); //Current values from the UI
  updateMonthly(calculateMonthlyPayment(curretnUIValues)); // Updates the monthly payment
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyRate = (values.rate / 100) / 12;
  const num = Math.floor(values.years * 12);
  return (
    (monthlyRate * values.amount) /
    (1 - Math.pow((1 + monthlyRate), -num))
  ).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyUI = document.getElementById("monthly-payment"); // Stores the string that represents the monthly payment value in a variable.
  monthlyUI.innerText = "$" + monthly; //Updates the UI to the innerText value
}
