
class GameData {
  static AUDIO_CUE_ARRAY = [
    new AudioCue("background", AudioType.Background, 1, 1, 0, true),
    new AudioCue("jump", AudioType.Move, 1, 1, 0, false),
    new AudioCue("collectable", AudioType.All, 1, 1, 0, false),
    new AudioCue("game_over", AudioType.WinLose, 1, 1, 0, false),
  ];

  static BACKGROUND_DIMENSIONS = new Vector2(250, 190);
  static CAMERA_SPEED = 1.75;

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

  static GROUND_PLATFORM_DATA = {
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

      /****************** Ground *******************/

      new Vector2(0, 400),
      new Vector2(160, 400),
      //new Vector2(320, 400),
      new Vector2(480, 400),
      new Vector2(640, 400), 
      //new Vector2(800, 400),
      //new Vector2(960, 400),

      // new Vector2(1120, 400),
      new Vector2(1280, 400),
      new Vector2(1440, 400),
      // new Vector2(1600, 400),
      new Vector2(1760, 400),
      //new Vector2(1920, 400),
      new Vector2(2080, 400),

      new Vector2(2240, 400),
      // new Vector2(2400, 400),
      new Vector2(2560, 400),
      //new Vector2(2720, 400),
      new Vector2(2880, 400),
      new Vector2(3040, 400),
      new Vector2(3200, 400),

      //new Vector2(3360, 400),
      //new Vector2(3520, 400),
      //new Vector2(3680, 400),
      //new Vector2(3840, 400),
      //new Vector2(4000, 400),
      //new Vector2(4160, 400),

      // new Vector2(4320, 400),
      // new Vector2(4480, 400),
      // new Vector2(4640, 400),
      // new Vector2(4800, 400),
      // new Vector2(4960, 400),
      // new Vector2(5120, 400),
      // new Vector2(5280, 400),

      // new Vector2(5600, 400),
      // new Vector2(5760, 400),
      // new Vector2(5920, 400),
      // new Vector2(6080, 400),
      // new Vector2(6240, 400),
      // new Vector2(6400, 400),
      // new Vector2(6560, 400)


    ]
    
  };

  static LARGE_BUILDING_PLATFORM_DATA = {
    id: "Platform",
    spriteSheet: document.getElementById("cyber_tileset"),
    sourcePosition: new Vector2(471, 16),
    sourceDimensions: new Vector2(137, 96),
    rotation: 0,
    scale: new Vector2(1.165, 1),
    origin: Vector2.Zero,
    actorType: ActorType.Platform,
    collisionType: CollisionType.Collidable,
    layerDepth: 0,
    explodeBoundingBoxInPixels: -6,

    translationArray: [

      /****************** Buildings *******************/

      // Left Edge
      new Vector2(-159, 400),
      new Vector2(-159, 350),
      new Vector2(-159, 300),
      new Vector2(-159, 250),
      new Vector2(-159, 200),
      new Vector2(-159, 150),
      new Vector2(-159, 100),

      new Vector2(-320, 400),
      new Vector2(-320, 350),
      new Vector2(-320, 300),
      new Vector2(-320, 250),
      new Vector2(-320, 200),
      new Vector2(-320, 150),
      new Vector2(-320, 100),

      new Vector2(-480, 400),
      new Vector2(-480, 350),
      new Vector2(-480, 300),
      new Vector2(-480, 250),
      new Vector2(-480, 200),
      new Vector2(-480, 150),
      new Vector2(-480, 100),

      new Vector2(-640, 400),
      new Vector2(-640, 350),
      new Vector2(-640, 300),
      new Vector2(-640, 250),
      new Vector2(-640, 200),
      new Vector2(-640, 150),
      new Vector2(-640, 100),

      // Platforms
       new Vector2(320, 375),

       new Vector2(640, 400),
       new Vector2(640, 350),

       new Vector2(960, 375),

       new Vector2(1920, 400),
       new Vector2(1920, 350),

       new Vector2(3200,400),
       new Vector2(3200,350),

       new Vector2(3360,400),
       new Vector2(3360,350),
       new Vector2(3360,300),

       new Vector2(3520,400),
       new Vector2(3520,350),
       new Vector2(3520,300),
       new Vector2(3520,250),

      //  new Vector2(3680,400),
      //  new Vector2(3680,350),
      //  new Vector2(3680,305),

       new Vector2(3840,400),
       new Vector2(3840,350),
       new Vector2(3840,300),
       new Vector2(3840,250),

       new Vector2(4000,400),
       new Vector2(4000,350),
       new Vector2(4000,300),

       new Vector2(4160,400),
       new Vector2(4160,350),

       new Vector2(4320, 400),

      //  new Vector2(4480,400),
      //  new Vector2(4480,350),

      //  new Vector2(4640,400),
      //  new Vector2(4640,350),
      //  new Vector2(4640,300),

      //  new Vector2(4800,400),
      //  new Vector2(4800,350),
      //  new Vector2(4800,300),
      //  new Vector2(4800,250),

      //  new Vector2(5120,400),
      //  new Vector2(5120,350),
      //  new Vector2(5120,300),
      //  new Vector2(5120,250),

      //  new Vector2(5280,400),
      //  new Vector2(5280,350),
      //  new Vector2(5280,300),

      //  new Vector2(5440,400),
      //  new Vector2(5440,350),

      //  new Vector2(5760, 400),
      //  new Vector2(5760, 350)


    ]
  };

  static PLATFORM_DATA = {
    id: "Platform",
    spriteSheet: document.getElementById("cyber_tileset"),
    sourcePosition: new Vector2(185, 80),
    sourceDimensions: new Vector2(85, 43),
    rotation: 0,
    scale: Vector2.One,
    origin: Vector2.Zero,
    actorType: ActorType.Platform,
    collisionType: CollisionType.Collidable,
    layerDepth: 0,
    explodeBoundingBoxInPixels: -6,

    translationArray: [

      new Vector2(240, 200),
      new Vector2(295, 200),
      new Vector2(350, 200),

      new Vector2(1365, 300),
      new Vector2(1410, 300),

      new Vector2(1495, 225),
      new Vector2(1545, 225),
      new Vector2(1600, 225),

      new Vector2(1785, 225),
      new Vector2(1830, 225),

      new Vector2(2165, 250),

      new Vector2(2305, 250),

      new Vector2(2445, 235),

      new Vector2(2585, 250),

      new Vector2(2780, 225),
      new Vector2(2835, 225),

      new Vector2(2975, 200),
      new Vector2(3030, 200),
      new Vector2(3085, 200)
    ]
    
  };

  static COLLECTIBLES_ANIMATION_DATA = {
    id: "Collectibles Animation Data",
    spriteSheet: document.getElementById("snailbait_sprite_sheet"),
    sourcePosition: new Vector2(10, 195),
    sourceDimensions: new Vector2(35, 22),
    rotation: 0,
    scale: Vector2.One,
    origin: Vector2.Zero,
    actorType: ActorType.Pickup,
    collisionType: CollisionType.Collidable,
    layerDepth: 0,
    explodeBoundingBoxInPixels: -6,

    translationArray: [
      new Vector2(320, 195),
      new Vector2(1410, 295),
      new Vector2(1830, 220),
      new Vector2(2325, 245),
      new Vector2(3050, 195)
      // new Vector2(4520, 350)
    ]
    
  };

    static LASER_GATE_DATA = {
    id: "Platform",
    spriteSheet: document.getElementById("laser_sprite_sheet"),
    sourcePosition: new Vector2(80, 0),
    sourceDimensions: new Vector2(35,200),
    rotation: 0,
    scale: new Vector2(1, 2),
    origin: Vector2.Zero,
    actorType: ActorType.Platform,
    collisionType: CollisionType.Collidable,
    layerDepth: 0,
    explodeBoundingBoxInPixels: -6,

    translationArray: [

      new Vector2(600, 0),
      new Vector2(1700, 0),
      new Vector2(2100, 0),
      new Vector2(3250, 0),
      new Vector2(3300, 0),
      
      
      

    ]
    
  };

  static RUNNER_START_POSITION = new Vector2(150, 350);
  static RUNNER_MOVE_KEYS = [Keys.A, Keys.D, Keys.Space];
  static RUNNER_RUN_VELOCITY = 0.1;
  static RUNNER_JUMP_VELOCITY = 0.4;
  static MAX_SPEED = 4;

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
        boundingBoxDimensions: new Vector2(49, 50),

        frames: [

          // This list of rects just represent the positions
          // and dimension of each individual animation frame
          // on the sprite sheet
          new Rect(304, 16, 21, 46),    // Animation frame 1
          new Rect(378, 12, 20, 50),    // Animation frame 2
          new Rect(443, 11, 20, 50),    // Animation frame 3
          new Rect(507, 14, 20, 50)    // Animation frame 4
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
      }
    }
  };

  static RUNNER2_START_POSITION = new Vector2(250, 170);
  static RUNNER2_MOVE_KEYS = [Keys.ArrowLeft, Keys.ArrowRight, Keys.ArrowUp];
  static RUNNER2_RUN_VELOCITY = 0.1;
  static RUNNER2_JUMP_VELOCITY = 0.6;
  static MAX_SPEED2 = 6;

  static RUNNER2_ANIMATION_DATA = {

    id: "Runner2 Animation Data",
    spriteSheet: document.getElementById("kat_sprite_sheet"),

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
        endFrameIndex: 4,

        // Notice that I chose the largest of all the widths taken from the frames
        // array below
        boundingBoxDimensions: new Vector2(38, 30),

        frames: [

          // This list of rects just represent the positions
          // and dimension of each individual animation frame
          // on the sprite sheet
          new Rect(152, 16, 38, 30),    // Animation frame 1
          new Rect(194, 16, 38, 30),
          new Rect(194, 16, 38, 30),
          new Rect(194, 16, 38, 30),
          new Rect(152, 16, 38, 30),
        ]
      },

      // Animation 2
      "Run Left": {

        frameRatePerSec: 8,

        // -1 = Loop forever
        //  0 = Run once (no loop)
        //  N = Loop N times
        maxLoopCount: -1,

        startFrameIndex: 0,
        endFrameIndex: 5,

        // Notice that I chose the largest of all the widths taken from the frames
        // array below
        boundingBoxDimensions: new Vector2(40, 30),

        frames: [
          new Rect(540, 92, 40, 24),    // Animation frame 1
          new Rect(491, 92, 40, 24),    // Animation frame 2
          new Rect(445, 90, 40, 26),    // Animation frame 3
          new Rect(401, 88, 40, 28),    // Animation frame 4
          new Rect(355, 84, 38, 30),    // Animation frame 5
          new Rect(311, 88, 38, 26)     // Animation frame 6
        ]
      },

      // Animation 3
      "Run Right": {

        frameRatePerSec: 8,

        // -1 = Loop forever
        //  0 = Run once (no loop)
        //  N = Loop N times
        maxLoopCount: -1,

        startFrameIndex: 0,
        endFrameIndex: 5,

        // Notice that I chose the largest of all the widths taken from the frames
        // array below
        boundingBoxDimensions: new Vector2(40, 34),

        frames: [

          // This list of rects just represent the positions
          // and dimension of each individual animation frame
          // on the sprite sheet

          new Rect(0, 92, 40, 24),   // Animation frame 1
          new Rect(48, 92, 40, 24),   // Animation frame 2
          new Rect(94, 90, 40, 26),    // Animation frame 3
          new Rect(138, 88, 40, 28),    // Animation frame 4
          new Rect(186, 84, 38, 30),    // Animation frame 5
          new Rect(230, 88, 38, 26)     // Animation frame 6
        ]
      }
    }
  };

  
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
  InformationMedium: "18px Audiowide",
  InformationLarge: "24px Arial"
};