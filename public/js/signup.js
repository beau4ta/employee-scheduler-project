const signupForm = async (event) => {
    event.preventDefault();

    const first_name = $('.form-first').val().trim();
    const last_name = $('.form-last').val().trim();
    const email = $('.form-email').val().trim();
    const password = $('.form-password').val().trim();

    if (first_name && last_name && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ first_name, last_name, email, password }),

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

