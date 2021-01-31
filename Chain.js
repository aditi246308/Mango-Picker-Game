/*class Chain {
    constructor(bodyA,bodyB,offsetX,offsetY){

        this.offsetX = offsetX;
        this.offsetY = offsetY;


        var options={
			bodyA:bodyA,
			bodyB:bodyB,
			pointB:{x:this.offsetX, y:this.offsetY}
		}

        this.Chain = Constraint.create(options);
        World.add(world, this.chain)
    }

    display(){
        var pointA = this.bodyA.position.x;
        var pointB = this.bodyB.position.y;

        strokeWeight(2);

		var point1X=pointA.x
		var point1Y=pointA.y

		var point2X=pointB.x+this.offsetX
		var point2Y=pointB.y+this.offsetY

		line(point1X,point1Y,point2X,point2Y);
    }
}*/

// I tried to copy and paste a Chain class from one of your reference codes as the on above,(my one), wasn't working but I still got the same error :(
class Chain{
	constructor(body1,body2, offsetX, offsetY)
	{
		this.offsetX=offsetX
		this.offsetY=offsetY
		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.offsetX, y:this.offsetY}
		}
		//console.log(options);
		this.chain=Constraint.create(options)
		World.add(world,this.chain)
	}

	display()
	{
		var pointA=this.chain.bodyA.position;
		var pointB=this.chain.bodyB.position;

		strokeWeight(2);

		var Anchor1X=pointA.x
		var Anchor1Y=pointA.y

		var Anchor2X=pointB.x+this.offsetX
		var Anchor2Y=pointB.y+this.offsetY

		line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
	}

}

