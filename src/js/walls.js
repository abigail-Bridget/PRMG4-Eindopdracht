import { Actor, CollisionType, Vector } from "excalibur";

export class Wall extends Actor {
    constructor(x, y, width, height) {
        super({
            pos: new Vector(x, y),
            width: width,
            height: height,
            collisionType: CollisionType.Fixed
        });
    
    }
}