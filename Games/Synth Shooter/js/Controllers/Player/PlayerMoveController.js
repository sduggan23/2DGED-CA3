/**
 * Moves the parent sprite based on keyboard input and detect collisions against platforms, pickups etc.
 * 
 * @author Niall McGuinness
 * @version 1.0
 * @class PlayerMoveController
 */
class PlayerMoveController {

    constructor(
        notificationCenter,
        keyboardManager,
        objectManager,
        moveKeys,
        runVelocity,
        jumpVelocity
    ) {
        this.notificationCenter = notificationCenter;
        this.keyboardManager = keyboardManager;
        this.objectManager = objectManager;

        this.moveKeys = moveKeys;
        this.runVelocity = runVelocity;
        this.jumpVelocity = jumpVelocity;
    }

    update(gameTime, parent) {

        this.applyForces(gameTime, parent);
        this.handleInput(gameTime, parent);
        this.checkCollisions(parent);
        this.applyInput(parent);
    }

    applyForces(gameTime, parent) {

        // Apply basic physic forces to the player sprite

        parent.body.applyGravity(gameTime);

        if (parent.body.onGround) {
            
            parent.body.applyFriction(gameTime);
        }
    }

    handleInput(gameTime, parent) {

        this.handleMove(gameTime, parent);
        this.handleJump(gameTime, parent);
                this.handleJump(gameTime, parent);
    }

    handleMove(gameTime, parent) {

        // If the move left key is pressed
        if (this.keyboardManager.isKeyDown(this.moveKeys[0])) {

            // Add velocity to begin moving player left
            parent.body.addVelocityX(-this.runVelocity * gameTime.elapsedTimeInMs);

            // Update the player's animation
            parent.artist.setTake("Run Left");
        }

        // If the move right key is pressed
        else if (this.keyboardManager.isKeyDown(this.moveKeys[1])) {

            // Add velocity to begin moving the player right
            parent.body.addVelocityX(this.runVelocity * gameTime.elapsedTimeInMs);

            // Update the player's animation
            parent.artist.setTake("Run Right");
        }

        // If the move right key is pressed
        else
        {
            // Update the player's animation
            parent.artist.setTake("Idle");
        }
    }

    // UPDATE JUMP 
    handleJump(gameTime, parent) {

        // If the player is already jumping, or if the player is
        // not on the ground, then don't allow the player to jump
        if (parent.body.jumping || !parent.body.onGround) return;

        // If the jump key is pressed
        if (this.keyboardManager.isKeyDown(this.moveKeys[2])) {

            // Update body variables
            parent.body.jumping = true;
            parent.body.onGround = false;

            // Apply velocity to begin moving the player up
            // This gives the effect of jumping 
            parent.body.setVelocityY(-this.jumpVelocity * gameTime.elapsedTimeInMs);

            // Update the player's animation
            // parent.artist.setTake("Jump");

            // Create a jump sound notification
            notificationCenter.notify(
                new Notification(
                    NotificationType.Sound,
                    NotificationAction.Play,
                    ["jump"]
                )
            );
        }
    }

    checkCollisions(parent) {

        parent.body.onGround = false;

        this.handlePlatformCollision(parent);
        this.handlePickupCollision(parent);
        this.handleEnemyCollision(parent);
        this.handleLevelCompleteCollision(parent);
    }

    handlePlatformCollision(parent) {

        // Get a list of all the platform sprites that are stored
        // within the object manager
        const platforms = this.objectManager.get(ActorType.Platform);

        // If platforms is null, exit the function
        if (platforms == null) return;

        // Loop through the list of platform sprites        
        for (let i = 0; i < platforms.length; i++) {

            // Store a reference to the current pickup sprite
            const platform = platforms[i];

            let collisionLocationType = Collision.GetCollisionLocationType(
                parent,
                platform
            );

            // If the player has ran into a platform that is to the
            // left or to the right of them
            if (
                collisionLocationType === CollisionLocationType.Left ||
                collisionLocationType === CollisionLocationType.Right
            ) {
                // Reduce their horizontal velocity to 0, to stop them
                // from moving
                parent.body.setVelocityX(0);
            }

            // If the player has landed on a platform
            if (collisionLocationType === CollisionLocationType.Bottom) {

                // Update variables to represent their new state
                parent.body.onGround = true;
                parent.body.jumping = false;

                parent.body.setVelocityY(0);
            }

            // If the player has collided with a platform that is above
            // them
            if (collisionLocationType === CollisionLocationType.Top) {

                // Update their velocity to move them downwards.
                // This will create a bounce effect, where it will look 
                // like the player is bouncing off the platform above
                parent.body.setVelocityY(this.jumpVelocity);
            }
            
        }
    }

    handlePickupCollision(parent) {

        // Get a list of all the pickup sprites that are stored
        // within the object manager
        const pickups = this.objectManager.get(ActorType.Pickup);

        // If pickups is null, exit the function
        if (pickups == null) return;

        // Loop through the list of pickup sprites
        for (let i = 0; i < pickups.length; i++) {

            // Store a reference to the current pickup sprite
            const pickup = pickups[i];

            // We can use a simple collision check here to check if the player has collided
            // with the pickup sprite
            if (parent.transform.boundingBox.intersects(pickup.transform.boundingBox)) {

                // Create a notification that will ultimately remove
                // the pickup sprite
                notificationCenter.notify(
                    new Notification(
                        NotificationType.Sprite,
                        NotificationAction.Remove,
                        [pickup]
                    )
                );

                notificationCenter.notify(
                    new Notification(
                        NotificationType.Sound,
                        NotificationAction.Play,
                        ["collectable"]
                    )
                );
                
                notificationCenter.notify(
                    new Notification(
                        NotificationType.Sprite,
                        NotificationAction.RemoveFirstBy,
                        [ActorType.Platform, platform =>  platform.transform.translation.y == 0]
                    )
                );
            }
        }
    }
    

    handleEnemyCollision(parent) {

        // Get a list of all the enemy sprites that are stored within
        // the object mananger
        const enemies = this.objectManager.get(ActorType.Enemy);

        // If enemies is null, exit the function
        if (enemies == null) return;

        // Loop through the list of enemy sprites
        for (let i = 0; i < enemies.length; i++) {

            // Store a reference to the current enemy sprite
            const enemy = enemies[i];

            if (parent.transform.boundingBox.intersects(enemy.transform.boundingBox)) {

                notificationCenter.notify(
                    new Notification(
                        NotificationType.Sound,
                        NotificationAction.Play,
                        ["game_over"]
                    )
                );


                notificationCenter.notify(
                  new Notification(
                    NotificationType.Sprite,
                    NotificationAction.Remove,
                    [parent]
                  )
                );

                $('#gameover_menu').show();
                $('#gameover_menu').removeClass('hidden');

                                
                notificationCenter.notify(
                    new Notification(
                        NotificationType.Sound,
                        NotificationAction.Pause,
                        ["background"]
                    )
                );
            }
        }
    }

    handleLevelCompleteCollision(parent) {

        // Get a list of all the pickup sprites that are stored
        // within the object manager
        const triggers = this.objectManager.get(ActorType.Interactable);

        // If pickups is null, exit the function
        if (triggers == null) return;

        // Loop through the list of pickup sprites
        for (let i = 0; i < triggers.length; i++) {

            // Store a reference to the current pickup sprite
            const trigger = triggers[i];

            if (parent.transform.boundingBox.intersects(trigger.transform.boundingBox)) {

                // If the player has collided with a pickup, do something...

                // Create a notification that will ultimately remove
                // the pickup sprite
                notificationCenter.notify(
                    new Notification(
                        NotificationType.Sprite,
                        NotificationAction.Remove,
                        [trigger]
                    )
                );

                notificationCenter.notify(
                    new Notification(
                        NotificationType.Sound,
                        NotificationAction.Play,
                        ["level_complete"]
                    )
                );

                $('#exit_menu').show();
                $('#exit_menu').removeClass('hidden');

            }
        }
    }
    

    applyInput(parent) {

        // If the x velocity value is very small
        if (Math.abs(parent.body.velocityX) <= Body.MIN_SPEED) {

            // Then set the velocity to zero
            parent.body.setVelocityX(0);
        }

        // If the y velocity value is very small
        if (Math.abs(parent.body.velocityY) <= Body.MIN_SPEED) {

            // Then set the velocity to zero
            parent.body.setVelocityY(0);
        }

        parent.transform.translateBy(
            new Vector2(
                parent.body.velocityX,
                parent.body.velocityY
            )
        );
    }

    equals(other) {

        // TO DO...
        throw "Not Yet Implemented";
    }

    toString() {

        // TO DO...
        throw "Not Yet Implemented";
    }

    clone() {

        // TO DO...
        throw "Not Yet Implemented";
    }
}