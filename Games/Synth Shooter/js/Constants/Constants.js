
class GameData {
  static AUDIO_CUE_ARRAY = [
    new AudioCue("background", AudioType.Background, 1, 1, 0, true),
    new AudioCue("jump", AudioType.Move, 1, 1, 0, false),
    new AudioCue("boing", AudioType.All, 1, 1, 0, false),
    new AudioCue("game_over", AudioType.WinLose, 1, 1, 0, false),
  ];

  static BACKGROUND_DIMENSIONS = new Vector2(250, 190);

  static BACKGROUND_DATA = [

    {
      id: "Background 1",
      spriteSheet: document.getElementById("synth_shooter_background_1"),
      sourcePosition: Vector2.Zero,
      sourceDimensions: this.BACKGROUND_DIMENSIONS,
      translation: Vector2.Zero,
      rotation: 0,
      scale: Vector2.One,
      origin: Vector2.Zero,
      actorType: ActorType.Background,
      collisionType: CollisionType.NotCollidable,
      layerDepth: 0,
      scrollSpeedMultiplier: 0.2
    },

    {
      id: "Background 2",
      spriteSheet: document.getElementById("synth_shooter_background_2"),
      sourcePosition: Vector2.Zero,
      sourceDimensions: this.BACKGROUND_DIMENSIONS,
      translation: Vector2.Zero,
      rotation: 0,
      scale: Vector2.One,
      origin: Vector2.Zero,
      actorType: ActorType.Background,
      layerDepth: 0.1,
      scrollSpeedMultiplier: 0.15
    },

    {
      id: "Background 3",
      spriteSheet: document.getElementById("synth_shooter_background_3"),
      sourcePosition: new Vector2(0, -32),
      sourceDimensions: this.BACKGROUND_DIMENSIONS,
      translation: Vector2.Zero,
      rotation: 0,
      scale: Vector2.One,
      origin: Vector2.Zero,
      actorType: ActorType.Background,
      layerDepth: 0.15,
      scrollSpeedMultiplier: 0.1
    }
  ];

  static PLATFORM_DATA = {
    id: "Platform",
    spriteSheet: document.getElementById("cyber_tileset"),
    sourcePosition: new Vector2(0, 16),
    sourceDimensions: new Vector2(160, 96),
    rotation: 0,
    scale: Vector2.One,
    origin: Vector2.Zero,
    actorType: ActorType.Platform,
    collisionType: CollisionType.Collidable,
    layerDepth: 0,
    explodeBoundingBoxInPixels: -6,

    // We have just one platform sprite, so it makes sense to
    // store a list of positions at which we want to place that
    // sprite in our game world. Mess around with these values
    // by either adding or removing positions from our array, or
    // by editing the x, y values of each position. Check out the 
    // results by refreshing the web page!
    translationArray: [

      /****************** Screen 1 *******************/

      // Floor
      new Vector2(0, 400),
      new Vector2(160, 400),
      new Vector2(320, 400),
      new Vector2(480, 400),
      new Vector2(640, 400),
      new Vector2(800, 400)

      /****************** Screen 2 *******************/

      // // Middle Low
      // new Vector2(200, 370),
      // new Vector2(250, 370),
      // new Vector2(300, 370),
      // new Vector2(350, 370),

      // // Middle High
      // new Vector2(250, 240),
      // new Vector2(300, 240),

      // // Middle Right
      // new Vector2(450, 300),
      // new Vector2(500, 300),
      // new Vector2(550, 300),
      // new Vector2(600, 300),
      // new Vector2(0, 380),
      // new Vector2(160, 380),
      // new Vector2(320, 380),
    ]
  };

  static COLLECTIBLES_ANIMATION_DATA = {
    id: "Collectibles Animation Data",
    spriteSheet: document.getElementById("snailbait_sprite_sheet"),

    // List of animations
    takes: {

      // Animation 1
      "Sapphire Glint": {

        frameRatePerSec: 6,

        // -1 = Loop forever
        //  0 = Run once (no loop)
        //  N = Loop N times
        maxLoopCount: -1,

        startFrameIndex: 0,
        endFrameIndex: 4,

        boundingBoxDimensions: new Vector2(30, 35),

        frames: [
          new Rect(185, 138, 30, 35), // Frame 1
          new Rect(220, 138, 30, 35), // Frame 2
          new Rect(258, 138, 30, 35), // Frame 3
          new Rect(294, 138, 30, 35), // Frame 4
          new Rect(331, 138, 30, 35)  // Frame 5
        ]
      },

      // Animation 2
      "Ruby Glint": {

        frameRatePerSec: 6,

        // -1 = Loop forever
        //  0 = Run once (no loop)
        //  N = Loop N times
        maxLoopCount: -1,

        startFrameIndex: 0,
        endFrameIndex: 4,

        boundingBoxDimensions: new Vector2(30, 35),

        frames: [
          new Rect(3, 138, 30, 35),
          new Rect(39, 138, 30, 35),
          new Rect(76, 138, 30, 35),
          new Rect(112, 138, 30, 35),
          new Rect(148, 138, 30, 35)
        ]
      },

      // Animation 3
      "Gold Glint": {

        frameRatePerSec: 6,

        // -1 = Loop forever
        //  0 = Run once (no loop)
        //  N = Loop N times
        maxLoopCount: -1,

        startFrameIndex: 0,
        endFrameIndex: 2,

        boundingBoxDimensions: new Vector2(30, 30),

        frames: [
          new Rect(65, 540, 30, 30),
          new Rect(96, 540, 30, 30),
          new Rect(128, 540, 30, 30)
        ]
      }
    }
  };

  static RUNNER_START_POSITION = new Vector2(80, 250);
  static RUNNER_MOVE_KEYS = [Keys.A, Keys.D, Keys.Space];
  static RUNNER_RUN_VELOCITY = 0.1;
  static RUNNER_JUMP_VELOCITY = 0.5;

  static RUNNER_ANIMATION_DATA = {

    id: "Runner Animation Data",
    spriteSheet: document.getElementById("rachel_sprite_sheet"),

    // Animations
    takes: {

      // Animation 1
      "Idle": {

        frameRatePerSec: 2,

        // -1 = Loop forever
        //  0 = Run once (no loop)
        //  N = Loop N times
        maxLoopCount: -1,

        startFrameIndex: 0,
        endFrameIndex: 3,

        // Notice that I chose the largest of all the widths taken from the frames
        // array below
        boundingBoxDimensions: new Vector2(49, 54),

        frames: [

          // This list of rects just represent the positions
          // and dimension of each individual animation frame
          // on the sprite sheet
          new Rect(304, 16, 21, 46),    // Animation frame 1
          new Rect(378, 12, 20, 50),    // Animation frame 2
          new Rect(443, 11, 20, 50),    // Animation frame 3
          new Rect(507, 14, 20, 50),    // Animation frame 4
        ]
      },

      // Animation 2
      "Run Left": {

        frameRatePerSec: 12,

        // -1 = Loop forever
        //  0 = Run once (no loop)
        //  N = Loop N times
        maxLoopCount: -1,

        startFrameIndex: 0,
        endFrameIndex: 7,

        // Notice that I chose the largest of all the widths taken from the frames
        // array below
        boundingBoxDimensions: new Vector2(49, 54),

        frames: [
          new Rect(10, 149, 26, 48),     // Animation frame 1
          new Rect(76, 149, 36, 48),    // Animation frame 2
          new Rect(140, 149, 47, 46),   // Animation frame 3
          new Rect(206, 149, 41, 51),   // Animation frame 4
          new Rect(10, 213, 31, 48),   // Animation frame 5
          new Rect(76, 213, 36, 49),   // Animation frame 6
          new Rect(139, 213, 47, 46),   // Animation frame 7
          new Rect(205, 213, 42, 51)   // Animation frame 8
        ]
      },

      // Animation 3
      "Run Right": {

        frameRatePerSec: 12,

        // -1 = Loop forever
        //  0 = Run once (no loop)
        //  N = Loop N times
        maxLoopCount: -1,

        startFrameIndex: 0,
        endFrameIndex: 7,

        // Notice that I chose the largest of all the widths taken from the frames
        // array below
        boundingBoxDimensions: new Vector2(49, 54),

        frames: [

          // This list of rects just represent the positions
          // and dimension of each individual animation frame
          // on the sprite sheet

          new Rect(10, 16, 41, 51),   // Animation frame 1
          new Rect(71, 16, 47, 46),   // Animation frame 2
          new Rect(145, 16, 36, 48),   // Animation frame 3
          new Rect(221, 16, 26, 48),   // Animation frame 4
          new Rect(10, 80, 42, 51),   // Animation frame 5
          new Rect(71, 80, 47, 46),   // Animation frame 6
          new Rect(145, 80, 36, 49),   // Animation frame 7
          new Rect(216, 80, 31, 48)    // Animation frame 8
        ]
      },
    }
  };

  // static RUNNER_ANIMATION_DATA = {

  //   id: "Runner Animation Data",
  //   spriteSheet: document.getElementById("kat_sprite_sheet"),

  //   // Animations
  //   takes: {

  //     // Animation 1
  //     "Idle": {

  //       frameRatePerSec: 2,

  //       // -1 = Loop forever
  //       //  0 = Run once (no loop)
  //       //  N = Loop N times
  //       maxLoopCount: -1,

  //       startFrameIndex: 0,
  //       endFrameIndex: 0,

  //       // Notice that I chose the largest of all the widths taken from the frames
  //       // array below
  //       boundingBoxDimensions: new Vector2(49, 34),

  //       frames: [

  //         // This list of rects just represent the positions
  //         // and dimension of each individual animation frame
  //         // on the sprite sheet
  //         new Rect(194, 0, 38, 30),    // Animation frame 2
  //       ]
  //     },

  //     // Animation 2
  //     "Run Left": {

  //       frameRatePerSec: 12,

  //       // -1 = Loop forever
  //       //  0 = Run once (no loop)
  //       //  N = Loop N times
  //       maxLoopCount: -1,

  //       startFrameIndex: 0,
  //       endFrameIndex: 7,

  //       // Notice that I chose the largest of all the widths taken from the frames
  //       // array below
  //       boundingBoxDimensions: new Vector2(49, 34),

  //       frames: [

  //         new Rect(190, 36, 36, 28),   // Animation frame 1
  //         new Rect(234, 34, 36, 30),   // Animation frame 2
  //         new Rect(0, 76, 40, 24),   // Animation frame 3
  //         new Rect(48, 76, 40, 24),   // Animation frame 4
  //         new Rect(94, 74, 49, 54),   // Animation frame 5
  //         new Rect(138, 72, 40, 28),    // Animation frame 6
  //         new Rect(186, 68, 38, 30),    // Animation frame 7
  //         new Rect(230, 72, 38, 26)      // Animation frame 8
  //       ]
  //     },

  //     // Animation 3
  //     "Run Right": {

  //       frameRatePerSec: 12,

  //       // -1 = Loop forever
  //       //  0 = Run once (no loop)
  //       //  N = Loop N times
  //       maxLoopCount: -1,

  //       startFrameIndex: 0,
  //       endFrameIndex: 7,

  //       // Notice that I chose the largest of all the widths taken from the frames
  //       // array below
  //       boundingBoxDimensions: new Vector2(49, 34),

  //       frames: [

  //         // This list of rects just represent the positions
  //         // and dimension of each individual animation frame
  //         // on the sprite sheet

  //         new Rect(190, 36, 36, 28),   // Animation frame 1
  //         new Rect(234, 34, 36, 30),   // Animation frame 2
  //         new Rect(0, 76, 40, 24),   // Animation frame 3
  //         new Rect(48, 76, 40, 24),   // Animation frame 4
  //         new Rect(94, 74, 49, 54),   // Animation frame 5
  //         new Rect(138, 72, 40, 28),    // Animation frame 6
  //         new Rect(186, 68, 38, 30),    // Animation frame 7
  //         new Rect(230, 72, 38, 26)      // Animation frame 8
  //       ]
  //     },
  //   }
  // };

  static ENEMY_ANIMATION_DATA = {

    id: "Enemy Animation Data",
    spriteSheet: document.getElementById("drone_sprite_sheet"),
    
    // Animations
    takes: {

      // Animation 1
      "Drone Fly": {

        frameRatePerSec: 2,
        
        // -1 = Loop forever
        //  0 = Run once (no loop)
        //  N = Loop N times
        maxLoopCount: -1,

        startFrameIndex: 0,
        endFrameIndex: 8,

        boundingBoxDimensions: new Vector2(35, 50),

        frames: [
          new Rect(16, 4, 34, 48),
          new Rect(77, 4, 29, 48),
          new Rect(150, 3, 31, 48),
          new Rect(226, 4, 29, 48),
          new Rect(221, 74, 34, 48),
          new Rect(226, 4, 29, 48),
          new Rect(150, 3, 31, 48),
          new Rect(77, 4, 29, 48),
          new Rect(16, 4, 34, 48)



        ]
      }
    }
  };
}

const FontType = {
  InformationSmall: "12px Arial",
  InformationMedium: "18px Arial",
  InformationLarge: "24px Arial"
};