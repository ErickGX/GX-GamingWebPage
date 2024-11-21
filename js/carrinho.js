function addProductToCart(event) {
  // Verifica se o elemento que foi clicado (event.target) tem a classe "btnComprar"
  if (event.target.classList.contains("btnComprar")) {
    
      // Pega o ID do produto do dataset do elemento clicado (event.target)
      const { id } = event.target.dataset;
    
      // Busca o produto com o ID especificado na lista "jogos" usando o método find , Jogos existe no contexto do carrinho e jogos.js serem executados na mesma pagina
      const jogo = jogos.find((jogo) => jogo.id === parseInt(id));
    
      // Se o produto com o ID especificado for encontrado na lista "jogos"
      if (jogo) {
          // Recupera o carrinho atual do localStorage ou inicializa como um array vazio caso ainda não exista
          const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
        
          // Verifica se o produto já existe no carrinho usando o método find para procurar pelo ID
          if (carrinho.find((item) => item.id === jogo.id)) {
              alert("Jogo já adicionado ao carrinho!"); // Exibe um alerta informando que o produto já está no carrinho
              return; // Sai da função para evitar a adição de um produto duplicado
          }
        
          // Adiciona o produto ao array do carrinho
          carrinho.push(jogo);
        
          // Atualiza o carrinho no localStorage com o novo item adicionado
          localStorage.setItem("carrinho", JSON.stringify(carrinho));
        
          alert("Jogo adicionado ao carrinho!"); // Exibe um alerta informando que o produto foi adicionado com sucesso

          // Chama a função ListaCarrinho para atualizar a interface ou exibir os itens no carrinho
          ListaCarrinho();
          consoleArrayJogos(); //mensagem de debug para mostrar quando os items sao adicionados ao carrinho
      }
  }
}
  
document.addEventListener("click", addProductToCart);

function toggleCartVisibility() {
    // Seleciona a div do carrinho usando o ID "carrinhoDireita"
    const carrinhoDiv = document.getElementById("carrinhoDireita");

    // Verifica se a div foi encontrada antes de alternar a classe
    if (carrinhoDiv) {
        // Alterna a classe "visible" na div do carrinho para mostrar/ocultar
        carrinhoDiv.classList.toggle("visible");
    } else {
        console.warn("Elemento com ID 'carrinhoDireita' não foi encontrado.");
    }
}

//funcao para monstrar quantos itens tem no carrinho no localstorage
function consoleArrayJogos(){
    const carin =  localStorage.getItem('carrinho')

    if (carin) {
      const carinJson = JSON.parse(carin);
      const contador = carinJson.length;

      console.log(`O carrinho possui ${contador} itens`);
    }else{
      console.log('O carrinho possui não itens');
    }

}



document.addEventListener("DOMContentLoaded", () => {
  ListaCarrinho(); // Atualiza a lista no carregamento da página
});



function ListaCarrinho() {
  const ler = JSON.parse(localStorage.getItem('carrinho')) || []; // Recupera os itens do localStorage
  const containeritens = document.querySelector('.containeritens'); // Seleciona o contêiner

  if (containeritens) {
      containeritens.innerHTML = ''; // Limpa o contêiner para evitar duplicação

      ler.forEach((item, index) => {
          const itemLista = document.createElement("div"); // Cria um elemento para cada item
          itemLista.classList.add("listaitem"); // Adiciona uma classe ao item

          // Gera o conteúdo HTML do item, incluindo o botão de exclusão com `data-index`
          itemLista.innerHTML = `
              <div class="imagemJogoCart">
                  <img 
                      src="${item.imagem}" 
                      alt="Imagem de ${item.nome}" 
                  />
              </div>
              <div class="nomeJogoCart">
                  ${item.nome}
              </div>
              <div class="trashIcon">
                  <i 
                      class="fa-solid fa-trash" 
                      data-index="${index}"> <!-- A posição no array -->
                  </i>
              </div>
          `;

          containeritens.appendChild(itemLista); // Adiciona o item ao contêiner
      });
      atualizarContador(); //Atualiza o contador de itens
      atualizarTotal();

  }
}


document.querySelector('.containeritens').addEventListener('click', (event) => {
  if (event.target.classList.contains('fa-trash')) {
      const index = parseInt(event.target.getAttribute('data-index')); // Obtém o índice do item
      removeItemFromCart(index); // Chama a função de remoção
  }
});

function removeItemFromCart(index) {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || []; // Recupera o carrinho
  carrinho.splice(index, 1); // Remove o item pelo índice
  localStorage.setItem('carrinho', JSON.stringify(carrinho)); // Atualiza o localStorage
  ListaCarrinho(); // Re-renderiza a lista
  atualizarContador();
  atualizarTotal();
}


// Evento para limpar o carrinho
document.querySelector("#clearCart").addEventListener("click", () => {
    localStorage.removeItem("carrinho"); // Limpa o carrinho do localStorage
    ListaCarrinho(); // Atualiza a interface para refletir o carrinho vazio
    atualizarContador();
    atualizarTotal();
});



function atualizarContador() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho'));
  const contagem = carrinho ? carrinho.length : 0;
  document.getElementById('item-count').textContent = contagem;
}


// Função para calcular o total do carrinho
function calcularTotal() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  
  let total = 0;
  
  carrinho.forEach(item => {
      // Remove o prefixo "R$ " e substitui a vírgula por ponto para tratar o preço
      const precoAtual = item.precoAtual.replace('R$ ', '').replace(',', '.');
      
      // Verifica se o precoAtual é um número válido
      if (!isNaN(precoAtual)) {
          total += parseFloat(precoAtual); // Converte para número e soma
      } else {
          console.error('Preço inválido para o item:', item); // Log para itens com preço inválido
      }
  });

  // Verifica se total é um número válido antes de aplicar toFixed
  if (!isNaN(total)) {
      return total; // Retorna o total calculado
  } else {
      console.error('Total inválido:', total); // Log se total não for um número válido
      return 0; // Retorna 0 caso o total não seja válido
  }
}

// Função para atualizar o total do carrinho na interface
function atualizarTotal() {
  const total = calcularTotal(); // Chama a função calcularTotal para obter o valor total
  
  // Atualiza o elemento com o total
  document.getElementById('total-preco').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`; // Formata o total para duas casas decimais
}