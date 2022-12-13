//ator
let xAtor = 85;
let yAtor = 365;
let colisao = false;
let meusPontos = 0;

//botões
let xBotaoCima = 310;
let yBotaoCima = 350;
let xBotaoBaixo = 400
let yBotaoBaixo = 350;


function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 35, 35);
}

function movimentaAtor(){
  if (keyIsDown(87)){
    yAtor -= 2;
  }
  if (keyIsDown(83)){
    if(podeSeMover()){
    yAtor += 2;
    }  
  }
}

function verificaColisao(){
  for(let i = 0; i<imagemCarros.length ; i++){
    colisao = collideRectRect(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 25,25)
    if(colisao){
      voltaAtorParaPosicaoInicial();
      somDaColisao.play();
      if(pontosMaiorQueZero()){
      meusPontos--;
      }
    }
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 365;
}

function incluiPontos(){
  textAlign(CENTER)
  textSize(25);
  fill(0,255,255);
  text(meusPontos, width/5, 27);
}

function marcaPonto(){
  if(yAtor < 15){
    meusPontos++;
    voltaAtorParaPosicaoInicial()
    somDoPonto.play();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
 return yAtor < 365;
}