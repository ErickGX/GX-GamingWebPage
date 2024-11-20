const form = document.getElementById('loginForm');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateInputs()) {
        LoginUser();
    }
});

function validateInputs() {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    let isValid = true;

    if (usernameValue === '') {
        setError(username, 'Nome de usuário é obrigatório');
        isValid = false;
    } else {
        setSuccess(username);
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

    return isValid;
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

function LoginUser() {
    const nome = username.value;
    const senha = password.value;

    const UsuariosContas = JSON.parse(localStorage.getItem('Usuarios')) || { usuario: [] };

    let ExisteUsuario = false;
    for (let i = 0; i < UsuariosContas.usuario.length; i++) {
        if (UsuariosContas.usuario[i].nome === nome && UsuariosContas.usuario[i].senha === senha) {
            console.log("Nome: " + UsuariosContas.usuario[i].nome);
            console.log("Senha: " + UsuariosContas.usuario[i].senha);
            ExisteUsuario = true;
            break;
        }
    }

    if (ExisteUsuario) {
        alert("Login com sucesso, você será redirecionado para a loja.");
        window.location.href = 'allgames.html';
    } else {
        alert("Usuário inexistente!");

    }
}
