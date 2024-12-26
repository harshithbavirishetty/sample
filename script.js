// Get form and output elements
const form = document.getElementById('registrationForm');
const message = document.getElementById('message');
const outputContainer = document.getElementById('output');
const displayUsername = document.getElementById('displayUsername');
const displayEmail = document.getElementById('displayEmail');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        message.style.display = 'block';
        message.innerHTML = '<h3>Passwords do not match!</h3>';
    } else {
        message.style.display = 'none';

        // Display submitted details
        displayUsername.textContent = username;
        displayEmail.textContent = email;
        outputContainer.style.display = 'block';

        // Reset form
        form.reset();
    }
});
