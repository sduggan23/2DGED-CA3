class MyMenuManager extends MenuManager {

    constructor(id, notificationCenter, keyboardManager) {

        super(id);

        this.notificationCenter = notificationCenter;
        this.keyboardManager = keyboardManager;

        this.initialize();

        // Register this object for notifications
        this.registerForNotifications();
    }

    registerForNotifications() {

        // When a 'menu' event fires, call the 'handleMenuNotification' function of 'this' object
        this.notificationCenter.register(
            NotificationType.Menu,
            this,
            this.handleMenuNotification
        );
    }

    handleMenuNotification(notification) {

        switch (notification.notificationAction) {

            case NotificationAction.ShowMenuChanged:

                this.showMenu(notification.notificationArguments[0]);
                break;

            default:
                break;
        }
    }

    showMenu(statusType) {

        if (statusType != 0) {

            $('#main_menu').hide();
        } else {

            $('#main_menu').show();
        }
    }

    initialize() {

        // Hide the exit menu
        $('#exit_menu').hide();
        $('#exit_menu').addClass('hidden');

        // Hide the control menu
        $('#control_menu').hide();
        $('#control_menu').addClass('hidden');

        // Hide the game over menu
        $('#gameover_menu').hide();
        $('#gameover_menu').addClass('hidden');

        // If the play button is clicked
        $('.play').click(function () {

            // Hide the menu
            $('#main_menu').hide();
            $('#gameover_menu').hide();

            // Send a notification to update and draw the game
            notificationCenter.notify(
                new Notification(
                    NotificationType.Menu,
                    NotificationAction.ShowMenuChanged,
                    [StatusType.Updated | StatusType.Drawn]
                )
            );

            // Play the background audio
            notificationCenter.notify(
                new Notification(
                    NotificationType.Sound,
                    NotificationAction.Play,
                    ["background"]
                )
            );
        });

        // If the exit button is clicked
        $('.exit').click(function () {

            // Show exit menu
            $('#exit_menu').show();
            $('#exit_menu').removeClass('hidden');


        });

        // If the control button is clicked
        $('.control').click(function () {

            // Show control menu
            $('#control_menu').show();
            $('#control_menu').removeClass('hidden');
        });
    }

    update(gameTime) {

    }
}