const filmes = [
    {
        id: 1,
        img: "./imgs/img-1.jpg",
        genero: "Animacao",
        titulo: "Shrek 2",
        sinopse: "Shrek e Fiona acabaram de voltar da lua de mel e vivem felizes em sua casa no pântano. O casal recebe um convite dos pais da princesa, que querem conhecer o novo genro, para um jantar no castelo. Eles ficaram sabendo que Fiona havia se casado com o seu verdadeiro amor, mas o que eles ainda não sabem é que este amor é um ogro mal-educado de mais de 300 quilos, que conta com um burro falante como melhor amigo."
    },
    {   id: 2,
        img: "./imgs/img-2.jpg",
        genero: "Animacao",
        titulo: "Carros",
        sinopse: "Ao viajar para a Califórnia, o famoso carro de corridas Relâmpago McQueen se perde e vai parar em Radiator Springs, uma cidadezinha na Rota 66. Ele conhece novos amigos e aprende lições que mudam sua forma de encarar a vida."
    },
    {   id: 3,
        img: "./imgs/img-3.jpg",
        genero: "Animacao",
        titulo: "Bee Movie",
        sinopse: "A recém-formada abelha Barry acha a vida de trabalhar com mel desinteressante. Ele voa fora da colmeia pela primeira vez e conversa com um humano, quebrando uma primordial regra de sua espécie. Barry descobre que humanos têm roubado e comido mel há séculos e decide processar a humanidade."
    },
    {   id: 4,
        img: "./imgs/img-4.png",
        genero: "Magia",
        titulo: "Harry Potter e a Pedra Filosofal",
        sinopse: "Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente, Harry é impedido de ler a carta por seu tio, mas logo recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega para levá-lo até a escola. Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger."    
    }
];

numFilme = 0;
const img = document.getElementById('img');
const genero = document.getElementById('genero');
const titulo = document.getElementById('titulo');
const sinopse = document.getElementById('sinopse');

function alteraFilme(){
    const item = filmes[numFilme];
    img.src = item.img;
    genero.textContent = item.genero;
    titulo.textContent = item.titulo;
    sinopse.textContent = item.sinopse;
}

function filmeProximo(){
    numFilme++;
    if(numFilme > filmes.length-1){
        numFilme = 0;
    }
    alteraFilme();
}

function filmeAnterior(){
    numFilme--;
    if(numFilme < 0){
        numFilme = filmes.length-1;
    }
    alteraFilme();
}

function filmeAleatorio(){
    numFilme = Math.floor(Math.random() * (filmes.length));
    alteraFilme();
}