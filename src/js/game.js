import '../css/style.css';
import { Actor, Engine, DisplayMode } from 'excalibur';
import { Resources, ResourceLoader } from './resources.js';
import { StartScene } from './startScene.js';
import { InstructionScene } from './instructionScene.js';
import { MainGameScene } from './MainGameScene.js';
import { GameOverScene } from './gameOverScene.js';
import { EndScene } from './endScene.js';

export class Game extends Engine {
    
    constructor() {
        super({
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen,
            antialiasing: false,
        });

        // Load resources before starting the game
        this.start(ResourceLoader).then(() => this.showStart()).catch(error => {
            console.error("Error starting the game:", error);
        });
    }

    showStart() {
        try {
            const startScene = new StartScene(this);
            this.addScene('start', startScene);
            this.goToScene('start');
        } catch (error) {
            console.error("Error during showStart:", error);
        }
    }

    goToInstructionScene() {
        try {
            const instructionScene = new InstructionScene(this);
            this.addScene('instructionscene', instructionScene);
            this.goToScene('instructionscene');
        } catch (error) {
            console.error("Error during goToInstructionScene:", error);
        }
    }

    goToMainGameScene() {
        try {
            const mainScene = new MainGameScene(this);
            this.addScene('main', mainScene);
            this.goToScene('main');
        } catch (error) {
            console.error("Error during goToMainGameScene:", error);
        }
    }

    goToEndScene() {
        try {
            const endScene = new EndScene(this);
            this.add('end', endScene);
            this.goToScene('end');
        } catch (error) {
            console.error("Error during goToEndScene:", error);
        }
    }
}

new Game();
