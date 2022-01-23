class Rain{
    constructor(x,y,r){
      var options={
         restitution=0.2,
         friction=0,
         density=1.7
         }
    this.x=x;
    this.y=y;
    this.r=r;
    this.body=Bodies.circle(this.x,this.y,this.r,options);
    this.color=("blue");
    World.add(world,this.body);

    }














}