import { Scene, Vector } from 'excalibur';
import { Resources } from './resources.js';
import { Player } from './Player.js';
import { RedMoonPotion } from './redMoonPotion.js';
import { Score } from './score.js';
import { PinkMoonPotion } from './PinkMoonPotion.js';
import { PurpleMoonPotion } from './purpleMoonPotion.js';
import { BlueMoonPotion } from './blueMoonPotion.js';
import { BlackMoonPotion } from './blackMoonPotion.js';
import { TurquoiseMoonPotion } from './turquoiseMoonPotion.js';
import { YellowMoonPotion } from './yellowMoonPotion.js';

export class MainGameScene extends Scene {

    constructor(game) {
        super();
        this.game = game;
    }

    onInitialize() {
        this.FillMainScene();
    }

    restartMainGameScene() {
        this.scorecounter.resetScore();
        this.clear();
        this.FillMainScene();
    }

    FillMainScene() {
        this.scorecounter = new Score();
        this.scorecounter.pos = new Vector(40, 40);
        this.scorecounter.visible = true;
        this.scorecounter.z = 999;
        this.add(this.scorecounter);

        // Predefined coordinates for each type of potion with increased spacing
        const redMoonPotionCoordinates = [
            new Vector(96,768),
        ];

        const pinkMoonPotionCoordinates = [
            new Vector(576, 160),
        ];

        const purpleMoonPotionCoordinates = [
            new Vector(1792, 800),
        ];

        const blueMoonPotionCoordinates = [
            new Vector(1248, 96)
        ];

        const blackMoonPotionCoordinates = [
            new Vector(1248, 1728)
        ];

        const turquoiseMoonPotionCoordinates = [
            new Vector(96, 1792)
        ];

        const yellowMoonPotionCoordinates = [
            new Vector(640, 1088)
        ];

        Resources.Map.addToScene(this);

        const player = new Player(this.game);
        player.z = 8;
        player.pos = new Vector(300, 600);
        this.add(player);

        this.spawnPotions(redMoonPotionCoordinates, RedMoonPotion);
        this.spawnPotions(pinkMoonPotionCoordinates, PinkMoonPotion);
        this.spawnPotions(purpleMoonPotionCoordinates, PurpleMoonPotion);
        this.spawnPotions(blueMoonPotionCoordinates, BlueMoonPotion);
        this.spawnPotions(blackMoonPotionCoordinates, BlackMoonPotion);
        this.spawnPotions(turquoiseMoonPotionCoordinates, TurquoiseMoonPotion);
        this.spawnPotions(yellowMoonPotionCoordinates, YellowMoonPotion);

        this.updateCamera(player);
    }

    spawnPotions(potionCoordinates, PotionType) {
        potionCoordinates.forEach(coord => {
            const potion = new PotionType(this.scorecounter);
            potion.z = 1;
            potion.pos = coord.clone();
            this.add(potion);
        });
    }

    updateCamera(player) {
        this.camera.strategy.lockToActor(player);
        this.camera.zoom = 3;
    }
}

// Clamp function to restrict values within a range
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
