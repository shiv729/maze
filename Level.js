class Level{
    constructor(){
        this.level1b= createButton('Level 1');
        this.level2b= createButton('Level 2');
        this.level3b= createButton('Level 3');
    }
    hide(){
        this.level1b.hide();
        this.level2b.hide();
        this.level3b.hide();
    }

    display(){
        this.level1b.position(100, 550);
        this.level2b.position(300, 400);
        this.level3b.position(500, 250);

        this.level1b.mousePressed(()=>{
            this.level1b.hide();
            this.level2b.hide();
            this.level3b.hide();
            L1 = new Level1();
            gameState=1;
           
        }
        );
        this.level2b.mousePressed(()=>{
            this.level1b.hide();
            this.level2b.hide();
            this.level3b.hide();
            L2 = new Level2();
            gameState=2;
        }
        );
        this.level3b.mousePressed(()=>{
            this.level1b.hide();
            this.level2b.hide();
            this.level3b.hide();
        }
        );
        
    }
}