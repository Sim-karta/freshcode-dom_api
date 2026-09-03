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

        const operatorCode = this.telElement.textContent.trim().slice(4, 7);
        this.operator = Object.entries(operators).find(([, codes]) => {
            return codes.includes(operatorCode);
        })[0];

        const birthday = this.birthdayElement.textContent.trim();
        const [day, month, year] = birthday.split(".").map(Number);

        const today = new Date();

        this.age = today.getFullYear() - year;

        if (
            today.getMonth() + 1 < month ||
            (today.getMonth() + 1 == month && today.getDate() < day)
        ) {
            this.age--;
        }
    }

    bindEvents() {
        this.birthdayElement.addEventListener("mouseenter", () => {
            this.birthdayElement.style.setProperty(
                "--age",
                `"${this.age} років"`,
            );
        });

        this.birthdayElement.addEventListener("mouseleave", () => {
            this.birthdayElement.style.setProperty("--age", ``);
        });

        this.telElement.addEventListener("mouseenter", () => {
            this.telElement.style.setProperty(
                "--tel",
                `"${this.operator}: ${this.telElement.textContent.trim()}"`,
            );
        });

        this.telElement.addEventListener("mouseleave", () => {
            this.telElement.style.setProperty("--tel", ``);
        });
    }
}

export default UserInfo;
