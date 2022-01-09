class MyUIManager extends UIManager {

    constructor(id, notificationCenter, objectManager, mouseManager) {

        super(id);

        this.notificationCenter = notificationCenter;
        this.objectManager = objectManager;
        this.mouseManager = mouseManager;

        this.registerForNotifications();
    }

    registerForNotifications() {

        // When a 'ui' event fires, call the 'handleUINotification' function 
        // of 'this' object
        this.notificationCenter.register(
            NotificationType.UI,
            this,
            this.handleUINotification
        );
    }

    handleUINotification(notification) {

        switch (notification.notificationAction) {

            case NotificationAction.UpdateHealthBar:

                this.updateHealthBar(notification.notificationArguments[0]);
                break;

            default:
                break;
        }
    }

    updateHealthBar(health) {

        // TO DO: Your code here...
    }

    /**
     * 
     * @param {GameTime} gameTime 
     */
    update(gameTime) {

        if (this.mouseManager.clickPosition) {

            // Get a list of all the HUD sprites that are stored
            // within the object manager
            const hudSprites = objectManager.get(ActorType.HUD);

            // Loop through the list of HUD sprites
            for (let i = 0; i < hudSprites.length; i++) {

                // Store a reference to the current HUD sprite
                const hudSprite = hudSprites[i];

                // Create a new Rect object, with a width of 1 and height of 1
                // to represent the pixel at which the mouse was clicked
                const mouseClickPosition = new Rect(
                    this.mouseManager.clickPosition.x,
                    this.mouseManager.clickPosition.y,
                    1, // Width
                    1 // Height
                );

                // Use the rect object to check if the mouse click took place
                // inside of the hudSprite
                if (hudSprite.transform.boundingBox.contains(mouseClickPosition)) {

                    if (hudSprite.id === "Sound on Button") {

                        console.log("You clicked the sound on button!");

                        notificationCenter.notify(
                            new Notification(
                                NotificationType.Sound,
                                NotificationAction.Play,
                                ["background"]
                            )
                        );
                    }

                    if (hudSprite.id === "Sound off Button") {

                        console.log("You clicked the sound off button!");

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
        }
    }
}