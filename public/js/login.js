
const signupHandler = async (event) => {
    event.preventDefault();
  
    const first_name = document.querySelector('#signup-first-name').value.trim();
    const last_name = document.querySelector('#signup-last-name').value.trim();
    const username = document.querySelector('#signup-username').value.trim();
    const email = document.querySelector('#signup-email').value.trim();
    const password = document.querySelector('#signup-password').value.trim();
  
    if (first_name && last_name && username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ first_name, last_name, username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };

  const loginHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const email = document.querySelector('#login-email').value.trim();
    const password = document.querySelector('#login-password').value.trim();
    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      await response.json();
      if (response.ok) {
        // If successful, redirect the browser to the dashboard page
        document.location.replace('/dashboard');
      } else {
        
        console.log(response)
        alert(response.statusText);
      }
    }
  };

  document.querySelector('.login-form').addEventListener('submit', loginHandler);

  document.querySelector('.signup-form').addEventListener('submit', signupHandler);