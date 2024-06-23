import { Scene, Actor, Vector, Input } from 'excalibur';
import { Resources } from './resources.js';

export class StartScene extends Scene {
    constructor(game) {
        super();
        this.game = game;
    }

     onInitialize(engine) {


            this.game.input.keyboard.on('press', (evt) => {
                if (evt.key === Input.Keys.Enter) {
                    this.game.goToInstructionScene();
                }
            });

            const startScherm = new Actor();
            startScherm.graphics.use(Resources.StartScene.toSprite());
            startScherm.pos = new Vector(this.game.drawWidth / 2, this.game.drawHeight / 2);
            startScherm.scale = new Vector(1.5, 1.4);
            this.add(startScherm);
            console.log("Start scene initialized");
        
    }
}




