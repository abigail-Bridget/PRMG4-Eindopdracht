import { Scene, Actor, Vector, Input } from 'excalibur';
import { Resources } from './resources.js';

export class InstructionScene extends Scene {
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

            const controlsScherm = new Actor();
            controlsScherm.graphics.use(Resources.Instruction.toSprite());  // Use the correct resource
            controlsScherm.pos = new Vector(this.game.drawWidth / 2, this.game.drawHeight / 2);
         controlsScherm.scale = new Vector(1.5, 1.4);
            this.add(controlsScherm);

            console.log("Instruction Scene initialized");
        } 
        }
    

