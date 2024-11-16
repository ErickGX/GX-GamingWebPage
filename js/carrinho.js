function addProductToCart(event) {
    // Verifica se o elemento que foi clicado (event.target) tem a classe "btnComprar"
    if (event.target.classList.contains("btnComprar")) {
      
      // Pega o ID do produto do dataset do elemento clicado (event.target)
      const { id } = event.target.dataset;
      
      // Busca o produto com o ID especificado na lista "jogos", usando o método find
      const jogo = jogos.find((jogo) => jogo.id === parseInt(id));
      
      // Se o produto com o ID especificado for encontrado na lista "jogos"
      if (jogo) {
        // Recupera o carrinho atual do localStorage, ou inicializa como um array vazio caso ainda não exista
        const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
        
        // Verifica se o produto já existe no carrinho, usando o método find para procurar pelo ID
        if (carrinho.find((item) => item.id === jogo.id)) {
          alert("Jogo já adicionado ao carrinho!"); // Exibe um alerta informando que o produto já está no carrinho
          return; // Sai da função para não adicionar o produto duplicado
        }
        
        // Adiciona o produto ao array do carrinho
        carrinho.push(jogo);
        
        // Atualiza o carrinho no localStorage com o novo item adicionado
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        
        alert("Jogo adicionado ao carrinho!"); // Exibe um alerta informando que o produto foi adicionado

        ListaCarrinho();
 
      }
    }
  }
  
  // Adiciona um ouvinte de eventos que chama a função addProductToCart para qualquer clique na página
  document.addEventListener("click", addProductToCart);
  

  function toggleCartVisibility() {
    // Seleciona a div do carrinho usando o ID "carrinhoDireita"
    const carrinhoDiv = document.getElementById("carrinhoDireita");

    // Alterna a classe "visible" na div do carrinho para mostrar/ocultar
    carrinhoDiv.classList.toggle("visible");
}

//funcao para monstrar quantos itens tem no carrinho no localstorage
const carin =  localStorage.getItem('carrinho')

if (carin) {
  const carinJson = JSON.parse(carin);
  const contador = carinJson.length;

  console.log(`O carrinho possui ${contador} itens`);
}else{
  console.log('O carrinho possui não itens');
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
  }
}


document.querySelector('.containeritens').addEventListener('click', (event) => {
  if (event.target.classList.contains('fa-trash')) {
      const index = parseInt(event.target.getAttribute('data-index'), 10); // Obtém o índice do item
      removeItemFromCart(index); // Chama a função de remoção
  }
});

function removeItemFromCart(index) {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || []; // Recupera o carrinho
  carrinho.splice(index, 1); // Remove o item pelo índice
  localStorage.setItem('carrinho', JSON.stringify(carrinho)); // Atualiza o localStorage
  ListaCarrinho(); // Re-renderiza a lista
}


// Evento para limpar o carrinho
document.querySelector("#clearCart").addEventListener("click", () => {
    localStorage.removeItem("carrinho"); // Limpa o carrinho do localStorage
    ListaCarrinho(); // Atualiza a interface para refletir o carrinho vazio
});