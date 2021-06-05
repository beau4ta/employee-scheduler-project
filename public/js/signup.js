const signupForm = async (event) => {
    event.preventDefault();

    const first = $('#first-name').val().trim();
    const last = $('#last-name').val().trim();
    const email = $('#email').val().trim();
    const password = $('#password').val().trim();
  

    if (first && last && email && password) {
        const response = await fetch('/api/users/', {
          method: 'POST',
          body: JSON.stringify({ first_name: first, last_name: last, email: email, password: password }),
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

$('.signup-btn').on('click', signupForm);

