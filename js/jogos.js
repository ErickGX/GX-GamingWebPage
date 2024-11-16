const jogos = [
    {
      id: 1,
      nome: "Diablo® IV: Vessel of Hatred™",
      plataforma: "steam",
      precoAntigo: "R$ 300,00",
      precoAtual: "R$ 234,99",
      imagem: "/images/diablo-4-1024x1024.jpg",
    },
    {
      id: 2,
      nome: "Undertale Xbox",
      plataforma: "playstation",
      precoAntigo: "R$ 300,00",
      precoAtual: "R$ 234,99",
      imagem: "/images/undertale-1024x1024.jpg",
    },
    {
      id: 3,
      nome: "Watch Dogs 2",
      plataforma: "xbox",
      precoAntigo: "R$ 300,00",
      precoAtual: "R$ 234,99",
      imagem: "/images/watchdogs2.jpg",
    },
    {
      id: 4,
      nome: "FarCry 6 Gold Edition",
      plataforma: "steam",
      precoAntigo: "R$ 300,00",
      precoAtual: "R$ 234,99",
      imagem: "/images/farcry6.jpg",
    },
    {
        id: 5,
        nome: "GTA IV",
        plataforma: "playstation",
        precoAntigo: "R$ 125,00",
        precoAtual: "R$ 100,99",
        imagem: "/images/gta5-1024x1024.avif",
    },
    {
        id: 6,
        nome: "Diablo® IV: Vessel of Hatred™",
        plataforma: "steam",
        precoAntigo: "R$ 300,00",
        precoAtual: "R$ 234,99",
        imagem: "/images/diablo-4-1024x1024.jpg",
      },
      {
        id: 7,
        nome: "Undertale Xbox",
        plataforma: "playstation",
        precoAntigo: "R$ 300,00",
        precoAtual: "R$ 234,99",
        imagem: "/images/undertale-1024x1024.jpg",
      },
      {
        id: 8,
        nome: "Watch Dogs 2",
        plataforma: "xbox",
        precoAntigo: "R$ 300,00",
        precoAtual: "R$ 234,99",
        imagem: "/images/watchdogs2.jpg",
      },
      {
        id: 9,
        nome: "FarCry 6 Gold Edition",
        plataforma: "steam",
        precoAntigo: "R$ 300,00",
        precoAtual: "R$ 234,99",
        imagem: "/images/farcry6.jpg",
      },
      {
          id: 10,
          nome: "GTA IV",
          plataforma: "playstation",
          precoAntigo: "R$ 125,00",
          precoAtual: "R$ 100,99",
          imagem: "/images/gta5-1024x1024.avif",
      },   
  ];

  

  document.addEventListener("DOMContentLoaded", () => {
    const bodyId = document.body.id; // Obtém o ID do body para identificar a página
    let jogosFiltrados = [];

    // Filtra os jogos com base no ID do body
    if (bodyId === "inicio") {
        jogosFiltrados = jogos; // Exibe todos os jogos na página inicial
    } else if (bodyId === "ofertas") {
        jogosFiltrados = jogos.filter(jogo => {
            const precoAtual = parseFloat(jogo.precoAtual.replace("R$", "").replace(",", "."));
            return precoAtual < 150; // Filtra jogos com preço abaixo de R$ 150
        });
    } else {
        jogosFiltrados = jogos.filter(jogo => jogo.plataforma === bodyId); // Filtra os jogos pela plataforma
    }

    // Agrupa os jogos filtrados em lotes de 5
    const jogosAgrupados = jogosFiltrados.reduce((acumulador, jogo, index) => {
        if (index % 5 === 0) acumulador.push([]);
        acumulador[acumulador.length - 1].push(jogo);
        return acumulador;
    }, []);

    // Renderiza os jogos agrupados
    jogosAgrupados.forEach(grupo => criarCards(grupo));
});





// const agruparPorPlataforma = jogos.reduce((acumulador, jogo) =>{
// //funcao para agrupar todos os jogos por plataforma (teste)
//     const plat = jogo.plataforma;
//     if (!acumulador[plat]) acumulador[plat] = [];
//      {
//         acumulador[plat].push(jogo);
//         return acumulador;    
//     }

// }, {});

//console.log(agruparPorPlataforma);

//console.log(jogosAgrupados);

  
  function criarCards(grupo) {
    const container = document.createElement("div");
    container.classList.add("container");
    grupo.forEach((jogo) => {
        const card = document.createElement("div");
        card.classList.add("card");

        // Verifica a plataforma e define a classe do ícone correspondente
        let iconePlataforma;
        switch (jogo.plataforma) {
            case "steam":
                iconePlataforma = "fa-brands fa-steam";
                break;
            case "xbox":
                iconePlataforma = "fa-brands fa-xbox";
                break;
            case "playstation":
                iconePlataforma = "fa-brands fa-playstation";
                break;
            default:
                iconePlataforma = "fa-solid fa-gamepad"; // Ícone genérico se a plataforma não for reconhecida
                break;
        }

        card.innerHTML = `
            <div class="imgJogo">
                <img
                    class="img"
                    src="${jogo.imagem}"
                    alt="Imagem de ${jogo.nome}"
                />
            </div>
            <div class="infoJogo">
                <i class="${iconePlataforma}"></i>
                <div class="nomeJogo">
                    <p>${jogo.nome}</p>
                </div>
            </div>
            <div class="precoJogo">
                <p>de <span class="precoAntigo">${jogo.precoAntigo}</span> por ${jogo.precoAtual}</p>
            </div>
            <button class="btnComprar" data-id="${jogo.id}">
                <i class="fas fa-shopping-cart"></i> Comprar
            </button>
        `;
        container.appendChild(card);
    });
    document.querySelector("main").appendChild(container);
}



  
  //jogosAgrupados.forEach(criarCards);
  
