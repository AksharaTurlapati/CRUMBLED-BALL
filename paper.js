class Paper{
    constructor(x,y,r){
       
        var options = {
            restitution:0.3,
            friction:0,
            density:1.3
        }
        this.r = r;
        this.body = Bodies.circle(x,y,r,options);
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+20,this.r,this.r);
    }
}