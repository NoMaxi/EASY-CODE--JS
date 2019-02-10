class NotificationsUI {
    constructor() {
        this.notificationContainer = document.querySelector('.news-wrap .row');
    }

    /**
     * adds the notification to the view
     * @param {String} message
     */
    addNotification(message) {
        const notificationTemplate = NotificationsUI.generateNotificationTemplate(message);
        this.notificationContainer.insertAdjacentHTML('afterbegin', notificationTemplate);
    }

    // method that removes the notification from the view
    removeNotification() {
        const currentNotification = document.querySelector('.card-notification');
        if (currentNotification) this.notificationContainer.removeChild(currentNotification);
    }

    /**
     * generate a notification template
     * @param {String} message
     */
    static generateNotificationTemplate(message) {
        return `
            <div class="card card-notification red lighten-4 z-depth-3">
                <div class="card-content">
                    <p><i class="material-icons">error_outline</i>${message}</p>
                </div>
            </div>
        `;
    }
}