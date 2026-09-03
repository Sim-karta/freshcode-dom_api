class Router {
    selectors = {
        root: "[data-js-user-card]",
        profileBtn: "[data-js-profile-btn]",
    };

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root);
        this.profileBtnElements = this.rootElement.querySelectorAll(
            this.selectors.profileBtn,
        );
        this.bindEvents();
    }

    bindEvents() {
        this.profileBtnElements.forEach((btn) => {
            btn.addEventListener("click", this.route);
        });
    }

    route = (event) => {
        event.preventDefault();

        const button = event.currentTarget;

        if (button.ariaLabel === "Projects") {
            this.onProjectsBtnClick();
        } else if (button.ariaLabel === "Profile") {
            this.onProfileBtnClick();
        } else if (button.ariaLabel === "Posts") {
            this.onPostsBtnClick();
        }
    };

    onProjectsBtnClick = () => {
        console.log("Перейти у розділ проектів");
    };

    onProfileBtnClick = () => {
        console.log("Перейти у профіль");
    };

    onPostsBtnClick = () => {
        console.log("Перейти у розділ публікацій");
    };
}

export default Router;
