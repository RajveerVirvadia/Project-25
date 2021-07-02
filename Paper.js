class Paper{
	constructor(x,y,r)
	{
		var options = {
			restitution : 0.3,
			density : 1.2,
			friction : 0
		}
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);
        this.image = loadImage("paper.png");

	}
	display()
	{
			var paperpos=this.body.position;		
			push()
			translate(paperpos.x, paperpos.y);
			imageMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			image(this.image, 0, 0, this.r, this.r)
			//draw the ellipse here to display the rubber ball

			pop()
	}

}