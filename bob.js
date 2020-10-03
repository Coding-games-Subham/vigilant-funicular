class bob{
    constructor(x,y){
        var options = {
        'isStatic':true,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
    }
        this.body = Bodies.circle(x, y ,80,options);
        World.add(world, this.body);
        
    }
       
    
    display(){
        fill("purple");

        
    push();
        translate(this.body.position.x, this.body.position.y);
        var pos=this.body.position
         this.width=20;
         this.height=20;
         ellipse(0, 0 ,80 , 80); 
        
        pop();
    }
}