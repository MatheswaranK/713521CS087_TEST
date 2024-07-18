// scripts.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill the all fields.');
        return;
    }

    // Simulate form submission
    alert('Thank you for contacting us, ' + name + '! We will get back to you soon.');
    document.getElementById('contactForm').reset();
});
