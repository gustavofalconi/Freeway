//código do carro

let xCarros = [-100, -100, -100, 500, 500, 500]
let yCarros = [40, 97, 150, 210, 263, 318];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;

//direção

const direcao = [1, 1, 1, -1, -1, -1];
const xCarroInicial = [-100, -100, -100, 500, 500, 500]


function mostraCarro(){
  for(let i = 0; i<imagemCarros.length; i++){
  image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for(let i = 0; i<imagemCarros.length; i++){
    xCarros[i] += velocidadeCarros[i] * direcao[i];
    }
}

function voltaPosicaoInicialCarro(){
    for (let i = 0; i<imagemCarros.length; i++){
      if(passouTodaATela(xCarros[i])){
        xCarros[i] = xCarroInicial[i];
      }
  }  
}

function passouTodaATela(xCarro){
  return xCarro > width * 1.1 || xCarro < -105
}