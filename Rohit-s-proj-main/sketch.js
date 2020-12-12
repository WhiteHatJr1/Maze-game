var maze, maze_img;

function preload() {
  maze_img = loadImage("pics/Maze1.png");
}

function setup() {
  createCanvas(600,600);
  maze = createSprite(300,300)
  maze.addImage("game1",maze_img);

  wallL = createSprite(50,305,5,515);
  wallR = createSprite(553,305,5,515);

  wallV1 = createSprite(98,305,5,106);
  wallV2 = createSprite(250,305,5,106);
  wallV3 = createSprite(300,305,5,206);
  wallV4 = createSprite(200,175,5,156);
  wallV5 = createSprite(150,128,5,58);
  wallV6 = createSprite(300,128,5,58);
  wallV7 = createSprite(400,128,5,58);
  wallV8 = createSprite(505,128,5,58);
  wallV9 = createSprite(250,178,5,58);
  wallV10 = createSprite(355,205,5,105);
}

function draw() {
  background(220);  


  drawSprites();
}