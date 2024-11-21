// Obtendo os elementos do formulário e dos campos de entrada
const form = document.getElementById('loginForm');
const username = document.getElementById('username');
const password = document.getElementById('password');

// Adiciona um ouvinte de evento para o envio do formulário
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede o comportamento padrão de envio do formulário

    // Se as validações passarem, chama a função LoginUser
    if (validateInputs()) {
        LoginUser();
    }
});

// Função para validar os campos de entrada
function validateInputs() {
    // Obtém os valores dos campos de entrada e remove espaços extras
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    let isValid = true; // Variável que controla se as entradas são válidas

    // Validação para o campo de nome de usuário
    if (usernameValue === '') {
        setError(username, 'Nome de usuário é obrigatório'); // Mostra erro se o campo estiver vazio
        isValid = false;
    } else {
        setSuccess(username); // Marca o campo como válido se tiver algum valor
    }

    // Validação para o campo de senha
    if (passwordValue === '') {
        setError(password, 'Senha é obrigatória'); // Mostra erro se o campo estiver vazio
        isValid = false;
    } else if (passwordValue.length < 8) {
        setError(password, 'A senha deve ter pelo menos 8 caracteres'); // Mostra erro se a senha for muito curta
        isValid = false;
        form.reset(); // Reseta o formulário após o cadastro
    } else {
        setSuccess(password); // Marca o campo como válido
    }

    return isValid; // Retorna se todas as validações passaram
}

// Função para exibir mensagens de erro nos campos
function setError(input, message) {
    const errorDisplay = document.getElementById(input.name + 'Error'); // Seleciona o elemento de erro correspondente
    errorDisplay.textContent = message; // Define a mensagem de erro
    input.classList.add('glitch'); // Adiciona a classe de estilo para erro (animação de glitch)
    setTimeout(() => {
        input.classList.remove('glitch'); // Remove a animação de glitch após 500ms
    }, 500);
}

// Função para limpar mensagens de erro e indicar sucesso no campo
function setSuccess(input) {
    const errorDisplay = document.getElementById(input.name + 'Error'); // Seleciona o elemento de erro correspondente
    errorDisplay.textContent = ''; // Limpa a mensagem de erro
}

// Função para realizar o login do usuário
function LoginUser() {
    // Obtém os valores dos campos de entrada
    const nome = username.value;
    const senha = password.value;

    // Obtém as contas de usuários armazenadas no LocalStorage
    const UsuariosContas = JSON.parse(localStorage.getItem('Usuarios')) || { usuario: [] };

    let ExisteUsuario = false; // Variável que verifica se o usuário existe

    // Verifica se o nome de usuário e a senha coincidem com algum usuário no LocalStorage
    for (let i = 0; i < UsuariosContas.usuario.length; i++) {
        if (UsuariosContas.usuario[i].nome === nome && UsuariosContas.usuario[i].senha === senha) {
            console.log("Nome: " + UsuariosContas.usuario[i].nome); // Exibe o nome do usuário no console
            console.log("Senha: " + UsuariosContas.usuario[i].senha); // Exibe a senha do usuário no console
            ExisteUsuario = true; // Marca como verdadeiro se o usuário for encontrado
            break;
        }
    }

    // Se o usuário for encontrado, exibe uma mensagem de sucesso e redireciona para a página da loja
    if (ExisteUsuario) {
        alert("Login com sucesso, você será redirecionado para a loja.");
        window.location.href = 'allgames.html'; // Redireciona para a página de jogos
    } else {
        alert("Usuário inexistente!"); // Exibe alerta de erro caso o usuário não seja encontrado
        form.reset(); // Reseta o formulário
    }
}
