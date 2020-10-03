class Roof{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        this.width= width;
        this.height= height ;
        World.add(world, this.body);
    }
    display(){
        

        var pos=this.body.position
         this.width=450;
         this.height=20;
         rectMode(CENTER);
         rect(pos.x, pos.y , 400 , 30); 
    
    }
}