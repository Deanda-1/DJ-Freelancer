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
    "Media communication certificate - Full Sail University",
    "Media communication bachelor's degree - Full Sail University",
    "Media design of Fine Art Master's degree - Full Sail University",
    "Full stack flex software engineering Javascript Bootcamp certificate - The Ohio State University",
  ];

  certificationsSection.innerHTML = `<ul>${certifications
    .map((cert) => `<li>${cert}</li>`)
    .join("")}</ul>`;
}

document.addEventListener("DOMContentLoaded", displayCertifications);

// skills.js
function displaySkills() {
  const skillsSection = document.getElementById("skills-section");
  const skills = [
    "Script writing",
    "Video shooting",
    "Video shooting",
    "Photo editing",
    "Musical score writing",
    "Logo",
    "Brands",
    "Web development",
    "Web designer",
  ];

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
              <li><a href="https://www.linkedin.com/in/deanda-noble-7a242592/">LinkedIn</a></li>
              <li><a href="https://www.youtube.com/@deandanoble468">YouTube</a></li>
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
