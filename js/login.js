// Obtendo os elementos do formulário e dos campos de entrada
const formulario = document.getElementById('formularioLogin');
const nomeUsuario = document.getElementById('nomeUsuario');
const senha = document.getElementById('senha');

// Adiciona um ouvinte de evento para o envio do formulário
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault(); // Impede o comportamento padrão de envio do formulário

    // Se as validações passarem, chama a função fazerLogin
    if (validarEntradas()) {
        fazerLogin();
    }
});

// Função para validar os campos de entrada
function validarEntradas() {
    // Obtém os valores dos campos de entrada e remove espaços extras
    const valorNomeUsuario = nomeUsuario.value.trim();
    const valorSenha = senha.value.trim();

    let valido = true; // Variável que controla se as entradas são válidas

    // Validação para o campo de nome de usuário
    if (valorNomeUsuario === '') {
        definirErro(nomeUsuario, 'Nome de usuário é obrigatório'); // Mostra erro se o campo estiver vazio
        valido = false;
    } else {
        definirSucesso(nomeUsuario); // Marca o campo como válido se tiver algum valor
    }

    // Validação para o campo de senha
    if (valorSenha === '') {
        definirErro(senha, 'Senha é obrigatória'); // Mostra erro se o campo estiver vazio
        valido = false;
    } else if (valorSenha.length < 8) {
        definirErro(senha, 'A senha deve ter pelo menos 8 caracteres'); // Mostra erro se a senha for muito curta
        valido = false;
        formulario.reset(); // Reseta o formulário
    } else {
        definirSucesso(senha); // Marca o campo como válido
    }

    return valido; // Retorna se todas as validações passaram
}

// Função para exibir mensagens de erro nos campos
function definirErro(entrada, mensagem) {
    const exibirErro = document.getElementById(entrada.name + 'Erro'); // Seleciona o elemento de erro correspondente
    exibirErro.textContent = mensagem; // Define a mensagem de erro
    entrada.classList.add('glitch'); // Adiciona a classe de estilo para erro (animação de glitch)
    setTimeout(() => {
        entrada.classList.remove('glitch'); // Remove a animação de glitch após 500ms
    }, 500);
}

// Função para limpar mensagens de erro e indicar sucesso no campo
function definirSucesso(entrada) {
    const exibirErro = document.getElementById(entrada.name + 'Erro'); // Seleciona o elemento de erro correspondente
    exibirErro.textContent = ''; // Limpa a mensagem de erro
}

// Função para realizar o login do usuário
function fazerLogin() {
    // Obtém os valores dos campos de entrada
    const nome = nomeUsuario.value;
    const senhaUsuario = senha.value;

    // Obtém as contas de usuários armazenadas no LocalStorage
    const contasUsuarios = JSON.parse(localStorage.getItem('Usuarios')) || { usuario: [] };

    let usuarioEncontrado = false; // Variável que verifica se o usuário existe

    // Verifica se o nome de usuário e a senha coincidem com algum usuário no LocalStorage
    for (let i = 0; i < contasUsuarios.usuario.length; i++) {
        if (contasUsuarios.usuario[i].nome === nome && contasUsuarios.usuario[i].senha === senhaUsuario) {
            console.log("Nome: " + contasUsuarios.usuario[i].nome); // Exibe o nome do usuário no console
            console.log("Senha: " + contasUsuarios.usuario[i].senha); // Exibe a senha do usuário no console
            usuarioEncontrado = true; // Marca como verdadeiro se o usuário for encontrado
            break;
        }
    }

    // Se o usuário for encontrado, exibe uma mensagem de sucesso e redireciona para a página da loja
    if (usuarioEncontrado) {
        alert("Login com sucesso, você será redirecionado para a loja.");
        window.location.href = 'allgames.html'; // Redireciona para a página de jogos
    } else {
        alert("Usuário inexistente!"); // Exibe alerta de erro caso o usuário não seja encontrado
        formulario.reset(); // Reseta o formulário
    }
}

