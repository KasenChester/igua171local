document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting normally
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Dummy login check (replace with real logic if needed)
    if (username === "admin" && password === "1234") {
    window.location.href = "website_home.html"; // Redirect to home page
    } else {
    alert("Invalid login. Try again.");
    }
    });