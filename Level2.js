class Level2{
    constructor(){
        
    this.ball = createSprite(20,20,10,10);
    this.wall1= createSprite(140,360,100,10);
    this.wall2= createSprite(65,60,120,10);
    this.wall3= createSprite(300,200,100,10);
    this.wall4= createSprite(325,345,155,10);
    this.wall5= createSprite(330,150,10,100);
    this.wall6= createSprite(140,307,10,100);
    this.wall7= createSprite(180,220,10,130);
    this.wall8= createSprite(190,50,10,100);
    this.wall9= createSprite(100,200,150,10);
    this.wall10= createSprite(250,302,10,100);
    this.wall11= createSprite(240,50,100,10);
    this.wall12= createSprite(48,110,10,100);
    this.wall13= createSprite(20,310,100,10);
    this.wall14= createSprite(190,150,150,10);
    this.wall15= createSprite(310,100,130,10);
    this.wall16= createSprite(50,360,10,100);
    this.wall17= createSprite(300,250,10,100);
    this.wall18= createSprite(350,290,10,100);
    this.wall19= createSprite(100,250,10,100);
    this.wall20= createSprite(180,320,80,10);
    this.wall21= createSprite(145,100,100,10);
    this.wall22= createSprite(210,395,100,10);
    this.wall23= createSprite(350,25,10,90);
    this.cup= createSprite(390,380,40,40);
    this.ball.velocityY = 2;
    this.ball.velocityX = 3;
    }
    display(){
        
    edges= createEdgeSprites();
    this.ball.bounceOff(edges);
  
        if(keyDown("up")){
            this.ball.velocityX = 0;
            this.ball.velocityY = -2;
        }
        
        if(keyDown("down")){
            this.ball.velocityX = 0;
            this.ball.velocityY = 2;
        }
        
        if(keyDown("left")){
            this.ball.velocityX = -2;
            this.ball.velocityY = 0;
        }
        
        if(keyDown("right")){
            this.ball.velocityX = 2;
            this.ball.velocityY = 0;
        }
        if(this.ball.isTouching(this.wall1)||this.ball.isTouching(this.wall2)||this.ball.isTouching(this.wall3)
    ||this.ball.isTouching(this.wall4)||this.ball.isTouching(this.wall5)||this.ball.isTouching(this.wall7)
    ||this.ball.isTouching(this.wall8)||this.ball.isTouching(this.wall9)||this.ball.isTouching(this.wall10)
    ||this.ball.isTouching(this.wall11)||this.ball.isTouching(this.wall12)||this.ball.isTouching(this.wall13)
    ||this.ball.isTouching(this.wall14)||this.ball.isTouching(this.wall15)||this.ball.isTouching(this.wall16)
    ||this.ball.isTouching(this.wall17)||this.ball.isTouching(this.wall18)||this.ball.isTouching(this.wall19)
    ||this.ball.isTouching(this.wall20)||this.ball.isTouching(this.wall21)||this.ball.isTouching(this.wall22)
    ||this.ball.isTouching(this.wall23)){
      this.ball.x=20;
      this.ball.y=20;
    }
    if(this.ball.isTouching(this.wall6)){
        this.ball.x=20;
        this.ball.y=20;
    }
    if(this.ball.isTouching(this.cup)){
      textSize(40);
      text("GAME WON",100,200); 
      this.ball.velocityX=0;
      gameState=0;
      level= new Level();
    }




        drawSprites();
      
        
     
        
    }
}