const jogos = [
    { id: 1, nome: "The Last of Us Part II", plataforma: "playstation", precoAntigo: "R$ 299,00", precoAtual: "R$ 199,99", imagem: "images/the-last-of -us-parte-2.jpg" },
    { id: 2, nome: "Halo Infinite", plataforma: "xbox", precoAntigo: "R$ 249,00", precoAtual: "R$ 179,99", imagem: "images/Halo Infinite.jpg" },
    { id: 3, nome: "Cyberpunk 2077", plataforma: "steam", precoAntigo: "R$ 299,00", precoAtual: "R$ 159,99", imagem: "images/Cyberpunk 2077.jpg" },
    { id: 4, nome: "Hollow Knight", plataforma: "steam", precoAntigo: "R$ 80,00", precoAtual: "R$ 40,99", imagem: "images/Hollow Knight.jpg" },
    { id: 5, nome: "Red Dead Redemption 2", plataforma: "xbox", precoAntigo: "R$ 319,00", precoAtual: "R$ 209,99", imagem: "images/Red Dead Redemption 2.jpg" },
    { id: 6, nome: "Bloodborne", plataforma: "playstation", precoAntigo: "R$ 149,00", precoAtual: "R$ 99,99", imagem: "images/Bloodborne.jpg" },
    { id: 7, nome: "Resident Evil 4 Remake", plataforma: "steam", precoAntigo: "R$ 259,00", precoAtual: "R$ 229,99", imagem: "images/Resident Evil 4 Remake.jpg" },
    { id: 8, nome: "Cuphead", plataforma: "xbox", precoAntigo: "R$ 89,00", precoAtual: "R$ 49,99", imagem: "images/Cuphead.jpg" },
    { id: 9, nome: "Stardew Valley", plataforma: "steam", precoAntigo: "R$ 49,00", precoAtual: "R$ 19,99", imagem: "images/Stardew Valley.jpg" },
    { id: 10, nome: "Sekiro: Shadows Die Twice", plataforma: "playstation", precoAntigo: "R$ 249,00", precoAtual: "R$ 179,99", imagem: "images/Sekiro Shadows Die Twice.jpg" },
    { id: 11, nome: "Assassin's Creed Valhalla", plataforma: "xbox", precoAntigo: "R$ 299,00", precoAtual: "R$ 199,99", imagem: "images/Assassin's Creed Valhalla.jpg" },
    { id: 12, nome: "Elden Ring", plataforma: "steam", precoAntigo: "R$ 299,00", precoAtual: "R$ 269,99", imagem: "images/Elden Ring.jpg" },
    { id: 13, nome: "Forza Horizon 5", plataforma: "xbox", precoAntigo: "R$ 349,00", precoAtual: "R$ 299,99", imagem: "images/Forza Horizon 5.jpg" },
    { id: 14, nome: "God of War Ragnarök", plataforma: "playstation", precoAntigo: "R$ 349,00", precoAtual: "R$ 299,99", imagem: "images/God of War Ragnarök.jpg" },
    { id: 15, nome: "Control Ultimate Edition", plataforma: "steam", precoAntigo: "R$ 199,00", precoAtual: "R$ 129,99", imagem: "images/Control Ultimate Edition.jpg" },
    { id: 16, nome: "Alan Wake Remastered", plataforma: "playstation", precoAntigo: "R$ 149,00", precoAtual: "R$ 99,99", imagem: "images/Alan Wake Remastered.jpg" },
    { id: 17, nome: "The Elder Scrolls V: Skyrim", plataforma: "xbox", precoAntigo: "R$ 199,00", precoAtual: "R$ 89,99", imagem: "images/The Elder Scrolls V Skyrim.jpg" },
    { id: 18, nome: "Fallout 4", plataforma: "steam", precoAntigo: "R$ 199,00", precoAtual: "R$ 89,99", imagem: "images/Fallout 4.jpg" },
    { id: 19, nome: "Dark Souls III", plataforma: "playstation", precoAntigo: "R$ 199,00", precoAtual: "R$ 129,99", imagem: "images/Dark Souls III.jpg" },
    { id: 20, nome: "DOOM Eternal", plataforma: "xbox", precoAntigo: "R$ 299,00", precoAtual: "R$ 149,99", imagem: "images/DOOM Eternal.jpg" },
    { id: 21, nome: "Hades", plataforma: "steam", precoAntigo: "R$ 79,00", precoAtual: "R$ 39,99", imagem: "images/Hades.jpg" },
    { id: 22, nome: "Detroit: Become Human", plataforma: "playstation", precoAntigo: "R$ 149,00", precoAtual: "R$ 99,99", imagem: "images/Detroit Become Human.jpg" },
    { id: 23, nome: "It Takes Two", plataforma: "xbox", precoAntigo: "R$ 159,00", precoAtual: "R$ 109,99", imagem: "images/It Takes Two.jpg" },
    { id: 24, nome: "The Witcher 3: Wild Hunt", plataforma: "steam", precoAntigo: "R$ 99,00", precoAtual: "R$ 49,99", imagem: "images/The Witcher 3 Wild Hunt.jpg" },
    { id: 25, nome: "Horizon Forbidden West", plataforma: "playstation", precoAntigo: "R$ 349,00", precoAtual: "R$ 299,99", imagem: "images/Horizon Forbidden West.jpg" },
    { id: 26, nome: "Dead Space Remake", plataforma: "steam", precoAntigo: "R$ 279,00", precoAtual: "R$ 249,99", imagem: "images/Dead Space Remake.jpg" },
    { id: 27, nome: "Marvel's Spider-Man", plataforma: "playstation", precoAntigo: "R$ 299,00", precoAtual: "R$ 219,99", imagem: "images/Marvel's Spider-Man.jpg" },
    { id: 28, nome: "FIFA 23", plataforma: "xbox", precoAntigo: "R$ 349,00", precoAtual: "R$ 259,99", imagem: "images/FIFA 23.jpg" },
    { id: 29, nome: "Among Us", plataforma: "steam", precoAntigo: "R$ 20,00", precoAtual: "R$ 10,99", imagem: "images/Among Us.jpg" },
    { id: 30, nome: "Outlast II", plataforma: "xbox", precoAntigo: "R$ 79,00", precoAtual: "R$ 39,99", imagem: "images/Outlast II.jpg" },
    { id: 31, nome: "Super Mario Odyssey", plataforma: "steam", precoAntigo: "R$ 120,00", precoAtual: "R$ 105,99", imagem: "images/Super Mario Odyssey.jpg" },
    { id: 32, nome: "GTA Trilogy", plataforma: "xbox", precoAntigo: "R$ 199,00", precoAtual: "R$ 179,99", imagem: "images/GTA Trilogy.jpg" },
    { id: 33, nome: "Portal", plataforma: "steam", precoAntigo: "R$ 15,00", precoAtual: "R$ 10,99", imagem: "images/Portal.jpg" },
    { id: 34, nome: "Nier Automata", plataforma: "steam", precoAntigo: "R$ 159,00", precoAtual: "R$ 150,99", imagem: "images/Nier Automata.jpg" },
    { id: 35, nome: "Silent Hill", plataforma: "xbox", precoAntigo: "R$ 140,00", precoAtual: "R$ 109,99", imagem: "images/Silent Hill.jpg" },
    { id: 36, nome: "Hollow Knight: Silksong", plataforma: "steam", precoAntigo: "R$ 80,00", precoAtual: "R$ 70,99", imagem: "images/Hollow Knight Silksong.jpg" },
    { id: 37, nome: "Half-Life 2", plataforma: "steam", precoAntigo: "R$ 25,00", precoAtual: "R$ 15,99", imagem: "images/Half-Life 2.jpg" },
    { id: 38, nome: "Overwatch 2", plataforma: "xbox", precoAntigo: "R$ 25,00", precoAtual: "R$ 15,99", imagem: "images/Overwatch 2.jpg" },
    { id: 39, nome: "The Legend of Zelda: BOW", plataforma: "steam", precoAntigo: "R$ 200,00", precoAtual: "R$ 180,99", imagem: "images/The Legend of Zelda Breath of the Wild.jpg" },
    { id: 40, nome: "Street Fighter V", plataforma: "playstation", precoAntigo: "R$ 110,00", precoAtual: "R$ 89,99", imagem: "images/Street Fighter V.jpg" },
    { id: 41, nome: "Terraria", plataforma: "steam", precoAntigo: "R$ 50,00", precoAtual: "R$ 30,99", imagem: "images/Terraria.jpg" },
    { id: 42, nome: "The Sims 4", plataforma: "steam", precoAntigo: "R$ 159,00", precoAtual: "R$ 129,99", imagem: "images/The Sims 4.jpg" },
    { id: 43, nome: "Battlefield 2042", plataforma: "xbox", precoAntigo: "R$ 259,00", precoAtual: "R$ 209,99", imagem: "images/Battlefield 2042.jpg" },
    { id: 44, nome: "Metal Gear Solid V", plataforma: "playstation", precoAntigo: "R$ 199,00", precoAtual: "R$ 129,99", imagem: "images/Metal Gear Solid V.jpg" },
    { id: 45, nome: "Celeste", plataforma: "steam", precoAntigo: "R$ 50,00", precoAtual: "R$ 29,99", imagem: "images/Celeste.jpg" },
    { id: 46, nome: "Ori and the Will of the Wisps", plataforma: "xbox", precoAntigo: "R$ 89,00", precoAtual: "R$ 49,99", imagem: "images/Ori and the Will of the Wisps.jpg" },
    { id: 47, nome: "Minecraft", plataforma: "steam", precoAntigo: "R$ 149,00", precoAtual: "R$ 109,99", imagem: "images/Minecraft.jpg" },
    { id: 48, nome: "Valorant", plataforma: "steam", precoAntigo: "R$ 100,00", precoAtual: "R$ 70,99", imagem: "images/Valorant.jpg" },
    { id: 49, nome: "Super Smash Bros. Ultimate", plataforma: "playstation", precoAntigo: "R$ 299,00", precoAtual: "R$ 259,99", imagem: "images/Super Smash Bros. Ultimate.jpg" },
    { id: 50, nome: "Dead by Daylight", plataforma: "steam", precoAntigo: "R$ 79,00", precoAtual: "R$ 49,99", imagem: "images/Dead by Daylight.jpg" },
    { id: 51, nome: "League of Legends", plataforma: "steam", precoAntigo: "R$ 0,00", precoAtual: "R$ 0,00", imagem: "images/League of Legends.jpg" },
    { id: 52, nome: "Mirror's Edge™ Catalyst", plataforma: "playstation", precoAntigo: "R$ 299,00", precoAtual: "R$ 249,99", imagem: "images/Mirror's Edge™ Catalyst.jpg" },
    { id: 53, nome: "Gears of War 4", plataforma: "xbox", precoAntigo: "R$ 159,00", precoAtual: "R$ 129,99", imagem: "images/Gears of War 4.jpg" },
    { id: 54, nome: "Final Fantasy VII Remake", plataforma: "playstation", precoAntigo: "R$ 299,00", precoAtual: "R$ 249,99", imagem: "images/Final_Fantasy_VII_Remake.jpg" },
    { id: 55, nome: "Just Cause 4", plataforma: "xbox", precoAntigo: "R$ 179,00", precoAtual: "R$ 149,99", imagem: "images/Just Cause 4.jpg" },
    { id: 56, nome: "Left 4 Dead 2", plataforma: "steam", precoAntigo: "R$ 30,00", precoAtual: "R$ 19,99", imagem: "images/Left 4 Dead 2.jpg" },
    { id: 57, nome: "Frostpunk", plataforma: "steam", precoAntigo: "R$ 90,00", precoAtual: "R$ 59,99", imagem: "images/Frostpunk.jpg" },
    { id: 58, nome: "Nioh 2", plataforma: "playstation", precoAntigo: "R$ 249,00", precoAtual: "R$ 199,99", imagem: "images/Nioh 2.jpg" },
    { id: 59, nome: "Hitman 3", plataforma: "xbox", precoAntigo: "R$ 269,00", precoAtual: "R$ 229,99", imagem: "images/Hitman 3.jpg" },
    { id: 60, nome: "Mass Effect Legendary Edition", plataforma: "steam", precoAntigo: "R$ 199,00", precoAtual: "R$ 149,99", imagem: "images/Mass Effect Legendary Edition.jpg" }
];

//Visualizar lista de jogos no console debug
//console.log(jogos);

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
        jogosFiltrados = jogos.filter(jogo => jogo.plataforma === bodyId); // // Filtra os jogos pela plataforma correspondente ao ID do body
    }

    // Aqui eu agrupo os meus jogos em grupo de 5 JOGOS atravez do indices multiplos de 5 usando REDIUCE
    const jogosAgrupados = jogosFiltrados.reduce((acumulador, jogo, index) => {
        //se o indice for um multiplo de 5 (5,10,15,20..) , eu crio sub grupos com 5 objetos cada
         //usando o meu acumulador sempre que um indice for multiplo de 5 eu crio um subarray acumulador.push([]) cria um subarray dentro do acumulador
        if (index % 5 === 0) acumulador.push([]);
        //usando o meu acumulador sempre que um indice for multiplo de 5 eu crio um subarray e adiciono os jogos anteriores dentro dele (index 5 cria subarray e recebe os itens 0,1,2,3,4)
        acumulador[acumulador.length - 1].push(jogo);
        //no final eu retorno meu accumulador contendo os subgrupos de 5 objetos 
        return acumulador;
    }, []);
    
     // Renderiza os jogos agrupados criando os cards para cada grupo de 5 jogos
     // Para cada grupo em jogosAgrupados, cria os cards baseados nos itens contidos em cada grupo de 5 jogos
    jogosAgrupados.forEach(grupo => criarCards(grupo));

    //Funcao de Debug para visualizar os grupos
    jogosAgrupados.forEach(grupo =>console.log(grupo))
     
});


 //console.log(jogos)


function criarCards(grupo) {
    //crio a div qua vai conter meus card em grupo de 5
    const container = document.createElement("div");
     // Adiciono a classe 'container' à div criada
    container.classList.add("container");

    // Para cada jogo dentro do grupo de 5 jogos
    grupo.forEach((jogo) => {
        //eu crio uma div para cada card do meu grupo
        const card = document.createElement("div");
        //atribuo a classe card para cada div de CARD UNICO dentro do container
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

        // Crio a estrutura do card com os atributos vindos do objeto 'jogo'
        // Cada jogo é tratado individualmente em cada iteração
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
        //Anexo meu filho CARD NO PAI CONTAINER A CADA ITERACAO
        container.appendChild(card);
         
    });
    // No final de cada iteração de grupo de 5 cards, anexo o container de cards no elemento pai : 'main'
    document.querySelector("main").appendChild(container);

}





