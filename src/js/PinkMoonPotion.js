import { Actor, CollisionType } from "excalibur";
import { Resources } from './resources.js';
import { Player } from "./Player.js";

export class PinkMoonPotion extends Actor {
    score = 0;
    constructor(scorecounter) {
        super({
            width: 10,
            height: 20,

        });
        this.scorecounter = scorecounter;
    }

    onInitialize(engine) {
        this.graphics.use(Resources.PinkMoonPotion.toSprite());
        this.on('collisionstart', (evt) => this.onCollisionStart(evt));
        this.z = 7;
    }

    onCollisionStart(evt) {
        if (evt.other instanceof Player) {
            this.scorecounter.updateScore();
            this.kill();
        }
    }
}