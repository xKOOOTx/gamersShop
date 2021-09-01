class MainHeaderBlock extends HTMLElement {
    constructor() {
        super();

        this.innerHTML =
            `
            <div class="mainHeaderBlock">
                <u-info-header></u-info-header>
                <u-navigation></u-navigation>
                <u-main-info-block></u-main-info-block>
            </div>
            `;
    }

}

customElements.define('u-main-header-block', MainHeaderBlock);


