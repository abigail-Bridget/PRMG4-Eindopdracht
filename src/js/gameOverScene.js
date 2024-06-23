import { Scene, Actor, Vector, Input } from 'excalibur';
import { Resources } from './resources.js';

export class GameOverScene extends Scene {
    constructor(game) {
        super();
        this.game = game;
    }

    onInitialize(engine) {

        this.game.input.keyboard.on('press', (evt) => {
            if (evt.key === Input.Keys.Space) {
                this.game.goToMainGameScene();
            }
        });

        const gameOver = new Actor();
        gameOver.graphics.use(Resources.GameOver.toSprite());  // Use the correct resource
        gameOver.pos = new Vector(this.game.drawWidth / 2, this.game.drawHeight / 2);
        gameOver.scale = new Vector(1.6, 1.4);
        this.add(gameOver);

        console.log("Game Over Scene initialized");
    }
}
