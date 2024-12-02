// title.js
function setTitle(newTitle) {
  document.title = newTitle;
}

document.addEventListener("DOMContentLoaded", () => {
  setTitle("Welcome to My Portfolio");
});

// about.js
function displayAboutInfo() {
  const aboutSection = document.getElementById("about-section");
  aboutSection.innerHTML = `
          <h1>About This Application</h1>
          <p>This application showcases my skills and projects.</p>
          <p>Developed by: Your Name</p>
          <p>Version: 1.0.0</p>
      `;
}

document.addEventListener("DOMContentLoaded", displayAboutInfo);

// certifications.js
function displayCertifications() {
  const certificationsSection = document.getElementById(
    "certifications-section"
  );
  const certifications = [
    "Certification A - Institution A",
    "Certification B - Institution B",
    "Certification C - Institution C",
  ];

  certificationsSection.innerHTML = `<ul>${certifications
    .map((cert) => `<li>${cert}</li>`)
    .join("")}</ul>`;
}

document.addEventListener("DOMContentLoaded", displayCertifications);

// skills.js
function displaySkills() {
  const skillsSection = document.getElementById("skills-section");
  const skills = ["JavaScript", "HTML", "CSS", "React", "Node.js"];

  skillsSection.innerHTML = `<ul>${skills
    .map((skill) => `<li>${skill}</li>`)
    .join("")}</ul>`;
}

document.addEventListener("DOMContentLoaded", displaySkills);

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

// find-me.js
function displayFindMe() {
  const findMeSection = document.getElementById("find-me-section");
  findMeSection.innerHTML = `
          <h2>Find Me On</h2>
          <ul>
              <li><a href="https://linkedin.com/in/yourprofile">LinkedIn</a></li>
              <li><a href="https://twitter.com/yourprofile">Twitter</a></li>
              <li><a href="https://github.com/yourprofile">GitHub</a></li>
          </ul>
      `;
}

document.addEventListener("DOMContentLoaded", displayFindMe);

// reset.js
function resetForm() {
  document.getElementById("contact-form").reset();
  alert("Form has been reset.");
}

document.addEventListener("DOMContentLoaded", () => {
  const resetButton = document.getElementById("reset-button");
  if (resetButton) resetButton.addEventListener("click", resetForm);
});
