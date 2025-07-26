// script.js

const typingElement = document.getElementById('typing-text');
const cursor = document.querySelector('.cursor');
const roles = [
  "Data Scientist",
  "Machine Learning Engineer",
  "AI Enthusiast",
  "Python Developer"
];

let currentText = '';
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const fullText = roles[roleIndex];

  if (isDeleting) {
    currentText = fullText.substring(0, charIndex--);
  } else {
    currentText = fullText.substring(0, charIndex++);
  }

  typingElement.textContent = currentText;

  if (!isDeleting && charIndex === fullText.length) {
    setTimeout(() => (isDeleting = true), 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  setTimeout(type, isDeleting ? 60 : 120);
}

document.addEventListener('DOMContentLoaded', () => {
  type();
});
