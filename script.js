

// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
});
});

// Toggle navigation menu on mobile devices
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
link.addEventListener('click', () => {
document.body.classList.remove('nav-open');
});
});

// Set current year in footer
const currentYear = new Date().getFullYear();
const footer = document.querySelector('footer p');
footer.textContent += ' ' + currentYear;
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
e.preventDefault();
// Get form values
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const message = document.getElementById('message').value;
// Send form data to server
const data = {
name: name,
email: email,
message: message
};
fetch('/submit-form', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => {
console.log('Form submission successful:', data);
// Show success message to user
const successMessage = document.createElement('p');
successMessage.textContent = 'Thank you for contacting me. I will get back to you soon.';
successMessage.style.color = 'green';
form.appendChild(successMessage);
form.reset();
})
.catch((error) => {
console.error('Error submitting form:', error);
// Show error message to user
const errorMessage = document.createElement('p');
errorMessage.textContent = 'Sorry, there was an error submitting the form. Please try again later.';
errorMessage.style.color = 'red';
form.appendChild(errorMessage);
});
});





