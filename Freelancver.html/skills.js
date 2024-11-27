// skills.js
function displaySkills() {
  const skillsSection = document.getElementById("skills-section");
  const skills = ["JavaScript", "HTML", "CSS", "React", "Node.js"];

  skillsSection.innerHTML = `<ul>${skills
    .map((skill) => `<li>${skill}</li>`)
    .join("")}</ul>`;
}

document.addEventListener("DOMContentLoaded", displaySkills);
