class Paper{
    constructor(x,y,r){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.body=Bodies.circle(x,y,r,options);
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("Paper.png")
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        fill("pink");
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,110,110);
        }
}