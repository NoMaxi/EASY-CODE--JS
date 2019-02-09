class NotificationsUI {
    constructor() {
        this.notificationContainer = document.querySelector('.news-wrap .row');
    }

    /**
     *
     * @param {String} message
     */
    addNotification(message) {
        const notificationTemplate = NotificationsUI.generateNotificationTemplate(message);
        this.notificationContainer.insertAdjacentHTML('afterbegin', notificationTemplate);
    }

    removeNotification() {
        const currentNotification = document.querySelector('.card-notification');
        if (currentNotification) this.notificationContainer.removeChild(currentNotification);
    }

    /**
     *
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