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
      nome: "Dino T-Rex 3",
      plataforma: "xbox",
      precoAntigo: "R$ 300,00",
      precoAtual: "R$ 234,99",
      imagem: "/images/watchdogs2.jpg",
    },
    {
      id: 4,
      nome: "Dino T-Rex 4",
      plataforma: "steam",
      precoAntigo: "R$ 300,00",
      precoAtual: "R$ 234,99",
      imagem: "/images/farcry6.jpg",
    },
    {
        id: 5,
        nome: "WatchDogs 2",
        plataforma: "playstation",
        precoAntigo: "R$ 125,00",
        precoAtual: "R$ 100,99",
        imagem: "/images/gta5-1024x1024.avif",
    },
  ];
  
  const jogosAgrupados = jogos.reduce((acc, jogo, index) => {
    if (index % 5 === 0) acc.push([]);
    acc[acc.length - 1].push(jogo);
    return acc;
  }, []);
  

  
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
  
  jogosAgrupados.forEach(criarCards);
  
