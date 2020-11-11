class ChainClass{
    constructor(a,b,l,s){
var options = {
    bodyA:a,
    bodyB:b,
    length:l,
    stiffness:s
}
this.chain=Constraint.create(options);
World.add(world,this.chain)
    }
 display(){
     line(this.chain.bodyA.position.x,
     this.chain.bodyA.position.y,
     this.chain.bodyB.position.x,
     this.chain.bodyB.position.y)
 }
}