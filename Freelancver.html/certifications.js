// certifications.js
function displayCertifications() {
  const certificationsSection = document.getElementById(
    "certifications-section"
  );
  const certifications = [
    "Media communication Certificate - Full Sail University",
    "Media Communication Bachelor Degree - Full Sail University",
    "Master's of Fine Art Degree - Full Sail University",
    "OSU Full-Stack Flex Software Coding Boot Camp: Full-Time Program - The Ohio State University",
  ];

  certificationsSection.innerHTML = `<ul>${certifications
    .map((cert) => `<li>${cert}</li>`)
    .join("")}</ul>`;
}

document.addEventListener("DOMContentLoaded", displayCertifications);
