const form = document.getElementById('registerForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateInputs()) {
        RegisterUser();
    }
});

function validateInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    let isValid = true;

    if (usernameValue === '') {
        setError(username, 'Nome de usuário é obrigatório');
        isValid = false;
    } else {
        setSuccess(username);
    }

    if (emailValue === '') {
        setError(email, 'E-mail é obrigatório');
        isValid = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Forneça um e-mail válido');
        isValid = false;
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, 'Senha é obrigatória');
        isValid = false;
    } else if (passwordValue.length < 8) {
        setError(password, 'A senha deve ter pelo menos 8 caracteres');
        isValid = false;
    } else {
        setSuccess(password);
    }

    if (confirmPasswordValue === '') {
        setError(confirmPassword, 'Por favor, confirme sua senha');
        isValid = false;
    } else if (confirmPasswordValue !== passwordValue) {
        setError(confirmPassword, 'As senhas não coincidem');
        isValid = false;
    } else {
        setSuccess(confirmPassword);
    }

    return isValid;
}

function RegisterUser() {
    const nome = username.value;
    const emailuser = email.value;
    const senha = password.value;

    const UsuariosContas = JSON.parse(localStorage.getItem("Usuarios")) || { usuario: [] };

    let ExisteUsuario = false;

    for (let i = 0; i < UsuariosContas.usuario.length; i++) {
        if (UsuariosContas.usuario[i].nome === nome || UsuariosContas.usuario[i].email === emailuser) {
            ExisteUsuario = true;
            alert('Usuário já existe!');
            break;
        }
    }

    if (!ExisteUsuario) {
        UsuariosContas.usuario.push({ nome: nome, senha: senha, email: emailuser });
        localStorage.setItem("Usuarios", JSON.stringify(UsuariosContas));
        window.alert("Cadastro finalizado, vá para a tela de login!");
        console.log("Usuário cadastrado com sucesso com as seguintes credenciais: Nome: " + nome + ", Email: " + emailuser + ", Senha: " + senha);
    }

    form.reset();
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
