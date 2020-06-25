var canvas;
var bg;
var player;
var carImage;
var score;
var gameState;
var car = [];
var lives;
function setup(){
    canvas = createCanvas(displayWidth-20,displayHeight);
    bg = loadImage("images/track.jpg");

    player = createSprite(displayWidth/2,displayHeight/1.1,20,20);
    carImage = loadImage("images/car2.png");

    score = 0;
    gameState = 0;
    lives = 5;
}

function draw(){
    background("brown");

    image(bg, 0,-displayHeight*4,displayWidth, displayHeight*5);
    player.addImage("player",carImage);

    camera.position.x = displayWidth/2;
    camera.position.y = player.y;

    if(gameState === 0){
        if(keyDown(UP_ARROW)){
            player.y = player.y-10;
            score = score+1;
        }

        if(keyDown(RIGHT_ARROW)){
            player.x = player.x+5;
        }

        if(keyDown(LEFT_ARROW)){
            player.x = player.x-5;
        }

        if(frameCount%40 === 0){
            car = new Cars;
        }
}
    if(gameState === 0 && score === 355){
        gameState = 1;
    }   

    

    textSize(18);
    fill(0);
    text("SCORE:"+score,displayWidth/1.3,player.y-330);
    text("LIVES REMAINING:"+lives,displayWidth/5,player.y-330);

    if(gameState === 1){
        textSize(24);
        fill(0);
        text("GAME END!!!",displayWidth/2.27,player.y-100); 
    }

    drawSprites();
}
