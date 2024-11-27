// find-me.js
function displayFindMe() {
    const findMeSection = document.getElementById('find-me-section');
    findMeSection.innerHTML = `
        <h2>Find Me On</h2>
        <ul>
            <li><a href="https://linkedin.com/in/yourprofile">LinkedIn</a></li>
            <li><a href="https://twitter.com/yourprofile">Twitter</a></li>
            <li><a href="https://github.com/yourprofile">GitHub</a></li>
        </ul>
    `;
}

document.addEventListener('DOMContentLoaded', displayFindMe);
