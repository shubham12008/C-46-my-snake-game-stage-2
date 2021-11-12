let snake;
let rez = (18);
let food;
let w;
let h;
var score = 0;
var maze1img,maze2img,maze3img,maze4img;


function preload(){
maze1img = loadImage("images/maze 1.png");
maze2img = loadImage("images/maze 2.png");
maze3img = loadImage("images/maze 3.png");
maze4img = loadImage("images/maze 4.png");
}

function setup(){
createCanvas(400,400);
w = floor(width / rez);
h = floor(height / rez);
frameRate(8);
snake = new Snake();
foodLocation();
}

function foodLocation(){
  let x = floor(random(w));
  let y = floor(random(h));
food =createVector(x,y);
}

function keyPressed(){
  if (keyCode === LEFT_ARROW){
    snake.setDir(-1,0);
  } else if (keyCode === RIGHT_ARROW){
    snake.setDir(1,0);
  }else if (keyCode === UP_ARROW){
    snake.setDir(0,-1);
  }else if (keyCode === DOWN_ARROW){
    snake.setDir(0,1);
  }


}

function draw(){
scale(rez);
background(43,62,79);
if (snake.eat(food)){
  foodLocation();
}
snake.eat(food);
snake.update();
snake.show();

noStroke();
fill(237,79,62);
rect(food.x,food.y,1,1);
textSize(1); 
text("SCORE - " + score,15,2);
if (score >= 5){
  spawnMaze();
}
drawSprites();

}
 function spawnMaze(){
   if (frameCount%60 === 0){
     var maze = createSprite(100,200,10,10);
     var random1 = Math.round(random(1,4));
     switch(random1){
       case 1: maze.addImage(maze1img);
       break; 
       case 2: maze.addImage(maze2img);
       break;
       case 3: maze.addImage(maze3img);
       break; 
       case 4: maze.addImage(maze4img);
       break;
       default:break;
     }
   }
 }