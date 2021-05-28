const loginForm = async (event) => {
    event.preventDefault();

    const email = $('.form-email').val().trim();
    const password = $('.form-password').val().trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

$('.login-btn').on('click', loginForm);