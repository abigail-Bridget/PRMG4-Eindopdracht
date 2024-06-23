import { Actor, Vector, Keys, CollisionType, SpriteSheet, Animation, range, Rectangle } from "excalibur";
import { ResourceLoader, Resources } from './resources.js';


export class Player extends Actor {
    currentAnimation = null;

    constructor() {
        super({
            width: 12,
            height: 20,
            collisionType: CollisionType.Active
        });


    }

    onInitialize(engine) {
        const spriteSheetLI = SpriteSheet.fromImageSource({
            image: Resources.PlayerIdleLeft,
            grid: {
                rows: 6,
                columns: 1,
                spriteWidth: 32,
                spriteHeight: 48
            },
        });

        const spriteSheetRI = SpriteSheet.fromImageSource({
            image: Resources.PlayerIdleRight,
            grid: {
                rows: 6,
                columns: 1,
                spriteWidth: 32,
                spriteHeight: 48
            },
        });

        const spriteSheetLR = SpriteSheet.fromImageSource({
            image: Resources.PlayerRunLeft,
            grid: {
                rows: 8,
                columns: 1,
                spriteWidth: 32,
                spriteHeight: 48
            },
        });

        const spriteSheetRR = SpriteSheet.fromImageSource({
            image: Resources.PlayerRunRight,
            grid: {
                rows: 8,
                columns: 1,
                spriteWidth: 32,
                spriteHeight: 48
            },
        });

        const spriteSheetC = SpriteSheet.fromImageSource({
            image: Resources.PlayerCharge,
            grid: {
                rows: 5,
                columns: 1,
                spriteWidth: 32,
                spriteHeight: 48
            },
        });


        this.runAnimationTop = Animation.fromSpriteSheet(spriteSheetRR, range(0, 7), 200);
        this.runAnimationLeft = Animation.fromSpriteSheet(spriteSheetLR, range(0, 7), 200);
        this.runAnimationRight = Animation.fromSpriteSheet(spriteSheetRR, range(0, 7), 200);
        this.runAnimationDown = Animation.fromSpriteSheet(spriteSheetRR, range(0,7), 200);
        this.runAnimationRightIdle = Animation.fromSpriteSheet(spriteSheetRI, range(0, 5), 200);
        this.runAnimationTopIdle = Animation.fromSpriteSheet(spriteSheetRI, range(0, 5), 200);
        this.runAnimationLeftIdle = Animation.fromSpriteSheet(spriteSheetLI, range(0, 5),200);
        this.runAnimationDownIdle = Animation.fromSpriteSheet(spriteSheetRI, range(0, 5), 200);
        this.runAnimationCharge = Animation.fromSpriteSheet(spriteSheetC, range(0, 4), 200);
        this.graphics.use(this.runAnimationCharge);
        this.currentAnimation = this.runAnimationDownIdle;

            this.scale = new Vector(1.5, 1.5);
    }

    noMovementKeysHeld(engine) {
        return !(
            engine.input.keyboard.isHeld(Keys.W) ||
            engine.input.keyboard.isHeld(Keys.A) ||
            engine.input.keyboard.isHeld(Keys.S) ||
            engine.input.keyboard.isHeld(Keys.D)
        );

    }

    onPreUpdate(engine, delta) {
        let xspeed = 0;
        let yspeed = 0;

        if (engine.input.keyboard.isHeld(Keys.W)) {
            yspeed = -1.2;
            if (this.currentAnimation !== this.runAnimationTop) {
                this.graphics.use(this.runAnimationTop);
                this.currentAnimation = this.runAnimationTop;
            }
        } else if (engine.input.keyboard.isHeld(Keys.S)) {
            yspeed = 1.2;
            if (this.currentAnimation !== this.runAnimationDown) {
                this.graphics.use(this.runAnimationDown);
                this.currentAnimation = this.runAnimationDown;
            }
        } else {
            yspeed = 0;
        }

        if (engine.input.keyboard.isHeld(Keys.D)) {
            xspeed = 1.2;
            if (this.currentAnimation !== this.runAnimationRight) {
                this.graphics.use(this.runAnimationRight);
                this.currentAnimation = this.runAnimationRight;
            }
        } else if (engine.input.keyboard.isHeld(Keys.A)) {
            xspeed = -1.2;
            if (this.currentAnimation !== this.runAnimationLeft) {
                this.graphics.use(this.runAnimationLeft);
                this.currentAnimation = this.runAnimationLeft;
            }
        } else {
            xspeed = 0;
        }


        if (this.noMovementKeysHeld(engine)) {
            if (this.currentAnimation === this.runAnimationRight) {
                this.graphics.use(this.runAnimationRightIdle);
                this.currentAnimation = this.runAnimationRightIdle;
            } else if (this.currentAnimation === this.runAnimationLeft) {
                this.graphics.use(this.runAnimationLeftIdle);
                this.currentAnimation = this.runAnimationLeftIdle;
            } else if (this.currentAnimation === this.runAnimationTop) {
                this.graphics.use(this.runAnimationTopIdle);
                this.currentAnimation = this.runAnimationTopIdle;
            } else if (this.currentAnimation === this.runAnimationDown) {
                this.graphics.use(this.runAnimationDownIdle);
                this.currentAnimation = this.runAnimationDownIdle;
            }
        }

        this.direction = new Vector(xspeed, yspeed);

        const movementSpeed = 100;
        this.vel = this.direction.scale(movementSpeed);
    }

}