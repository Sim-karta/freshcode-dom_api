class UserCard {
    selectors = {
        root: "[data-js-user-card]",
        likeBtn: "[data-js-like-btn]",
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
        this.subscribeBtnElement.addEventListener(
            "click",
            this.onSubscribeBtnClick,
        );
    }

    onLikeBtnClick = () => {
        this.likeBtnElement.classList.toggle(this.stateClasses.isActive);
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
