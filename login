<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login - Car Rent</title>
  <!-- Bootstrap CSS -->
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
  <!-- Link to external CSS file -->
  <link rel="stylesheet" href="css/styleindex.css">
</head>
<body>

<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <div class="container">
    <a class="navbar-brand" href="index.html">Car Rent</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="types-of-cars.html">Types of Cars</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="about-us.html">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="others.html">Others</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="FAQ.html">FAQ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="loginNavLink" href="login.html">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<!-- Login Form -->
<div class="container mt-5">
  <h2>Login</h2>
  <form id="loginForm">
    <div class="form-group">
      <label for="username">Username</label>
      <input type="text" id="username" class="form-control" required>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" id="password" class="form-control" required>
    </div>
    <button type="submit" class="btn btn-primary">Login</button>
  </form>
  <p id="welcomeMessage" class="mt-3"></p>
  <button id="logoutButton" class="btn btn-secondary" style="display: none;">Logout</button>
</div>

<!-- Light/Dark Mode Toggle -->
<div class="container mt-3">
  <button id="toggleModeBtn" class="btn btn-info">Toggle Light/Dark Mode</button>
</div>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const logoutButton = document.getElementById('logoutButton');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const loginNavLink = document.getElementById('loginNavLink');

    function updateNavbarUsername() {
      const username = localStorage.getItem('username');
      if (username) {
        loginNavLink.textContent = username;
        loginNavLink.classList.add('mt-3');
      } else {
        loginNavLink.textContent = 'Login';
        loginNavLink.classList.remove('mt-3');
      }
    }

    function checkAuthentication() {
      const username = localStorage.getItem('username');
      if (username) {
        welcomeMessage.textContent = `Welcome, ${username}!`;
        logoutButton.style.display = 'block';
        loginForm.style.display = 'none';
      }
    }

    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      if (username && password) {
        localStorage.setItem('username', username);
        welcomeMessage.textContent = `Welcome, ${username}!`;
        logoutButton.style.display = 'block';
        loginForm.style.display = 'none';
        updateNavbarUsername();
      } else {
        alert('Please enter a valid username and password');
      }
    });

    logoutButton.addEventListener('click', () => {
      localStorage.removeItem('username');
      welcomeMessage.textContent = '';
      loginForm.style.display = 'block';
      logoutButton.style.display = 'none';
      updateNavbarUsername();
    });

    checkAuthentication();
    updateNavbarUsername();

    // Light/Dark Mode Toggle
    const toggleModeBtn = document.getElementById('toggleModeBtn');

    function setTheme(theme) {
      document.body.classList.remove('light', 'dark');
      document.body.classList.add(theme);
      localStorage.setItem('theme', theme);
    }

    toggleModeBtn.addEventListener('click', () => {
      const currentTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
      setTheme(currentTheme);
    });

    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  });
</script>

</body>
</html>
