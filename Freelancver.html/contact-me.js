// contact-me.js
function handleContactFormSubmission(event) {
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  const message = event.target.message.value;

  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  alert("Form submitted! Thank you for your message.");
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (form) form.addEventListener("submit", handleContactFormSubmission);
});
