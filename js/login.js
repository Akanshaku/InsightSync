document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', handleLoginSubmit);
    }
  });
  
  function handleLoginSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
  
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
  
    const formData = { email, password };
  
    fetch('https://insight-sync-u1bq.vercel.app/api/v1/auth/login', {
    // fetch('http://localhost:3000/api/v1/auth/login', {

      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        if (data.token) {
          alert('Login successful!');
          localStorage.setItem('authToken', data.token);
          window.location.href = '/';
        } else {
          alert('Login failed: ' + data.message);
        }
      })
      .catch(error => console.error('Error:', error));
  }
  