//imagens do jogo
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
let imagemCarro4;
let imagemCarro5;
let imagemCarro6;

//sons do jogo

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("Imagens/estrada.png");
  imagemDoAtor = loadImage("Imagens/ator-2.png");
  imagemCarro1 = loadImage("Imagens/carro-1.png");
  imagemCarro2 = loadImage("Imagens/carro-2.png");
  imagemCarro3 = loadImage("Imagens/carro-3.png");
  imagemCarro4 = loadImage("Imagens/carro-4.png");
  imagemCarro5 = loadImage("Imagens/carro-5.png");
  imagemCarro6 = loadImage("Imagens/carro-6.png");
  
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro5, imagemCarro6, imagemCarro4];
  
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/goes.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
}