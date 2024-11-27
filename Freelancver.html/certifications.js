// certifications.js
function displayCertifications() {
  const certificationsSection = document.getElementById(
    "certifications-section"
  );
  const certifications = [
    "Certification A - Institution A",
    "Certification B - Institution B",
    "Certification C - Institution C",
    "Certification D - Institution D",
  ];

  certificationsSection.innerHTML = `<ul>${certifications
    .map((cert) => `<li>${cert}</li>`)
    .join("")}</ul>`;
}

document.addEventListener("DOMContentLoaded", displayCertifications);
