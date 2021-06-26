class MainInfoBlock extends HTMLElement {
    constructor() {
        super();

        this.innerHTML =
            `
                <div class="mainInfoBlock">
                    <h3 class="mainInfoBlock__h3">Nunc eget nibh</h3>
                    <h1 class="mainInfoBlock__h1">Morbi in nisl auctor</h1>
                </div>
            `;
    }
}

customElements.define('u-main-info-block', MainInfoBlock);
