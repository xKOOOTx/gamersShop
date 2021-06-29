class SubscribeUs extends HTMLElement {
    constructor() {
        super();

        this.innerHTML =
            `
                <div class="subscribeUs"></div>
            `;
    }
}

customElements.define('u-subscribe-us', SubscribeUs)
