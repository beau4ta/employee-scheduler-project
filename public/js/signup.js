const signupForm = async(event) => {
    event.preventDefault();

    const username = $('.form-user').val().trim();
    const email = $('.form-email').val().trim();
    const password = $('.form-password').val().trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
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