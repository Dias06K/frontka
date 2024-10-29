function validateForm() {
  let isValid = true;


  document.getElementById('nameError').innerText = '';
  document.getElementById('emailError').innerText = '';
  document.getElementById('questionError').innerText = '';


  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const question = document.getElementById('question').value.trim();

  // Validate Name
  if (name === '') {
    document.getElementById('nameError').innerText = 'Name is required.';
    isValid = false;
  }

  // Validate Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    document.getElementById('emailError').innerText = 'Email is required.';
    isValid = false;
  } else if (!emailRegex.test(email)) {
    document.getElementById('emailError').innerText = 'Invalid email format.';
    isValid = false;
  }

  // Validate Question
  if (question === '') {
    document.getElementById('questionError').innerText = 'Question is required.';
    isValid = false;
  }

  return isValid; // Prevent form submission if invalid
}

