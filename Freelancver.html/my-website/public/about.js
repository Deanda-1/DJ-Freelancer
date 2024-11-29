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
