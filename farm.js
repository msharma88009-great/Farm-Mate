// Login Form
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Login Successful! 🌾");
    window.location.href = "dashboard.html"; // (Optional next page)
  });
}

// Signup Form
const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Signup Successful! Welcome to Farm Mate 🌿");
    window.location.href = "index.html";
  });
}
