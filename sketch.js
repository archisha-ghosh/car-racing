var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

var soundtrack;

function preload(){
  track = loadImage("track.jpg");
  car1_img = loadImage("car1.png");
  car2_img = loadImage("car2.png");
  car3_img = loadImage("car3.png");
  car4_img = loadImage("car4.png");
  ground = loadImage("ground.png");
  soundtrack = loadSound("fire_funk_proud_music_preview.mp3")
}

function setup(){
  canvas = createCanvas(displayWidth-20, displayHeight-165);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

  background(3,192,193);

  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
    soundtrack.loop();
  }
  if(gameState === 2){
    game.end();
  }
  

}
