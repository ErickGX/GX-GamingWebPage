// Obtendo os elementos do formulário e dos campos de entrada do usuario mlk
const form = document.getElementById('registerForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

// Adiciona um ouvinte de evento para o envio do formulário e chama minhas funcoes
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede o comportamento padrão de envio do formulário
    if (validateInputs()) { // Se as validações passarem
        RegisterUser(); // Chama a função para registrar o usuário
    }
});

// Função de validação dos campos de entrada
function validateInputs() {
    // Obtém os valores dos campos de entrada e remove espaços extras do começo e fim
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    let isValid = true; // Variável para verificar se os campos são válidos para eu ter certeza que passou em todos testes

    // Validação para o campo de nome de usuário
    if (usernameValue === '') {
        setError(username, 'Nome de usuário é obrigatório'); // Mostra erro
        isValid = false;
    } else {
        setSuccess(username); // Marca o campo como válido
    }

    // Validação para o campo de email
    if (emailValue === '') {
        setError(email, 'E-mail é obrigatório'); // Mostra erro
        isValid = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Forneça um e-mail válido'); // Mostra erro de e-mail inválido
        isValid = false;
    } else {
        setSuccess(email); // Marca o campo como válido
    }

    // Validação para o campo de senha
    if (passwordValue === '') {
        setError(password, 'Senha é obrigatória'); // Mostra erro
        isValid = false;
    } else if (passwordValue.length < 8) {
        setError(password, 'A senha deve ter pelo menos 8 caracteres'); // Mostra erro se a senha for curta
        isValid = false;
    } else {
        setSuccess(password); // Marca o campo como válido
    }

    // Validação para o campo de confirmação de senha
    if (confirmPasswordValue === '') {
        setError(confirmPassword, 'Por favor, confirme sua senha'); // Mostra erro caso o campo vazio 
        isValid = false;
    } else if (confirmPasswordValue !== passwordValue) {
        setError(confirmPassword, 'As senhas não coincidem'); // Mostra erro se as senhas não coincidirem nos campos
        isValid = false;
    } else {
        setSuccess(confirmPassword); // Marca o campo como válido
    }

    return isValid; // Retorna se todas as validações passaram pelos testes para ai eu chamar o registro do usuario
}

// Função para registrar o usuário
function RegisterUser() {
    // Obtém os valores dos campos de entrada
    const nome = username.value;
    const emailuser = email.value;
    const senha = password.value;

    // Obtém os usuários cadastrados do LocalStorage ou cria um objeto vazio
    const UsuariosContas = JSON.parse(localStorage.getItem("Usuarios")) || { usuario: [] };

    let ExisteUsuario = false; // Variável para verificar se o usuário já existe

    // Verifica se o nome de usuário ou email já existe no LocalStorage
    for (let i = 0; i < UsuariosContas.usuario.length; i++) {
        if (UsuariosContas.usuario[i].nome === nome || UsuariosContas.usuario[i].email === emailuser) {
            ExisteUsuario = true; // Usuário encontrado
            alert('Usuário já existe!'); // Exibe alerta de usuário existente
            break;
        }
    }

    // Se o usuário não existe, adiciona um novo usuário ao LocalStorage
    if (!ExisteUsuario) {
        UsuariosContas.usuario.push({ nome: nome, senha: senha, email: emailuser });
        localStorage.setItem("Usuarios", JSON.stringify(UsuariosContas)); // Salva no LocalStorage
        window.alert("Cadastro finalizado, vá para a tela de login!"); // Exibe alerta de sucesso
        console.log("Usuário cadastrado com sucesso com as seguintes credenciais: Nome: " + nome + ", Email: " + emailuser + ", Senha: " + senha);
    }
    form.reset(); // Reseta o formulário após o cadastro
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

// Função para validar o formato do e-mail usando expressão regular retirada de um projeto antigo meu da etec
function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase()); // Testa se o e-mail corresponde ao padrão
}
