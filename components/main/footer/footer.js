class Footer extends HTMLElement {
    constructor() {
        super();

        this.innerHTML =
            `
                <div class=footer>
                    <p class="footer__text">
                       &copy; 2021 Исторические Игры. Все права защищены 
                    </p>
                </div>
            `;
    }
}
customElements.define('u-footer', Footer);
