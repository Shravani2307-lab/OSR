// Login/Signup Form
document.getElementById('signupBtn').addEventListener('click', function() {
    document.getElementById('signupForm').classList.add('active');
    document.getElementById('loginForm').classList.remove('active');
});

document.getElementById('loginBtn').addEventListener('click', function() {
    document.getElementById('loginForm').classList.add('active');
    document.getElementById('signupForm').classList.remove('active');
});

document.getElementById('toSignup').addEventListener('click', function() {
    document.getElementById('signupForm').classList.add('active');
    document.getElementById('loginForm').classList.remove('active');
});

document.getElementById('toLogin').addEventListener('click', function() {
    document.getElementById('loginForm').classList.add('active');
    document.getElementById('signupForm').classList.remove('active');
});

// Simulate form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Logged in!');
});

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Account created! Now you can log in.');
});
