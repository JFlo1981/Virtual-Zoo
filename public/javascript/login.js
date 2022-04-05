console.log("JS Login");
async function loginFormHandler(event) {
    event.preventDefault();
    console.log("JS Login");
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    console.log(email,password);
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/homepage');
      } else {
        alert(response.statusText);
      }

    }
  }
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);


  

  
