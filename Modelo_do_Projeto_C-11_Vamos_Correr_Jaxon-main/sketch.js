var path, power, runner, img_runner, bomba, moeda, energetico;
var caminho;

function preload(){
  //imagens pré-carregadas
  path = loadImage("path.png");
  power = loadImage("power.png");
  img_runner = loadAnimation("Runner-1.png", "Runner-2.png")

}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  caminho = createSprite(200, 200);
  caminho.addImage(path);
  caminho.scale = 1.2;
  caminho.velocityY = 4;

  //corredor
  runner = createSprite(180, 340, 30, 30);
  runner.addAnimation("corredor", img_runner);
  runner.scale = 0.09;
}

function draw() {
  background(0);
  
  caminho.velocityY = 4;
  
  if(caminho.y > 400 ){
    caminho.y = height/2;
    
  }
  
  if(keyDown("A")){
   runner.velocityX = -2;
   
  }
  
  if(keyDown("D")){
    runner.velocityX = 2;
    
   }

    drawSprites();
}
