class Stone {
    constructor(x,y,width,height){

    var options = {
        restitution: 0,
        friction: 2,
        density: 1
    }
    
    this.width = width;
    this.height = height;
    this.image = loadImage("images/stone.png");
    this.body = Bodies.rectangle(x,y,this.width,this.height,options);
    World.add(world, this.body);


}

   display(){
   var pos = this.body.position;
   push();
   translate(pos.x,pos.y);
   imageMode(CENTER);
   image(this.image,0,0,this.width,this.height);
   pop();

   }

}