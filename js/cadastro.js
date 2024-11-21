// Obtendo os elementos do formulário e dos campos de entrada
const formulario = document.getElementById('registerForm');
const nomeUsuario = document.getElementById('username');
const emailUsuario = document.getElementById('email');
const senhaUsuario = document.getElementById('password');
const confirmarSenhaUsuario = document.getElementById('confirmPassword');

// Adiciona um ouvinte de evento para o envio do formulário e chama as funções
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault(); // Impede o comportamento padrão de envio do formulário
    if (validarEntradas()) { // Se as validações passarem
        registrarUsuario(); // Chama a função para registrar o usuário
    }
});

// Função de validação dos campos de entrada
function validarEntradas() {
    // Obtém os valores dos campos de entrada e remove espaços extras
    const valorNomeUsuario = nomeUsuario.value.trim();
    const valorEmail = emailUsuario.value.trim();
    const valorSenha = senhaUsuario.value.trim();
    const valorConfirmarSenha = confirmarSenhaUsuario.value.trim();

    let entradasValidas = true; // Variável para verificar se os campos são válidos

    // Validação para o campo de nome de usuário
    if (valorNomeUsuario === '') {
        definirErro(nomeUsuario, 'Nome de usuário é obrigatório');
        entradasValidas = false;
    } else {
        definirSucesso(nomeUsuario);
    }

    // Validação para o campo de email
    if (valorEmail === '') {
        definirErro(emailUsuario, 'E-mail é obrigatório');
        entradasValidas = false;
    } else if (!emailValido(valorEmail)) {
        definirErro(emailUsuario, 'Forneça um e-mail válido');
        entradasValidas = false;
    } else {
        definirSucesso(emailUsuario);
    }

    // Validação para o campo de senha
    if (valorSenha === '') {
        definirErro(senhaUsuario, 'Senha é obrigatória');
        entradasValidas = false;
    } else if (valorSenha.length < 8) {
        definirErro(senhaUsuario, 'A senha deve ter pelo menos 8 caracteres');
        entradasValidas = false;
    } else {
        definirSucesso(senhaUsuario);
    }

    // Validação para o campo de confirmação de senha
    if (valorConfirmarSenha === '') {
        definirErro(confirmarSenhaUsuario, 'Por favor, confirme sua senha');
        entradasValidas = false;
    } else if (valorConfirmarSenha !== valorSenha) {
        definirErro(confirmarSenhaUsuario, 'As senhas não coincidem');
        entradasValidas = false;
    } else {
        definirSucesso(confirmarSenhaUsuario);
    }

    return entradasValidas;
}

// Função para registrar o usuário
function registrarUsuario() {
    // Obtém os valores dos campos de entrada
    const nome = nomeUsuario.value;
    const email = emailUsuario.value;
    const senha = senhaUsuario.value;

    // Obtém os usuários cadastrados do LocalStorage ou cria um objeto vazio
    const contasUsuarios = JSON.parse(localStorage.getItem("Usuarios")) || { usuario: [] };

    let usuarioExiste = false; // Verifica se o usuário já existe

    // Verifica se o nome de usuário ou email já existe no LocalStorage
    for (let i = 0; i < contasUsuarios.usuario.length; i++) {
        if (contasUsuarios.usuario[i].nome === nome || contasUsuarios.usuario[i].email === email) {
            usuarioExiste = true; // Usuário encontrado
            alert('Usuário já existe!');
            break;
        }
    }

    // Se o usuário não existe, adiciona um novo usuário ao LocalStorage
    if (!usuarioExiste) {
        contasUsuarios.usuario.push({ nome: nome, senha: senha, email: email });
        localStorage.setItem("Usuarios", JSON.stringify(contasUsuarios)); // Salva no LocalStorage
        window.alert("Cadastro finalizado, vá para a tela de login!");
        console.log(`Usuário cadastrado com sucesso: Nome: ${nome}, Email: ${email}, Senha: ${senha}`);
    }
    formulario.reset(); // Reseta o formulário após o cadastro
}

// Função para exibir mensagens de erro nos campos
function definirErro(campo, mensagem) {
    const exibicaoErro = document.getElementById(campo.name + 'Error');
    exibicaoErro.textContent = mensagem;
    campo.classList.add('glitch'); // Adiciona o estilo de erro
    setTimeout(() => {
        campo.classList.remove('glitch');
    }, 500);
}

// Função para limpar mensagens de erro e indicar sucesso no campo
function definirSucesso(campo) {
    const exibicaoErro = document.getElementById(campo.name + 'Error');
    exibicaoErro.textContent = '';
}

// Função para validar o formato do e-mail
function emailValido(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}
