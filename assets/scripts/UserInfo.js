const operators = {
    Київстар: ["067", "068", "096", "097", "098", "077"],
    Vodafone: ["050", "066", "095", "099", "075"],
    lifecell: ["063", "073", "093"],
};

class UserInfo {
    selectors = {
        root: "[data-js-user-card]",
        birthday: "[data-js-user-birthday]",
        email: "[data-js-user-email]",
        tel: "[data-js-user-tel]",
    };

    stateClasses = {
        isActive: "is-active",
        isHidden: "visually-hidden",
    };

    stateText = {
        isSubscribe: "...",
        isNotSubscribe: "<",
    };

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root);
        this.birthdayElement = this.rootElement.querySelector(
            this.selectors.birthday,
        );
        this.emailElement = this.rootElement.querySelector(
            this.selectors.email,
        );
        this.telElement = this.rootElement.querySelector(this.selectors.tel);
        this.bindEvents();
    }

    bindEvents() {}
}

export default UserInfo;
