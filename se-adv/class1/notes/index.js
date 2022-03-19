// function showMessage(name, greeting) {
//   console.log(greeting + ", " + name + " whats up.");
// }

// showMessage("Austin", "Hello");

// -----------------------------------------------

// function displayMessage(from, text) {
//   console.log(`${from}: ${text}`);
// }

// displayMessage("Ann", "Hello!");

// -----------------------------------------------

// function generateDefualtText() {
//   return "No text was given";
// }

// function displayMessage(from, text) {
//   text = text ?? "empty message";
//   console.log(`${from}: ${text}`);
// }

// displayMessage("Ann", "Hello!");

//---------------------------------------------------

// function sum(a, b) {
//   if (age >= 18) {
//     return "Access granted";
//   } else {
//     return "Access denied";
//   }
// }

//---------------------------------------------------------

// Function starting with…

// "get…" – return a value,
// "calc…" – calculate something,
// "create…" – create something,
// "check…" – check something and return a boolean, etc.

// showMessage(..)     // shows a message
// getAge(..)          // returns the age (gets it somehow)
// calcSum(..)         // calculates a sum and returns the result
// createForm(..)      // creates a form (and usually returns it)
// checkPermission(..) // checks a permission, returns true/false

//-----------------------------------------------------------------

function checkAge(age) {
  return age >= 18;
}

function displayCheckAgeMessage(isLegalAge) {
  return isLegalAge ? "Access granted" : "Access denied";
}

console.log(displayCheckAgeMessage(checkAge(18)));
