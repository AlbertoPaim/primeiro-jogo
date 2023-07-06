let personagem;
let predio;
let tamanho = 64;
let mary;

let velocidade = 64;
let andarX = 0;
let andarY = 0;
let restart 

function setup() {
  createCanvas(576, 576);
  personagem = loadImage('person.png');
  predio = loadImage('predio.png');
  mary = loadImage('mary.png');
}


function draw() {
  background(220);
  
  if(andarX < 0) {
    andarX = 0
  }
  
  if(andarX > tamanho*8) {
    andarX = tamanho*8
  }
  
  if(andarY  < 0 ) {
    andarY = 0
  }
  
  if(andarY > tamanho*8) {
    andarY = tamanho*8
  }
  
  for(let x = 0; x < 9; x++){
    
    for(let y = 0; y < 9; y++){
  
      image(predio, tamanho*x, tamanho*y, tamanho, tamanho)
  }
    
      image(personagem, andarX, andarY, tamanho, tamanho)
      image(mary, 512, 512, tamanho, tamanho)
  }
  
 
  
  if(andarX === 512 && andarY === 512){
    
  rect(160, 160, 256, 256)
  textSize(35)
  text('GANHOU', 210, 240)
  restart =  createButton('Reiniciar')
  restart.position(240, 350)
  restart.mousePressed(reseted)
  noLoop()
  }

}

function reseted(){
       andarX = 0
       andarY = 0
       restart.remove()
       loop() 
    }

function keyPressed() {
  if(keyIsDown(DOWN_ARROW)) {
    andarY += velocidade
  }
  
   if(keyIsDown(UP_ARROW)) {
    andarY -= velocidade
  }
   if(keyIsDown(RIGHT_ARROW)) {
    andarX += velocidade
  }
   if(keyIsDown(LEFT_ARROW)) {
    andarX -= velocidade
  }
    
}
