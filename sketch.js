function setup() {
  createCanvas(500, 400);
  somDaTrilha.setVolume(0.2);
  somDaTrilha.loop();
  botaoSubir = createButton("Subir");
  botaoSubir.position(250, 372);
  botaoDescer = createButton("Descer");
  botaoDescer.position(310, 372);
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  botaoSubir.mouseClicked(sobe);
  botaoDescer.mouseClicked(desce);
  voltaPosicaoInicialCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}

function sobe() {
 yAtor -= 20;
}

function desce(){
  if (yAtor < 365){
  yAtor += 20;
}
}




