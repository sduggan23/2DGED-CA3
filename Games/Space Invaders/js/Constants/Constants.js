/*
 * Class to store all sprite data for space invaders
 */
class SpriteData {

    static ENEMY_ONE_WIDTH = 22;
    static ENEMY_ONE_HEIGHT = 16;

    static ENEMY_TWO_WIDTH = 16;
    static ENEMY_TWO_HEIGHT = 16;

    static ENEMY_THREE_WIDTH = 24;
    static ENEMY_THREE_HEIGHT = 16;

    static ENEMY_ANIMATION_DATA = {

        id: "Animated Enemy Sprites",
        spriteSheet: document.getElementById("invaders_sprite_sheet"),

        takes: {

            "Enemy One": {
                frameRatePerSec: 4,
                maxLoopCount: -1,
                startFrameIndex: 0,
                endFrameIndex: 1,
                boundingBoxDimensions: new Vector2(this.ENEMY_ONE_WIDTH, this.ENEMY_ONE_HEIGHT),
                frames: [
                    new Rect(0, 0, this.ENEMY_ONE_WIDTH, this.ENEMY_ONE_HEIGHT),
                    new Rect(0, 16, this.ENEMY_ONE_WIDTH, this.ENEMY_ONE_HEIGHT)
                ]
            },

            "Enemy Two": {
                frameRatePerSec: 3,
                maxLoopCount: -1,
                startFrameIndex: 0,
                endFrameIndex: 1,
                boundingBoxDimensions: new Vector2(this.ENEMY_TWO_WIDTH, this.ENEMY_TWO_HEIGHT),
                frames: [
                    new Rect(22, 0, this.ENEMY_TWO_WIDTH, this.ENEMY_TWO_HEIGHT),
                    new Rect(22, 16, this.ENEMY_TWO_WIDTH, this.ENEMY_TWO_HEIGHT)
                ]
            },

            "Enemy Three": {
                frameRatePerSec: 4,
                maxLoopCount: -1,
                startFrameIndex: 0,
                endFrameIndex: 1,
                boundingBoxDimensions: new Vector2(this.ENEMY_THREE_WIDTH, this.ENEMY_THREE_HEIGHT),
                frames: [
                    new Rect(38, 0, this.ENEMY_THREE_WIDTH, this.ENEMY_THREE_HEIGHT),
                    new Rect(38, 16, this.ENEMY_THREE_WIDTH, this.ENEMY_THREE_HEIGHT)
                ]
            }
        }
    };

    static BULLET_WIDTH = 7;
    static BULLET_HEIGHT = 12;

    static BULLET_ANIMATION_DATA = {

        id: "Animated Bullet Sprite",
        spriteSheet: document.getElementById("invaders_sprite_sheet"),

        takes: {

            "Default": {
                frameRatePerSec: 2,
                maxLoopCount: -1,
                startFrameIndex: 0,
                endFrameIndex: 1,
                boundingBoxDimensions: new Vector2(this.BULLET_WIDTH, this.BULLET_HEIGHT),
                frames: [
                    new Rect(67, 20, this.BULLET_WIDTH, this.BULLET_HEIGHT),
                    new Rect(74, 20, this.BULLET_WIDTH, this.BULLET_HEIGHT)
                ]
            },
        }
    };

    // Player Sprite position on Sprite Sheet
    static PLAYER_X = 62;
    static PLAYER_Y = 0;
    static PLAYER_WIDTH = 22;
    static PLAYER_HEIGHT = 16;

    // Barrier Sprite position on Sprite Sheet
    static BARRIER_X = 84;
    static BARRIER_Y = 8;
    static BARRIER_HEIGHT = 24;
    static BARRIER_WIDTH = 36;
}

class GameData {

    // Speed variables
    static PLAYER_SPEED = 0.2;
    static BULLET_SPEED = 0.25;

    // Measured in milliseconds
    static FIRE_INTERVAL = 750;
    static ENEMY_MOVE_INTERVAL = 500;

    // Audio cue array
    static AUDIO_CUE_ARRAY = [
        new AudioCue("sound_shoot", AudioType.Weapon, 1, 1, 0, false),
        new AudioCue("sound_bading", AudioType.Explosion, 1, 1, 0, false)
    ];
}