document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "farmer@gmail.com" && password === "12345") {
    alert("Login successful!");
    window.location.href = "farm-home.html";  // go to your main Farm Mate page
  } else {
    alert("Invalid email or password!");
  }
});
