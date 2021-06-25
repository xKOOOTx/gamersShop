class MainHeaderBlock extends HTMLElement {
    constructor() {
        super();

        this.innerHTML =
            `
            <div class="mainHeaderBlock">
                <u-info-header></u-info-header>
            </div>
            `;
    }

}

customElements.define('u-main-header-block', MainHeaderBlock);
