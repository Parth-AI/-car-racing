class Cars{
     constructor(){

          this.rand = random(1,3.9);

          this.image1 = loadImage("images/car1.png");
          this.image2 = loadImage("images/car3.png");
          this.image3 = loadImage("images/car4.png");

          this.random = random(300,1000);
          this.car = createSprite(this.random,player.y-350,20,20);
          if(this.rand > 1 && this.rand < 2){
               this.car.addImage("this.car",this.image1);
          }

          else if(this.rand > 2 && this.rand < 3){
               this.car.addImage("this.car",this.image2);
          }

          else if(this.rand > 3 || this.rand === 3){
               this.car.addImage("this.car",this.image3);
          }
          if(gameState === 0){
               this.car.velocityY = -7;
          }

          if(gameState === 1){
               this.car.velocityY = 7;
          }
          console.log(this.car.velocityY);

          if(gameState === 0){
               if(player.x === this.car.x&&this.player.y === this.car.y){
                  lives = lives-1;
               }
          textSize(18);
          fill(0);
          text("LIVES REMAINING:"+lives,displayWidth/5,player.y-330);
     }
     }

     display(){

     }
}