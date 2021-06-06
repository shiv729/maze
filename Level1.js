class Level1{
    constructor(){
        this.access1 = createInput("Code1")
        this.access1.position(100,90);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(100,120);
        this.button1.style('background', 'lightgrey');    

        this.access2 = createInput("Code2")
        this.access2.position(700,190);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Check');
        this.button2.position(700,220);
        this.button2.style('background', 'lightgrey');
//add code for creating and positioning the third input box and button
        this.access3 = createInput("Code3")
        this.access3.position(400,290);
        this.access3.style('background', 'white');  

        this.button3 = createButton('Check');
        this.button3.position(400,320);
        this.button3.style('background', 'lightgrey');
    }
    display(){
        textSize(20);
        fill("white");
        text("Score: " + score1, 450, 50);

        fill("white")
        textSize(15)
        text("R E V B A I L A", 100,50)
        fill("lightblue")
        text("Hint: Always changing, not constant !!", 100,70)
  
        fill("white")
        textSize(15)
        text("C U T N I F O N", 500,200)
        fill("lightblue")
       text("Hint: Perform a particular task", 500,220)
    
        fill("white")
        textSize(15)
        text("A T E D A S B A", 250,400)
        fill("lightblue")
        text("Hint: Stores all information !!", 250,420);
        
       
        
        this.button1.mousePressed(() =>{
            var enteredCode =this.access1.value();
            if("VARIABLE"===enteredCode.toUpperCase()){
                this.button1.hide();
                this.access1.hide();
                score1++;
            }
        });

        this.button2.mousePressed(() =>{
            var enteredCode =this.access2.value();
            if("FUNCTION"===enteredCode.toUpperCase()){
                this.button2.hide();
                this.access2.hide();
                score1++;
            }
        });
        this.button3.mousePressed(() =>{
            var enteredCode =this.access3.value();
            if("DATABASE"===enteredCode.toUpperCase()){
                this.button3.hide();
                this.access3.hide();
                score1++;
            }
        });
        if(score1===3){
            gameState=0;
            level= new Level();
            console.log(score1);
        }

     
    }
}