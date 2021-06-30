class SubscribeUs extends HTMLElement {
    constructor() {
        super();

        this.innerHTML =
            `
                <div class="subscribeUs">
                <div class="subscribeUs__wrapper">
                    <h1 class="subscribeUs__header">Subscribe with Us</h1>
                    <form action="#" class="subscribeUs__form">
                        <input type="email" class="subscribeUs__form_input" placeholder="Email">
                        <button class="subscribeUs__form_submitBtn">Subscribe</button>
                    </form>
                </div>
                </div>
            `;
    }
}

customElements.define('u-subscribe-us', SubscribeUs)
