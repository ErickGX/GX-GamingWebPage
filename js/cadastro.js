const form = document.getElementById('registerForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
});

function validateInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if(usernameValue === '') {
        setError(username, 'Nome de usuário é obrigatório');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'E-mail é obrigatório');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Forneça um e-mail válido');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Senha é obrigatória');
    } else if (passwordValue.length < 8) {
        setError(password, 'A senha deve ter pelo menos 8 caracteres');
    } else {
        setSuccess(password);
    }

    if(confirmPasswordValue === '') {
        setError(confirmPassword, 'Por favor, confirme sua senha');
    } else if (confirmPasswordValue !== passwordValue) {
        setError(confirmPassword, 'As senhas não coincidem');
    } else {
        setSuccess(confirmPassword);
    }

    if(!document.querySelectorAll('.error:not(:empty)').length) {
        alert('Registro bem-sucedido!');
        form.reset();
    }
}

function setError(input, message) {
    const errorDisplay = document.getElementById(input.name + 'Error');
    errorDisplay.textContent = message;
    input.classList.add('glitch');
    setTimeout(() => {
        input.classList.remove('glitch');
    }, 500);
}

function setSuccess(input) {
    const errorDisplay = document.getElementById(input.name + 'Error');
    errorDisplay.textContent = '';
}

function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}