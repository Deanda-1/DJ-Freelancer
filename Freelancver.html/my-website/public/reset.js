// reset.js
function resetForm() {
  document.getElementById("contact-form").reset();
  alert("Form has been reset.");
}

document.addEventListener("DOMContentLoaded", () => {
  const resetButton = document.getElementById("reset-button");
  if (resetButton) resetButton.addEventListener("click", resetForm);
});
