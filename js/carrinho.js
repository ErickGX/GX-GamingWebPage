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
  function toggleCartVisibility() {
    // Seleciona o ícone do carrinho e a div do carrinho
    const iconCarrinho = document.querySelector("fa-cart-shopping");
    const carrinhoDiv = document.getElementById("carrinhoDireita");

    // Adiciona um evento de clique ao ícone do carrinho
    iconCarrinho.addEventListener("click", () => {
        carrinhoDiv.classList.toggle("visible");
    });
}

// Chama a função ao carregar o DOM
document.addEventListener("DOMContentLoaded", toggleCartVisibility);

// function clearCart() {
//     localStorage.removeItem("carrinho"); // Remove o item "carrinho" do localStorage
//     alert("Carrinho de compras limpo!"); // Exibe uma mensagem confirmando que o carrinho foi limpo
//   }


// Evento click e delegação de evento:

//     document.addEventListener("click", addProductToCart); adiciona um evento global de clique na página e, ao capturar o clique, chama a função addProductToCart. Esse uso da delegação de evento permite que elementos dinâmicos sejam capturados, como botões btnComprar adicionados posteriormente.

// Manipulação do localStorage:

//     localStorage é usado para armazenar e recuperar o carrinho de compras, mantendo os dados entre recarregamentos da página.
//     JSON.parse e JSON.stringify são usados para converter o carrinho entre uma string (no localStorage) e um objeto JavaScript.

// Manipulação de DOM e dataset:

//     A função usa event.target.dataset para obter o ID do produto associado ao botão que foi clicado.

// Métodos de Array (find, push):

//     find é usado para buscar o produto tanto na lista de jogos (jogos.find(...)) quanto no carrinho (carrinho.find(...)).
//     push adiciona o novo jogo ao array do carrinho.

// Mensagens de Alerta (alert):

//     alert é usado para dar feedback ao usuário sobre o status da operação: se o jogo já está no carrinho ou se foi adicionado com sucesso.