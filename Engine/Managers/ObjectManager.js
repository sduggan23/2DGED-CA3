/**
 * This class is responsible for storing and updating all the sprites within the game.
 * @author Niall McGuinness
 * @version 1.0
 * @class ObjectManager
 */
class ObjectManager {

    get sprites() {
        return this._sprites;
    }

    constructor(id, notificationCenter, context, statusType, cameraManager) {
        this.id = id;

        this.notificationCenter = notificationCenter;
        this.context = context;

        this.statusType = statusType;
        this.cameraManager = cameraManager;

        this._sprites = [];

        this.registerForNotifications();
    }

    // Note that this.sprites is a 2D array of sprites.

    // To understand 2D arrays, first consider 1D arrays. A 1D array is a typical array
    // that you would have used in first year. Each cell in a 1D array can contain a value.
    // For example, the array [1, 2, 3, 4, 5] is a traditional '1D' array.

    // To create a 2D array, all we need to do is replace the values in a 1D array with arrays.
    // So, instead of just storing numbers [1, 2, 3], or strings ["James", "Farrell"], a 2D array
    // stores arrays [[], [], []].

    // The benefit of 2D arrays, is that each individual inner array can be of different length,
    // and can contain different values.

    // In our case, we are creating a 2D array which contains sprites. We could just use a 1D array
    // and simply place all of our sprites into one long array, but this would not be practical. We
    // want to group our sprites together based on their ActorType. This allows us to then draw our
    // sprites in a particular order. For example, we may wish to draw any background sprites first,
    // before we draw our enemies and player. If we did this operation in reverse (draw the enemies
    // and players before drawing our background), then we would not be able to see our enemy or
    // player sprites.

    // As such, we split our sprites up into sub-arrays based on their ActorType. We then use this
    // categorisation of sprites to draw them in the order we choose.

    // Thus, our 2D array will contain an array of arrays. Each 'sub-array' will be an array of
    // sprites that all belong to one ActorType. In our case, we will have a Background sub-array,
    // a NPC sub-array, a Player sub-array, and a Projectile sub-array.

    // e.g. Array[0] is an array of sprites that have the 'Background' ActorType
    //      Array[1] is an array of sprites that have the 'NPC' ActorType
    //      and so on...

    registerForNotifications() {

        // When a 'sprite' event/notification fires, call the 'handleSpriteNotification' function of 'this' object
        this.notificationCenter.register(
            NotificationType.Sprite,
            this,
            this.handleSpriteNotification
        );

        // When a 'menu' event fires, call the 'handleMenuNotification' function of 'this' object
        this.notificationCenter.register(
            NotificationType.Menu,
            this,
            this.handleMenuNotification
        );
    }

    handleSpriteNotification(notification) {

        switch (notification.notificationAction) {

            case NotificationAction.Add:

                this.add(notification.notificationArguments[0]);
                break;

            case NotificationAction.Remove:

                this.remove(notification.notificationArguments[0]);
                break;

            case NotificationAction.RemoveFirst:

                this.removeFirst(notification.notificationArguments[0]);
                break;

            case NotificationAction.RemoveFirstBy:

                this.removeFirstBy(
                    notification.notificationArguments[0],
                    notification.notificationArguments[1]
                );

                break;

            case NotificationAction.RemoveAllBy:

                this.removeAllBy(
                    notification.notificationArguments[0],
                    notification.notificationArguments[1]
                );

                break;

            case NotificationAction.RemoveAllByType:

                this.removeAllByType(notification.notificationArguments[0]);
                break;
        }
    }

    handleMenuNotification(notification) {

        switch (notification.notificationAction) {

            case NotificationAction.ShowMenuChanged:

                this.statusType = notification.notificationArguments[0];
                break;
        }
    }

    /**
     * Adds a sprite to the sprites array.
     * 
     * @param {Sprite} sprite 
     */
    add(sprite) {

        // Do we have a row for this ActorType?
        if (!this.sprites[sprite.actorType]) {

            // If not, initialize a row for this ActorType
            this.sprites[sprite.actorType] = [];
        }

        // Add this sprite to the appropriate array
        this.sprites[sprite.actorType].push(sprite);
    }

    /**
     * Removes a sprite from the sprites array.
     * 
     * @param {Sprite} sprite
     * @returns {Boolean} True if removed, otherwise false
     */
    remove(sprite) {

        // Remember, this.sprites is a 2D array.
        // As such, we must first check to see if the relevant sub-array exists.
        if (this.sprites[sprite.actorType]) {

            // Check if the sprite exists in the array
            let index = this.sprites[sprite.actorType].indexOf(sprite);

            // If the sprite is found
            if (index != -1) {

                // Remove the sprite from the array
                this.sprites[sprite.actorType].splice(index, 1);

                // Indicate that the sprite was successfully removed from
                // the this.sprites array
                return true;
            }

            // Indicate that the operation was unsuccessful

            // In this case, the operation was unsuccessful because the
            // provided sprite didn't exist in the sprite's ActorType
            // sub-array
            return false;
        }
        else {

            // Indicate that the operation was unsuccessful

            // In this case, the operation was unsuccessful because a related
            // sub-array for the provided sprite's ActorType doesn't exist in
            // the this.sprites array.
            return false;
        }
    }

    find(actorType, predicate) {

        // Get the index of the sprite in the sprites array
        const index = this.sprites[actorType].findIndex(predicate);

        // If an index has been found
        if (index != -1) {

            // Return the sprite at the index
            return this.sprites[actorType][index];
        }

        // Otherwise, return -1
        // This value (-1) inidicates that no sprite was found
        return -1;
    }

    findIndex(actorType, predicate) {

        if (this.sprites[actorType]) {

            return this.sprites[actorType].findIndex(predicate);
        }

        return -1;
    }

    findIndices(actorType, predicate) {

        if (this.sprites[actorType]) {

            let index = 0;
            let foundIndices = [];

            for (let i = 0; i < this.sprites[actorType].length; i++) {

                if (predicate(this.sprites[actorType][i])) {

                    foundIndices[index] = i;
                    index++;
                }
            }

            return (foundIndices.length != 0) ? foundIndices : null;
        }

        return null;
    }

    removeFirst(sprite) {

        if (this.sprites[sprite.actorType]) {

            let index = this.sprites[sprite.actorType].indexOf(sprite);

            if (index != -1) {

                this.sprites[sprite.actorType].splice(index, 1);
            }
        }
    }

    removeFirstBy(actorType, predicate) {

        if (this.sprites[actorType]) {

            this.sprites[actorType].splice(this.findIndex(actorType, predicate), 1);
        }
    }

    removeAllBy(actorType, predicate) {

        const indices = this.findIndices(actorType, predicate);

        for (let i = indices.length - 1; i >= 0; i--) {

            this.sprites[actorType].splice(this.sprites[actorType][i], 1);
        }
    }

    removeAllByType(actorType) {

        if (this.sprites[actorType]) {

            this.sprites[actorType].splice(0, this.sprites[actorType].length);
        }
    }

    get(actorType) {

        if (this.sprites[actorType]) {

            return this.sprites[actorType];
        }
    }

    sort(actorType, compareFunction) {

        if (this.sprites[actorType]) {

            this.sprites[actorType].sort(compareFunction);
        }
    }

    clear() {

        // why not just set length = 0 or sprites = []?
        // See https://www.tutorialspoint.com/in-javascript-how-to-empty-an-array

        // Loop through each of the sub-arrays in the parent 
        // sprites array
        for (let i = 0; i < this.sprites.length; i++) {

            // If we have a valid sub-array at this index
            if (this.sprites[i] != undefined) {

                // Remove all of the elements in the sub-array
                this.sprites[i].splice(0, this.sprites[i].length);
            }
        }

        // Remove each empty sub-array from the parent array
        this.sprites.splice(0, this.sprites.length);
    }

    update(gameTime) {

        // If update is enabled for the object manager
        if ((this.statusType & StatusType.Drawn) != 0) {

            // Loop through each ActorType
            for (let key in this.sprites) {

                // Loop through each Sprite of ActorType
                for (let sprite of this.sprites[key]) {

                    // Update each sprite
                    sprite.update(gameTime, this.cameraManager.activeCamera);
                }
            }
        }
    }

    draw(gameTime) {

        // If draw is enabled for the object manager
        if ((this.statusType & StatusType.Drawn) != 0) {

            // Loop through each ActorType
            for (let key in this.sprites) {

                // Loop through each Sprite of ActorType
                for (let sprite of this.sprites[key]) {

                    // If the sprite is a background sprite OR if it is a HUD sprite OR if it is
                    // inside the view of the camera, then draw it
                    if (
                        sprite.actorType == ActorType.Background ||
                        sprite.actorType == ActorType.HUD ||
                        sprite.transform.boundingBox.intersects(
                            this.cameraManager.activeCamera.transform.boundingBox
                        )
                    ) {
                        sprite.draw(gameTime, this.cameraManager.activeCamera);
                    }
                }
            }
        }
    }
}