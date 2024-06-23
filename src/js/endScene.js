import { Scene, Actor, Vector, Input } from 'excalibur';
import { Resources } from './resources.js';

export class EndScene extends Scene {
    constructor(game) {
        super();
        this.game = game;
    }

    onInitialize(engine) {

        this.game.input.keyboard.on('press', (evt) => {
            if (evt.key === Input.Keys.Space) {
                this.game.goToStartScene();
            }
        });

        const endScherm = new Actor();
        endScherm.graphics.use(Resources.End.toSprite());  // Use the correct resource
        endScherm.pos = new Vector(this.game.drawWidth / 2, this.game.drawHeight / 2);
        endScherm.scale = new Vector(1.6, 1.4);
        this.add(endScherm);

        console.log("end scene initialized");
    }
}
