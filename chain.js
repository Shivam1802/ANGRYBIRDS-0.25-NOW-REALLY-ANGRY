class Chain {
    constructor(bodyA,bodyB) {
        var Options = {
            bodyA:bodyA,
            bodyB:bodyB,
            length:10,
            stiffness:0.1,
        }
this.chain = Constraint.create(Options)
World.add(world,this.chain);
    }

display() {
var pointa=this.chain.bodyA.position
var pointb=this.chain.bodyB.position
strokeWeight(4);
line(pointa.x,pointa.y , pointb.x , pointb.y);

}
}
