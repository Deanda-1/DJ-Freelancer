// skills.js
function displaySkills() {
  const skillsSection = document.getElementById("skills-section");
  const skills = [
    "Script writing",
    "Video shooting",
    "Video editing",
    "Musical score writing",
    "Logo",
    "Brands",
    "Web development",
    "Web Designer",
  ];

  skillsSection.innerHTML = `<ul>${skills
    .map((skill) => `<li>${skill}</li>`)
    .join("")}</ul>`;
}

document.addEventListener("DOMContentLoaded", displaySkills);
