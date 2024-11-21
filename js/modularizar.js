// Função para carregar conteúdo HTML em um elemento específico
function loadHTML(elementId, filePath) {
    // Faz uma solicitação HTTP para buscar o conteúdo do arquivo especificado
    fetch(filePath)
        .then(response => response.text()) // Converte a resposta para texto
        .then(data => {
            // Insere o conteúdo obtido no elemento HTML identificado pelo ID
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o arquivo:', error)); // Trata possíveis erros
}

// Adiciona um ouvinte de evento que dispara quando o DOM está completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    // Carrega o conteúdo do arquivo headernav.html no elemento com ID "header"
   // loadHTML('header', '/public/components/headernav.html');
    // Carrega o conteúdo do arquivo footer.html no elemento com ID "footer"
    loadHTML('footer', '/public/components/footer.html');
});


function hamburger() {
    // Verifica a largura da janela
    if (window.innerWidth <= 768) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.style.display = (navMenu.style.display === 'flex') ? 'none' : 'flex';
    } else {
        // Reseta o menu para o estado original quando a resolução for maior que 768px
        const navMenu = document.querySelector('.nav-menu');
        navMenu.style.display = 'flex'; // Exibe os itens normalmente
    }
}

// Garante que o menu seja restaurado ao redimensionar a janela
window.addEventListener('resize', () => {
    const navMenu = document.querySelector('.nav-menu');
    if (window.innerWidth > 768) {
        navMenu.style.display = 'flex'; // Exibe os itens normalmente
    } else {
        navMenu.style.display = 'none'; // Esconde os itens por padrão
    }
});