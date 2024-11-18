// script.js
// This function will be called when the button is clicked
function displayMessage() {
  const messageElement = document.getElementById('message');
  messageElement.textContent = 'Hello, you clicked the button!';
}

// Attach the event listener to the button
const button = document.getElementById('myButton');
button.addEventListener('click', displayMessage);


document.getElementById("clickMeButton").addEventListener("click", function () {
  document.getElementById("message").innerText = "Thanks for clicking!";
});
