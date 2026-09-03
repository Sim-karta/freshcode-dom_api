class UserCard {
    selectors = {
        root: "[data-js-user-card]",
        likeBtn: "[data-js-like-btn]",
        projectsBtn: "[data-js-projects-btn]",
        subscribeBtn: "[data-js-subscribe-btn]",
        subscribeText: "[data-js-subscribe-text]",
        subscribeIcon: "[data-js-subscribe-icon]",
    };

    stateClasses = {
        isActive: "is-active",
        isHidden: "visually-hidden",
    };

    stateText = {
        isSubscribe: "You follow",
        isNotSubscribe: "Follow",
    };

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root);
        this.likeBtnElement = this.rootElement.querySelector(
            this.selectors.likeBtn,
        );
        this.projectsBtnElement = this.rootElement.querySelector(
            this.selectors.projectsBtn,
        );
        this.subscribeBtnElement = this.rootElement.querySelector(
            this.selectors.subscribeBtn,
        );
        this.subscribeTextElement = this.subscribeBtnElement.querySelector(
            this.selectors.subscribeText,
        );
        this.subscribeIconElements = this.subscribeBtnElement.querySelectorAll(
            this.selectors.subscribeIcon,
        );
        this.bindEvents();
    }

    bindEvents() {
        this.likeBtnElement.addEventListener("click", this.onLikeBtnClick);
        this.projectsBtnElement.addEventListener(
            "click",
            this.onProjectsBtnClick,
        );
        this.subscribeBtnElement.addEventListener(
            "click",
            this.onSubscribeBtnClick,
        );
    }

    onLikeBtnClick = () => {
        this.likeBtnElement.classList.toggle(this.stateClasses.isActive);
    };

    onProjectsBtnClick = (event) => {
        event.preventDefault();
        console.log("Перейти у розділ проектів");
    };

    onSubscribeBtnClick = () => {
        const isActive = this.subscribeBtnElement.classList.toggle(
            this.stateClasses.isActive,
        );
        this.subscribeTextElement.textContent = isActive
            ? this.stateText.isSubscribe
            : this.stateText.isNotSubscribe;
        this.subscribeIconElements.forEach((icon) => {
            icon.classList.toggle(this.stateClasses.isHidden);
        });
    };
}

export default UserCard;
